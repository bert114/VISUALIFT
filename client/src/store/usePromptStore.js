import { create } from "zustand";

const usePromptStore = create((set) => ({
  prompt: "",
  isUploaded: false,
  setPrompt: (newPrompt) => set({ prompt: newPrompt }),
  setIsUploaded: (status) => set({ isUploaded: status }),
  handleGenerate: () => {},
}));

export const selectedSettings = create((set) => ({
  imagePurpose: "profile_picture",
  model: "dall-e-3",
  background: null,
  color: null,
  aspectRatio: "1:1",
  numberOfImages: 1,

  setImagePurpose: (purpose) => set({ imagePurpose: purpose }),
  setModel: (model) => set({ model }),
  setBackground: (background) => set({ background }),
  setColor: (color) => set({ color }),
  setAspectRatio: (aspectRatio) => set({ aspectRatio }),
  setNumberOfImages: (number) => set({ numberOfImages: number }),
}));

export default usePromptStore;
