import cloudinary from "../config/cloudinary.js";
import { uploadToCloudinary } from "../helper/imageHelper.js";
import { errorResponse, successResponse } from "../helper/responseHelper.js";
import { saveDb } from "../services/cloudinaryService.js";

const uploadController = async (req, res) => {
  try {
    if (!req.file) {
      return errorResponse(res, 400, "No file uploaded");
    }

    console.log("Received file buffer:", req.file);

    const uploadResult = await uploadToCloudinary(req.file.buffer);

    console.log("Cloudinary upload result:", uploadResult);

    const data = await saveDb(req.file, uploadResult);

    console.log("Image uploaded and saved to DB:", data);
    return successResponse(res, 200, {
      data,
    });
  } catch (error) {
    return errorResponse(
      res,
      error.statusCode || 500,
      error.message || "Failed to upload image",
      error.details || error.message,
    );
  }
};

export default uploadController;
