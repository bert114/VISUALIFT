import axios from "axios";
import { IMAGE_ERRORS, isValidFileSize } from "./helper";
import useImageStore1 from "../store/useImageStorecopy.js";

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

export async function describeImgg(img) {
  console.log("ns click na");
  const file = useImageStore1.getState().file;

  const formData = new FormData();
  formData.append("image", file);

  const res = await axios.post(
    "http://localhost:5000/api/vision/describe",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return res.data.description;
}

export const buildPrompt = async (prompt, userPref) => {
  const res = await axios.post("http://localhost:5000/api/prompt/build", {
    prompt,
    userPref,
  });

  console.log(res.data.data);
};
