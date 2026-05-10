import ERROR_MESSAGES from "../constants/errorMessages.js";
import throwError from "../utils/throwErrors.js";

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
const maxFileSize = 10 * 1024 * 1024; // 10MB

export function validateUploadFile(file) {
  if (!file) {
    throwError(ERROR_MESSAGES.IMAGE_REQUIRED, 400);
  }

  if (!allowedMimeTypes.includes(file.mimetype)) {
    throwError(ERROR_MESSAGES.INVALID_FILE_TYPE, 400);
  }

  if (file.size > maxFileSize) {
    throwError(ERROR_MESSAGES.FILE_TOO_LARGE, 400);
  }
}
