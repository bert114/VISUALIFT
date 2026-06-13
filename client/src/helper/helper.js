import axios from "axios";
import useLoadStore from "../store/useLoadStore.js";
import { models } from "../static/constantfile.js";
export function isValidFileSize(file, maxSize = 5 * 1024 * 1024) {
  return file.size <= maxSize;
}

export const IMAGE_ERRORS = {
  noFile: "No file selected.",
  type: "Only JPG, PNG, and WEBP files are allowed.",
  size: "File must be 5MB or less.",
};

export async function uploadImage(img) {
  const { setLoad } = useLoadStore.getState();

  const formData = new FormData();
  formData.append("image", img);

  const response = await axios.post(
    "http://localhost:5000/api/user/upload",
    formData,
    {
      onUploadProgress: (progressEvent) => {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        //setUploadProgress(percent);
        console.log(`${percent}% uploaded`);
      },
    },
  );

  return response;
}

export function getUrl(img) {
  const path = img.data.data.data.url;

  return path;
}

export const getNumber = (model) => {
  const findModel = models.find((item) => item.model === model);
  const num = findModel.n;

  return [1, 2, 3, 4].filter((n) => n <= num);
};
