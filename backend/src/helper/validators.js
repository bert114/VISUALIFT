import throwError from "../utils/throwErrors.js";

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
const maxFileSize = 10 * 1024 * 1024; // 10MB

export function validateUploadFile(file) {
  if (!file) {
    throwError("IMAGE_REQUIRED", 400);
  }

  if (!allowedMimeTypes.includes(file.mimetype)) {
    throwError("INVALID_FILE_TYPE", 400);
  }

  if (file.size > maxFileSize) {
    throwError("FILE_TOO_LARGE", 400);
  }
}
