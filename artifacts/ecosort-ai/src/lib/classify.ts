export type WasteCategory = {
  label: string;
  emoji: string;
  severity: "danger" | "success" | "info" | "warning";
  instruction: string;
};

type SpecificItem = {
  keywords: string[];
  result: WasteCategory;
};

const specificItems: SpecificItem[] = [
  {
    keywords: ["pizza box"],
    result: {
      label: "Compost / Recycle",
      emoji: "🍕",
      severity: "info",
      instruction: "Tear the box apart! The greasy bottom half must go in the compost (grease ruins paper recycling). The clean top lid can go in the recycling bin.",
    },
  },
  {
    keywords: ["laptop", "phone"],
    result: {
      label: "E-Waste",
      emoji: "💻",
      severity: "danger",
      instruction: "Before recycling, back up your data and perform a factory reset to protect your privacy. Then, take it to a certified e-waste recycler.",
    },
  },
  {
    keywords: ["battery", "batteries"],
    result: {
      label: "E-Waste",
      emoji: "🔋",
      severity: "danger",
      instruction: "Never throw in the trash! Tape the terminals (ends) with clear tape to prevent fire hazards, then drop them off at a local battery collection bin.",
    },
  },
  {
    keywords: ["coffee cup"],
    result: {
      label: "Landfill / Recycle",
      emoji: "☕",
      severity: "warning",
      instruction: "Most paper coffee cups are lined with plastic and cannot be recycled — they go in the landfill. However, the plastic lid should be rinsed and put in the recycling bin.",
    },
  },
  {
    keywords: ["plastic bottle"],
    result: {
      label: "Recycle",
      emoji: "♻️",
      severity: "info",
      instruction: "Empty all liquids, give it a quick rinse, and put the plastic cap back on tightly before placing it in the recycling bin.",
    },
  },
  {
    keywords: ["glass jar"],
    result: {
      label: "Recycle",
      emoji: "🫙",
      severity: "info",
      instruction: "Rinse out all food residue. Metal lids can usually be recycled too, but remove them from the jar before tossing both into the bin.",
    },
  },
];

export function classifyWaste(item: string): WasteCategory | null {
  const input = item.toLowerCase().trim();
  if (!input) return null;

  // Check specific items first for detailed instructions
  for (const specific of specificItems) {
    if (specific.keywords.some(k => input.includes(k))) {
      return specific.result;
    }
  }

  // Fall back to general category logic
  const eWaste = ["electronics", "wire", "charger", "computer", "tablet", "tv", "monitor", "keyboard", "mouse", "cable"];
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
