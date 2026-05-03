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
    desc: "Photo-like generation.",
    icon: "📷",
    recommended: true,
  },
  {
    title: "Illustration",
    desc: "Drawn visual style.",
    icon: "🎨",
  },
  {
    title: "3D",
    desc: "Depth and objects.",
    icon: "🧊",
  },
  {
    title: "Anime",
    desc: "Stylized characters.",
    icon: "✨",
  },
  {
    title: "Minimalist",
    desc: "Clean and simple.",
    icon: "◻",
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
