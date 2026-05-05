const purposes = [
  "All",
  "Icon",
  "Product",
  "Social Post",
  "Website Banner",
  "Logo",
  "Art",
];

const models = [
  {
    title: "Realistic",
    model: "img4",
    desc: "Photorealistic images with strong detail and prompt adherence.",
    icon: "📷",
    recommended: true,
    n: 4,
    capabilities: ["All Ratios", "Up to 4 Images", "I2I Editing"],
  },
  {
    title: "Illustration",
    model: "midjourney",
    desc: "High-quality artistic and illustrated visual styles.",
    icon: "🎨",
    n: 1,
    capabilities: ["All Ratios", "Up to 1 Image", "I2I Editing"],
  },
  {
    title: "3D",
    model: "flux2-dev",
    desc: "Depth-focused object scenes with strong structure and realism.",
    icon: "🧊",
    n: 1,
    capabilities: ["All Ratios", "Up to 1 Image", "I2I Editing"],
  },
  {
    title: "Anime",
    model: "qwen",
    desc: "Anime, manga, characters, and stylized illustrations.",
    icon: "✨",
    n: 4,
    capabilities: ["All Ratios", "Up to 4 Images", "I2I Editing"],
    async: true,
  },
  {
    title: "Minimalist",
    model: "flux-schnell",
    desc: "Fast, clean, simple visuals for quick generation.",
    icon: "◻",
    n: 1,
    capabilities: ["All Ratios", "Up to 1 Image", "I2I Editing"],
  },
];

const backgrounds = [
  { title: "Solid white", desc: "Clean backdrop" },
  { title: "Detailed scene", desc: "Full environment" },
  { title: "Transparent", desc: "Checkerboard" },
];

const colors = ["cyan", "blue", "purple", "custom"];

const ratios = [
  { label: "1:1", shape: "square" },
  { label: "16:9", shape: "wide" },
  { label: "9:16", shape: "tall" },
  { label: "4:3", shape: "wide" },
  { label: "3:4", shape: "tall" },
];

export { purposes, models, backgrounds, colors, ratios };
