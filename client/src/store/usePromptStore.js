// import { create } from "zustand";
// import useImageStore1 from "./useImageStorecopy.js";
// import { buildPrompt, describeImgg } from "../helper/util.js";
// import useToastStore from "./useToastStore.js";
// import { getNumber } from "../helper/helper.js";

// const usePromptStore = create((set) => ({
//   prompt: "",
//   isUploaded: false,
//   generatedPrompt: "",
//   loading: false,
//   step: 1,

//   setPrompt: (newPrompt) => set({ prompt: newPrompt }),
//   setIsUploaded: (status) => set({ isUploaded: status }),

//   handleGenerate: async () => {
//     set({ loading: true });

//     const { showToast } = useToastStore.getState();
//     const { setUserPref } = selectedSettings.getState();

//     showToast("building prompt.....", "warning");
//     const describeImage = await describeImgg();
//     console.log("done describing");
//     setUserPref("describeImage", describeImage);

//     const userPreference = selectedSettings.getState().userPref;

//     console.log(userPreference);

//     showToast("building prompt.....", "warning");

//     const generatedPrompt = await buildPrompt(userPreference);

//     set({ generatedPrompt: userPreference });
//     showToast("done", "success");
//     set({ loading: false, step: 2 });
//   },

//   setGeneratedPrompt: (value) => {
//     set({ generatedPrompt: value });
//   },
// }));

// export const selectedSettings = create((set, get) => ({
//   //   const payload = {
//   //   model: "img4",
//   //   prompt: "",
//   //   n: 2,
//   //   size: "",
//   //   response_format: "url"
//   // };

//   userPref: {
//     model: "img4",
//     prompt: "A vibrant oil painting of a futuristic cityscape at sunset",
//     n: 1,
//     size: "1792x1024",
//     response_format: "url",
//     imagePurpose: "All",
//     background: "Solid white",
//     color: "#00E5FF",
//   },

//   setUserPref: (key, value) => {
//     set((state) => {
//       const updatedPref = {
//         ...state.userPref,
//         [key]: value,
//       };

//       return { userPref: updatedPref };
//     });

//     console.log(get().userPref);
//   },
// }));

// export default usePromptStore;

import { create } from "zustand";
import { buildPrompt, describeImgg } from "../helper/util.js";
import useUIStore from "./useUIStore.js";

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
}));

const usePromptStore = create((set) => ({
  prompt: "",
  isUploaded: false,
  generatedPrompt: `The image shows a young man with dark hair wearing a white collared shirt, blue tie, and black backpack. He is standing against a beige wall adorned with various posters and signs. The man's gaze is directed straight at the camera, creating an engaging portrait. Create this as a Website Banner. Use a Transparent
Checkerboard background. Use a #00E5FF color palette.`,

  step: 3,

  setPrompt: (prompt) => set({ prompt }),
  setStep: (step) => set({ step }),

  setIsUploaded: (status) => set({ isUploaded: status }),
  setGeneratedPrompt: (generatedPrompt) => set({ generatedPrompt }),

  handleGenerate: async () => {
    const { setLoading, showToast } = useUIStore.getState();
    const { setUserPref } = selectedSettings.getState();

    setLoading(true);
    console.log("click");

    try {
      showToast("Building prompt...", "warning");

      const describeImage = await describeImgg();
      setUserPref("describeImage", describeImage);

      const userPref = selectedSettings.getState().userPref;
      const generatedPrompt = await buildPrompt(userPref);

      console.log(generatedPrompt);
      set({
        generatedPrompt,
        step: 2,
      });

      showToast("Done", "success");
    } catch (error) {
      showToast(error.message || "Failed to build prompt", "error");
    } finally {
      setLoading(false);
    }
  },
}));

export default usePromptStore;
