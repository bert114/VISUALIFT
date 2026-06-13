import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import throwError from "../utils/throwErrors.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function validateCloudinaryConfig() {
  try {
    const result = await cloudinary.api.ping();

    if (result.status !== "ok") {
      throwError("Cloudinary ping did not return ok status", 401);

      return;
    }

    console.log("Cloudinary credentials are valid");
  } catch (error) {
    throwError("Cloudinary ping did not return ok status", 401);
  }
}

export default cloudinary;
