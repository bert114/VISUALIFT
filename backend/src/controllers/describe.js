import dotenv from "dotenv";
import { generateImageDescription } from "../services/visionService.js";
import { errorResponse, successResponse } from "../helper/responseHelper.js";
dotenv.config();

export const describeImage = async (req, res) => {
  try {
    if (!req.file) return errorResponse(res, 400, "Image file is required");

    const description = await generateImageDescription(req.file.buffer);

    return successResponse(res, 200, {
      description,
    });
  } catch (error) {
    console.error("Describe image error:", error);

    return errorResponse(
      res,
      error.statusCode || 500,
      error.message || "Failed to describe image",
      error.details || error.message,
    );
  }
};
