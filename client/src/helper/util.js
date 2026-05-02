import { IMAGE_ERRORS, isValidFileSize } from "./helper";

export function isValidImageFile(file) {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!file) {
    return { valid: false, error: IMAGE_ERRORS.noFile };
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: IMAGE_ERRORS.type };
  }

  if (!isValidFileSize(file)) {
    return { valid: false, error: IMAGE_ERRORS.size };
  }

  return { valid: true, error: "" };
}

export function createImagePreviewState(file) {
  return {
    error: "",
    preview: URL.createObjectURL(file),
    imgFile: file,
  };
}

export function isSelectionValid(selections) {
  if (!selections.aspectRatio) {
    return { valid: false, error: "Select aspect ratio" };
  }

  if (!selections.color) {
    return { valid: false, error: "Select color" };
  }

  return { valid: true, error: "" };
}
