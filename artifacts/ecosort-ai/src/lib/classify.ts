export type WasteCategory = {
  label: string;
  emoji: string;
  severity: "danger" | "success" | "info" | "warning";
  instruction: string;
};

export function classifyWaste(item: string): WasteCategory | null {
  const input = item.toLowerCase().trim();
  if (!input) return null;

  const eWaste = ["battery", "batteries", "laptop", "phone", "electronics", "wire", "charger", "computer", "tablet", "tv", "monitor", "keyboard", "mouse", "cable"];
  const compost = ["apple", "food", "banana", "peel", "vegetable", "leaves", "grass", "fruit", "coffee grounds", "eggshell", "garden", "organic", "pizza"];
  const recycle = ["plastic", "paper", "cardboard", "bottle", "glass", "can", "aluminum", "tin", "newspaper", "magazine", "box", "carton", "jug"];
  const hazardous = ["paint", "chemical", "oil", "medicine", "medication", "drug", "bulb", "fluorescent", "pesticide", "bleach", "battery acid", "fertilizer", "lighter"];

  if (eWaste.some(w => input.includes(w))) {
    return { label: "E-Waste", emoji: "🔋", severity: "danger", instruction: "Do NOT throw in the regular bin! Take this to an electronics recycling center to prevent toxic chemical leaks." };
  }
  if (compost.some(w => input.includes(w))) {
    return { label: "Compost", emoji: "🌱", severity: "success", instruction: "Great! This is organic matter. Put it in your green compost bin so it can return to the earth." };
  }
  if (recycle.some(w => input.includes(w))) {
    return { label: "Recycle", emoji: "♻️", severity: "info", instruction: "Make sure it is clean and dry, then place it in your blue recycling bin." };
  }
  if (hazardous.some(w => input.includes(w))) {
    return { label: "Hazardous", emoji: "⚠️", severity: "warning", instruction: "Danger! This requires special disposal. Check your local municipal guidelines for hazardous waste drop-off." };
  }
  return { label: "Landfill", emoji: "🗑️", severity: "warning", instruction: "This item goes to the general waste bin. Try to find reusable alternatives in the future!" };
}
