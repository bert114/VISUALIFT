import { create } from "zustand";
import useImageStore1 from "./useImageStorecopy.js";
import { describeImgg } from "../helper/util.js";

const usePromptStore = create((set) => ({
  prompt: "",
  isUploaded: false,

  setPrompt: (newPrompt) => set({ prompt: newPrompt }),
  setIsUploaded: (status) => set({ isUploaded: status }),
  handleGenerate: async () => {
    const { setUserPref } = selectedSettings.getState();
    console.log("Describing uploaded image......");
    const describeImage = await describeImgg();
    console.log("done describing");
    setUserPref("describeImage", describeImage);

    const userPreference = selectedSettings.getState().userPref;

    console.log(userPreference);
  },
}));

export const selectedSettings = create((set) => ({
  userPref: {
    imagePurpose: "All",
    model: "Realistic",
    background: "Solid white",
    color: "#00E5FF",
    aspectRatio: "1:1",
    numberOfImages: "auto",
    describeImage: null,
  },

  setUserPref: (key, value) => {
    set((state) => ({
      userPref: {
        ...state.userPref,
        [key]: value,
      },
    }));
  },
}));

export default usePromptStore;
