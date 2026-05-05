import { create } from "zustand";
import useImageStore1 from "./useImageStorecopy.js";
import { buildPrompt, describeImgg } from "../helper/util.js";
import useToastStore from "./useToastStore.js";
import { getNumber } from "../helper/helper.js";

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

    console.log(userPreference);

    showToast("building prompt.....", "warning");

    const generatedPrompt = await buildPrompt(userPreference);

    set({ generatedPrompt: userPreference });
    showToast("done", "success");
    set({ loading: true, step: 2 });
  },

  setGeneratedPrompt: (value) => {
    set({ generatedPrompt: value });
  },
}));

export const selectedSettings = create((set, get) => ({
  //   const payload = {
  //   model: "img4",
  //   prompt: "",
  //   n: 2,
  //   size: "",
  //   response_format: "url"
  // };

  userPref: {
    model: "img4",
    prompt: "A vibrant oil painting of a futuristic cityscape at sunset",
    n: 1,
    size: "1792x1024",
    response_format: "url",
    imagePurpose: "All",
    background: "Solid white",
    color: "#00E5FF",
  },

  setUserPref: (key, value) => {
    set((state) => {
      const updatedPref = {
        ...state.userPref,
        [key]: value,
      };

      return { userPref: updatedPref };
    });

    console.log(get().userPref);
  },
}));

export default usePromptStore;
