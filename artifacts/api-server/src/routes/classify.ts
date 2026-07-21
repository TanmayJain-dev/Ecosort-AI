import { Router, type IRouter } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router: IRouter = Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");

const SYSTEM_PROMPT = `You are an expert waste disposal advisor. When given the name of any item, respond ONLY with a JSON object (no markdown, no explanation) with exactly these fields:

{
  "label": "short disposal category name (e.g. Recycle, Compost, E-Waste, Hazardous, Landfill)",
  "emoji": "a single relevant emoji",
  "severity": "one of: success | info | warning | danger",
  "instruction": "2-3 sentences of specific, actionable disposal advice for this exact item"
}

Severity guide:
- success = compostable / fully recyclable, good for the planet
- info = recyclable with minor prep needed
- warning = goes to landfill or needs special handling
- danger = hazardous / e-waste, must NOT go in regular bin

Be specific to the item — never give generic advice. Always mention any prep steps (rinse, remove battery, tape terminals, etc.).`;

router.post("/classify", async (req, res) => {
  const { item } = req.body as { item?: string };

  if (!item || typeof item !== "string" || !item.trim()) {
    res.status(400).json({ error: "item is required" });
    return;
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(
      `How should I dispose of: ${item.trim()}`
    );

    const text = result.response.text().trim();

    const jsonText = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    const parsed = JSON.parse(jsonText) as {
      label: string;
      emoji: string;
      severity: "success" | "info" | "warning" | "danger";
      instruction: string;
    };

    if (!parsed.label || !parsed.emoji || !parsed.severity || !parsed.instruction) {
      throw new Error("Invalid response shape from model");
    }

    req.log.info({ item, label: parsed.label }, "classified waste item");
    res.json(parsed);
  } catch (err) {
    req.log.error({ err, item }, "classify failed");
    res.status(500).json({ error: "Classification failed" });
  }
});

export default router;
