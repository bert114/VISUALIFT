import { v2 as cloudinary } from "cloudinary";
import { GoogleGenerativeAI } from "@google/generative-ai";
import env from "./env.js";
import connectDB from "./src/config/db.js";

async function checkOllama() {
  try {
    const response = await fetch(`${env.OLLAMA_URL}/api/tags`);
    if (!response.ok) {
      throw new Error(`Ollama failed with status ${response.status}`);
    }

    console.log("Ollama OK");
  } catch (error) {
    throw new Error(`Ollama connection failed: ${error.message}`);
  }
}

async function checkGemini() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${env.GEMINI_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Gemini API key failed with status ${response.status}`);
  }

  console.log("Gemini API key OK");
}

async function checkCloudinary() {
  cloudinary.config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
  });

  await cloudinary.api.ping();

  console.log("Cloudinary OK");
}

async function checkInfip() {
  const response = await fetch(env.INFIP_BASE_URL, {
    headers: {
      Authorization: `Bearer ${env.INFIP_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`INFIP failed with status ${response.status}`);
  }

  console.log("INFIP OK");
}

async function checkMongoDb() {
  const response = await fetch(env.INFIP_BASE_URL, {
    headers: {
      Authorization: `Bearer ${env.INFIP_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`INFIP failed with status ${response.status}`);
  }

  console.log("INFIP OK");
}

export async function checkExternalServices() {
  try {
    await connectDB();
    await checkOllama();
    await checkGemini();
    await checkCloudinary();
    await checkInfip();
    console.log("All external services OK");
  } catch (error) {
    console.log("Main error:", error.message);
    console.log("Error code:", error.code);
    console.error("Server health check failed:");

    //process.exit(1);
  }
}
