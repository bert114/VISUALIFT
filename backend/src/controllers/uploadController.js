import cloudinary from "../config/cloudinary.js";
import ERROR_MESSAGES from "../constants/errorMessages.js";
import { uploadToCloudinary } from "../helper/imageHelper.js";
import { errorResponse, successResponse } from "../helper/responseHelper.js";
import { validateUploadFile } from "../helper/validators.js";
import { saveDb } from "../services/cloudinaryService.js";
import throwError from "../utils/throwErrors.js";

const uploadController = async (req, res, next) => {
  try {
    const file = req.file;

    validateUploadFile(file);

    const uploadResult = await uploadToCloudinary(req.file.buffer);

    console.log("Cloudinary upload result:", uploadResult);

    const data = await saveDb(req.file, uploadResult);

    console.log("Image uploaded and saved to DB:", data);
    return successResponse(res, 200, {
      data,
    });
  } catch (error) {
    next(error);
  }
};

export default uploadController;
