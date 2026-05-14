import { create } from "zustand";
import { buildPrompt, describeImgg } from "../helper/util.js";
import useUIStore from "./useUIStore.js";
import useImageStore from "./useImageStorecopy.js";

export const selectedSettings = create((set) => ({
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

  setUserPref: (key, value) =>
    set((state) => ({
      userPref: {
        ...state.userPref,
        [key]: value,
      },
    })),

  setDefault: () => {
    set({
      model: "img4",
      prompt: "A vibrant oil painting of a futuristic cityscape at sunset",
      n: 1,
      size: "1792x1024",
      response_format: "url",
      imagePurpose: "All",
      background: "Solid white",
      color: "#00E5FF",
    });
  },
}));

const usePromptStore = create((set) => ({
  prompt: "",
  isUploaded: false,
  generatedPrompt: `The image shows a young man with dark hair wearing a white collared shirt, blue tie, and black backpack. He is standing against a beige wall adorned with various posters and signs. The man's gaze is directed straight at the camera, creating an engaging portrait. Create this as a Website Banner. Use a Transparent
Checkerboard background. Use a #00E5FF color palette.`,

  step: 1,

  setPrompt: (prompt) => set({ prompt }),
  setStep: (step) => set({ step }),

  setIsUploaded: (status) => set({ isUploaded: status }),
  setGeneratedPrompt: (generatedPrompt) => set({ generatedPrompt }),

  handleGenerate: async (state = null, steps = null) => {
    const { setLoading, showToast, setState } = useUIStore.getState();
    const { setUserPref } = selectedSettings.getState();

    setLoading(true);
    setState("analyzing");
    console.log("click");

    try {
      showToast("Building prompt...", "warning");

      if (!useImageStore.getState().img) {
        throw new Error("No image uploaded");
      }

      const describeImage = await describeImgg();
      setUserPref("describeImage", describeImage);

      const userPref = selectedSettings.getState().userPref;
      const generatedPrompt = await buildPrompt(userPref);

      console.log(generatedPrompt);
      set({
        generatedPrompt,
        step: steps || 2,
      });

      showToast("Done", "success");
    } catch (error) {
      showToast(error.message || "Failed to build prompt", "error");
    } finally {
      setLoading(false);
      setState("initial");
    }
  },

  handleReset: () => {
    const { setDefault } = selectedSettings.getState();
    setDefault();
    set({
      prompt: "",
      isUploaded: false,
      step: 1,
      generatedPrompt: "",
    });
  },
}));

export default usePromptStore;
