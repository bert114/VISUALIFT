import axios from "axios";
import { IMAGE_ERRORS, isValidFileSize } from "./helper";
import useImageStore from "../store/useImageStorecopy.js";

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
  const file = useImageStore.getState().file;

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

export const buildPrompt = async (obj) => {
  const res = await axios.post("http://localhost:5000/api/prompt/build", obj);

  return res.data.result;
};

export const checkLoaded = (images, cb) => {
  images.forEach((img, index) => {
    const image = new Image();

    image.onload = () => {
      cb((prev) => ({
        ...prev,
        [index]: true,
      }));
    };

    image.src = img.url;
  });
};

export const downloadImageUrl = async (url, bool) => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const urls = Array.isArray(url) ? url : [url];

  for (const url of urls) {
    const res = await fetch(url, { mode: "cors" });
    if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);

    const blobUrl = URL.createObjectURL(await res.blob());
    const link = document.createElement("a");

    link.href = blobUrl;
    link.download =
      url.split("/").pop()?.split("?")[0] || `image-${Date.now()}.jpg`;

    document.body.append(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(blobUrl);
    await sleep(300);
  }
};
