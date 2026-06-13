import { create } from "zustand";
import {
  getImage,
  isValidFileSize,
  isValidImage,
} from "../helper/helperImage.js";
import useToastStore from "./useToastStore.js";
import { getUrl, uploadImage } from "../helper/helper.js";
import { waitforElement } from "../helper/load.js";
import useLoadStore from "./useLoadStore.js";
import usePromptStore from "./usePromptStore.js";
import useUIStore from "./useUIStore.js";

/*
import { create } from "zustand";
import {
  getImage,
  isValidFileSize,
  isValidImage,
} from "../helper/helperImage.js";
import useToastStore from "./useToastStore.js";
import { getUrl, uploadImage } from "../helper/helper.js";
import { waitforElement } from "../helper/load.js";
import useLoadStore from "./useLoadStore.js";
import usePromptStore from "./usePromptStore.js";

const useImageStore = create((set, get) => ({
  img: null,
  file: null,

  handleImage: async (e) => {
    const { setLoad } = useLoadStore.getState();
    const { showToast } = useToastStore.getState();
    const { setIsUploaded } = usePromptStore.getState();
    set({ img: "", file: "" });
    setLoad(true);

    try {
      const img = getImage(e);

      const isValid = isValidImage(img) && isValidFileSize(img);

      if (!isValid) {
        throw new Error("Image invalid");
      }

      const data = await uploadImage(img);
      const url = getUrl(data);

      set({ img: url, file: e.target.files[0] });
      setLoad(false);

      await new Promise((resolve) => requestAnimationFrame(resolve));

      await waitforElement('[data-image="preview"]');

      showToast("Image uploaded successfully", "success");
      setIsUploaded(true);
    } catch (error) {
      showToast(error.message || "Failed to upload image", "error");
      setLoad(false);
    }
  },

  removeImage: () => {
    set({ img: null, file: null });
  },
}));

export default useImageStore;


*/

const useImageStore = create((set, get) => ({
  img: null,
  file: null,

  handleImage: async (e) => {
    const { setLoading, showToast, setState } = useUIStore.getState();
    const { setIsUploaded } = usePromptStore.getState();

    set({ img: null, file: null });
    setState("upload");

    try {
      const image = getImage(e);

      if (!isValidImage(image) || !isValidFileSize(image)) {
        e.target.value = "";
        return;
      }

      const data = await uploadImage(image);
      const url = getUrl(data);

      set({
        img: url,
        file: e.target.files[0],
      });

      console.log(get().file);
      console.log(data.data.data.data.url);

      await new Promise((resolve) => requestAnimationFrame(resolve));
      // await waitforElement('[data-image="preview"]');

      setIsUploaded(true);
      setState("complete");
      showToast("Image uploaded successfully", "success");

      e.target.value = "";
    } catch (error) {
      setIsUploaded(false);
      setState("initial");
      showToast(error.message || "Failed to upload image", "error");
    }
  },

  removeImage: (input = null) => {
    const { setIsUploaded } = usePromptStore.getState();

    set({ img: null, file: null });
    setIsUploaded(false);
  },
}));

export default useImageStore;
