import { create } from "zustand";
import useImageStore1 from "./useImageStorecopy.js";
import { buildPrompt, describeImgg } from "../helper/util.js";
import useToastStore from "./useToastStore.js";

const usePromptStore = create((set) => ({
  prompt: "",
  isUploaded: false,
  generatedPrompt: "",
  loading: false,
  step: 1,

  setPrompt: (newPrompt) => set({ prompt: newPrompt }),
  setIsUploaded: (status) => set({ isUploaded: status }),

  handleGenerate: async () => {
    set({ loading: true });
    const { showToast } = useToastStore.getState();
    const { setUserPref } = selectedSettings.getState();

    showToast("building prompt.....", "warning");
    const describeImage = await describeImgg();
    console.log("done describing");
    setUserPref("describeImage", describeImage);

    const userPreference = selectedSettings.getState().userPref;

    showToast("building prompt.....", "warning");

    const generatedPrompt = await buildPrompt(userPreference);

    set({ generatedPrompt });
    showToast("done", "success");
    set({ loading: true, step: 2 });
  },

  setGeneratedPrompt: (value) => {
    set({ generatedPrompt: value });
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
