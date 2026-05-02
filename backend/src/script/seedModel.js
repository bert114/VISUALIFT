import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import AvailableModel from "../model/aiModels.js";

dotenv.config();

const models = [
  {
    name: "Z-Image-Turbo",
    key: "z-image-turbo",
    tier: "Free",
    async: true,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Lightning-fast image generation with exceptional quality.",
  },
  {
    name: "Midjourney",
    key: "midjourney",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Industry-leading artistic image generation.",
  },
  {
    name: "Z-Uncen",
    key: "z-uncen",
    tier: "Pro",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Uncensored image generation model.",
  },
  {
    name: "Nano Banana Pro",
    key: "nbpro",
    tier: "Pro",
    async: true,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Premium model with superior quality and detail.",
  },
  {
    name: "Nano Banana",
    key: "nano-banana",
    tier: "Pro",
    async: true,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Flagship model with high quality and versatility.",
  },
  {
    name: "Imagen 3",
    key: "img3",
    tier: "Free",
    async: false,
    maxImages: 4,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "General-purpose image model.",
  },
  {
    name: "Imagen 4",
    key: "img4",
    tier: "Free",
    async: false,
    maxImages: 4,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Improved coherence, detail, and prompt adherence.",
  },
  {
    name: "Qwen",
    key: "qwen",
    tier: "Free",
    async: true,
    maxImages: 4,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Optimized for anime and illustrative styles.",
  },
  {
    name: "Flux Schnell",
    key: "flux-schnell",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Ultra-fast generation optimized for speed.",
  },
  {
    name: "Flux 2 Klein 9B",
    key: "flux2-klein-9b",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Advanced 9B model with strong quality.",
  },
  {
    name: "Flux 2 Klein 4B",
    key: "flux2-klein-4b",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Efficient 4B model balancing speed and quality.",
  },
  {
    name: "Flux 2 Dev",
    key: "flux2-dev",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Development version with photorealistic strengths.",
  },
  {
    name: "Lucid Origin",
    key: "lucid-origin",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Creative and dreamlike image generation.",
  },
  {
    name: "Phoenix",
    key: "phoenix",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Versatile model with strong consistency.",
  },
  {
    name: "SDXL",
    key: "sdxl",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Photorealistic, high-detail model.",
  },
  {
    name: "SDXL Lite",
    key: "sdxl-lite",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Lighter and faster SDXL variant.",
  },
  {
    name: "Dreamshaper",
    key: "dreamshaper",
    tier: "Free",
    async: false,
    maxImages: 1,
    supportsEditing: true,
    supportsAllRatios: true,
    description: "Dreamy landscapes and artistic looks.",
  },
];

const seedModels = async () => {
  try {
    await connectDB();

    await AvailableModel.deleteMany();
    await AvailableModel.insertMany(models);

    console.log("Models seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding models:", error);
    process.exit(1);
  }
};

seedModels();
