import { create } from "zustand";
import {
  createImagePreviewState,
  isSelectionValid,
  isValidImageFile,
} from "../helper/util";
import { IMAGE_ERRORS } from "../helper/helper";

export const useLoadStore = create((set, get) => ({
  load: false,

  setLoad: (bool) => {
    set({ load: bool });
  },
}));

const useImageStore = create((set, get) => ({
  preview: "",
  error: "",
  selections: {
    noText: false,
    plainBackground: false,
    color: "",
    aspectRatio: "",
  },
  imgFile: "",
  generatedPrompt: "",

  setGeneratedPrompt: (value) => {
    set({ generatedPrompt: value });
  },

  setSelections: (value) => {
    set((state) => ({
      selections: {
        ...state.selections,
        ...value,
      },
    }));
  },

  handleImage: (e) => {
    const file = e.target.files[0];
    const { valid, error } = isValidImageFile(file);

    if (!valid) {
      set({ error, preview: "" });
      return;
    }

    set(createImagePreviewState(file));
  },

  handleRemove: (e, inputRef) => {
    e.stopPropagation();
    set({ preview: "" });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  },

  validateSelections: () => {
    const { selections } = get();

    if (!selections.aspectRatio) {
      set({ error: "Select aspect ratio" });
      return false;
    }

    if (!selections.color) {
      set({ error: "Select color" });
      return false;
    }

    set({ error: "" });
    return true;
  },

  validateSelections: () => {
    const { selections, preview } = get();
    const { valid, error } = isSelectionValid(selections);

    if (!preview) {
      set({ error: IMAGE_ERRORS.noFile });
      return false;
    }

    if (!valid) {
      set({ error });
      return false;
    }

    return true;
  },
}));

export const requestStore = create((set, get) => ({
  sendReq: async () => {
    const { imgFile, selections, validateSelections, setGeneratedPrompt } =
      useImageStore.getState();
    const { setLoad } = useLoadStore.getState();

    setLoad(true);

    if (!validateSelections()) return;

    const formData = new FormData();
    formData.append("image", imgFile);
    formData.append("prompt", JSON.stringify(selections));

    const res = await fetch("http://localhost:5000/api/gemini/analyze-image", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.json();

    setLoad(false);

    setGeneratedPrompt(data.result);

    return data;
  },
}));

export default useImageStore;
