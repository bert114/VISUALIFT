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

const useImageStore1 = create((set, get) => ({
  img: "",

  handleImage1: async (e) => {
    const { setLoad } = useLoadStore.getState();
    const { showToast } = useToastStore.getState();
    const { setIsUploaded } = usePromptStore.getState();
    set({ img: "" });
    setLoad(true);

    try {
      const img = getImage(e);

      const isValid = isValidImage(img) && isValidFileSize(img);

      if (!isValid) {
        throw new Error("Image invalid");
      }

      const data = await uploadImage(img);
      const url = getUrl(data);

      set({ img: url });
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

  removeImage: () => set({ img: "" }),
}));

export default useImageStore1;
