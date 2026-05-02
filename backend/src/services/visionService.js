import dotenv from "dotenv";
import { bufferToBase64 } from "../utils/imageUtils.js";
import { generateWithOllama } from "../utils/ollamaClient.js";
dotenv.config();

export const generateImageDescription = async (imageBuffer) => {
  const base64Image = bufferToBase64(imageBuffer);

  const data = await generateWithOllama({
    model: process.env.OLLAMA_MODEL || "moondream",
    prompt: "Describe this image clearly and in detail.",
    images: [base64Image],
  });

  return data.response;
};
