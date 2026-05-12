import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),

  INFIP_API_KEY: z.string().min(1, "INFIP_API_KEY is required"),
  INFIP_BASE_URL: z.string().url("INFIP_BASE_URL must be a valid URL"),

  GEMINI_API_KEY: z.string().min(1, "GEMINI_API_KEY is required"),

  OLLAMA_URL: z.string().url("OLLAMA_URL must be a valid URL"),
  OLLAMA_MODEL: z.string().min(1, "OLLAMA_MODEL is required"),

  MONGODB_URI: z.string().min(1, "MONGODB_URI is required"),

  CLOUDINARY_CLOUD_NAME: z.string().min(1, "CLOUDINARY_CLOUD_NAME is required"),
  CLOUDINARY_API_KEY: z.string().min(1, "CLOUDINARY_API_KEY is required"),
  CLOUDINARY_API_SECRET: z.string().min(1, "CLOUDINARY_API_SECRET is required"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment variables:");
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export default parsed.data;
