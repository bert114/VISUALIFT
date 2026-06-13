import useImageStore from "../store/useImageStorecopy.js";
import useToastStore from "../store/useToastStore.js";
import useUIStore from "../store/useUIStore.js";

export const isValidImage = (file) => {
  const { showToast } = useUIStore.getState();
  const { removeImage } = useImageStore.getState();

  if (!file) {
    showToast("No file selected", "error");
    removeImage();
    return false;
  }

  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    showToast("Only JPG, PNG, and WEBP files are allowed", "error");
    const { removeImage } = useImageStore.getState();
    return false;
  }

  return true;
};

export const isValidFileSize = (file, maxMB = 5) => {
  const { showToast } = useUIStore.getState();
  const { removeImage } = useImageStore.getState();
  if (!file) {
    showToast("No file selected", "error");
    removeImage();
    return false;
  }

  if (file.size > maxMB * 1024 * 1024) {
    showToast(`File size must be ${maxMB}MB or less`, "error");
    removeImage();

    return false;
  }

  return true;
};

export function getImage(e) {
  e.preventDefault();
  return e.target.files?.[0] || e.dataTransfer?.files?.[0] || null;
}

export const preventDropDefault = (e) => e.preventDefault();
