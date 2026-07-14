import { useState, useRef, useEffect } from "react";
import { classifyWaste, WasteCategory } from "@/lib/classify";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Search, ShieldCheck, Globe, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const EXAMPLE_CHIPS = [
  "Plastic bottle",
  "Old laptop",
  "Banana peel",
  "Used batteries",
  "Cardboard box",
];

const API_BASE = import.meta.env.VITE_API_URL ?? "";

async function classifyWithAI(item: string): Promise<WasteCategory> {
  const res = await fetch(`${API_BASE}/api/classify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item }),
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json() as Promise<WasteCategory>;
}

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<WasteCategory | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isResponsibleOpen, setIsResponsibleOpen] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = async (query: string = inputValue) => {
    if (!query.trim() || isLoading) return;
    setInputValue(query);
    setIsLoading(true);
    setHasSearched(true);
    setResult(null);

    try {
      const aiResult = await classifyWithAI(query.trim());
      setResult(aiResult);
    } catch {
      // Fallback to local classification if API fails
      const fallback = classifyWaste(query);
      setResult(fallback);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const getResultColors = (severity: WasteCategory["severity"]) => {
    switch (severity) {
      case "success":
        return "bg-green-100 text-green-900 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800";
      case "danger":
        return "bg-red-100 text-red-900 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800";
      case "warning":
        return "bg-orange-100 text-orange-900 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800";
      case "info":
        return "bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800";
      default:
        return "bg-gray-100 text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans transition-colors duration-300">
      <header className="w-full border-b px-6 py-4 flex items-center justify-between bg-card z-10 sticky top-0">
        <div className="flex items-center gap-2 text-primary">
          <Leaf className="w-6 h-6" />
          <span className="font-display font-semibold text-lg tracking-tight">EcoSort AI</span>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="hidden sm:flex gap-1.5 items-center px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium">SDG 12</span>
            <span className="text-muted-foreground hidden md:inline ml-1 font-normal">— Responsible Consumption</span>
          </Badge>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 max-w-3xl mx-auto w-full">
        <motion.div 
          className="w-full space-y-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground">
              Sort with certainty.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
              Type any item to instantly find out how to dispose of it responsibly. 
              Small actions create a greener earth.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center shadow-lg bg-card rounded-2xl p-2 border-2 border-primary/20 focus-within:border-primary transition-all">
                <Search className="w-6 h-6 text-muted-foreground ml-3" />
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g. 'plastic bottle', 'old laptop', 'banana peel'"
                  className="flex-1 border-0 shadow-none focus-visible:ring-0 text-lg h-14 px-4 bg-transparent"
                  data-testid="input-waste-item"
                  disabled={isLoading}
                />
                <Button 
                  onClick={() => handleSearch()} 
                  size="lg" 
                  className="rounded-xl px-8 h-12 font-medium"
                  data-testid="button-sort-waste"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sorting…
                    </>
                  ) : (
                    "Sort Waste"
                  )}
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-muted-foreground py-1">Try:</span>
              {EXAMPLE_CHIPS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSearch(chip)}
                  disabled={isLoading}
                  className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid={`chip-example-${chip.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="w-full max-w-2xl mt-12 min-h-[200px]">
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center gap-4 p-12 text-muted-foreground"
              >
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <p className="text-base">Consulting the AI waste expert…</p>
              </motion.div>
            )}
            {!isLoading && hasSearched && result && (
              <motion.div
                key={result.label + result.instruction}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className={`border-2 overflow-hidden shadow-xl ${getResultColors(result.severity)}`} data-testid="card-result">
                  <CardContent className="p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/50 dark:bg-black/20 flex items-center justify-center text-6xl sm:text-7xl shadow-inner shrink-0" data-testid="text-result-emoji">
                      {result.emoji}
                    </div>
                    <div className="space-y-3 flex-1">
                      <h2 className="text-3xl sm:text-4xl font-display font-bold" data-testid="text-result-label">
                        {result.label}
                      </h2>
                      <p className="text-lg sm:text-xl font-medium opacity-90 leading-relaxed" data-testid="text-result-instruction">
                        {result.instruction}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
            {!isLoading && hasSearched && !result && inputValue && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="text-center p-8 text-muted-foreground" data-testid="text-result-empty">
                  We couldn't classify that item. Please try another description.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="w-full p-6 mt-auto">
        <div className="max-w-3xl mx-auto w-full">
          <Collapsible
            open={isResponsibleOpen}
            onOpenChange={setIsResponsibleOpen}
            className="w-full bg-card border rounded-2xl overflow-hidden shadow-sm"
          >
            <CollapsibleTrigger asChild>
              <button 
                className="flex items-center justify-between w-full p-4 text-left hover:bg-muted/50 transition-colors"
                data-testid="button-toggle-responsible-ai"
              >
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Responsible AI Principles
                </div>
                {isResponsibleOpen ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 pt-0 border-t bg-muted/20 text-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Fairness</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Accessible guidance designed to be helpful regardless of your local recycling capabilities.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Privacy</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      No user data, search history, or locations are stored or tracked by this application.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Transparency</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Clear explanations are provided for disposal rules to help educate, not just dictate.
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </footer>
    </div>
  );
}
