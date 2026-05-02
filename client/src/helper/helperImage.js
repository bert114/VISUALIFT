import useToastStore from "../store/useToastStore.js";

export const isValidImage = (file) => {
  const toast = useToastStore.getState().showToast;
  if (!file) {
    toast("No file selected", "error");
    return false;
  }

  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    toast("Only JPG, PNG, and WEBP files are allowed", "error");
    return false;
  }

  return true;
};

export const isValidFileSize = (file, maxMB = 5) => {
  const toast = useToastStore.getState().showToast;
  if (!file) {
    toast("No file selected", "error");
    return false;
  }

  if (file.size > maxMB * 1024 * 1024) {
    toast(`File size must be ${maxMB}MB or less`, "error");
    return false;
  }

  return true;
};

export function getImage(e) {
  e.preventDefault();
  return e.target.files?.[0] || e.dataTransfer?.files?.[0] || null;
}

export const preventDropDefault = (e) => e.preventDefault();
