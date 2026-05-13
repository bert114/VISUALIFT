import { create } from "zustand";
import sendToInfip from "../helper/infip.js";
import useUIStore from "./useUIStore.js";
import usePromptStore from "./usePromptStore.js";

const useGenerateStore = create((set) => ({
  result: null,
  error: null,

  generate: async (payload) => {
    const { setLoading, showToast, setState, state } = useUIStore.getState();
    const { setStep } = usePromptStore.getState();

    setState("generating");
    setLoading(true);
    set({ error: null });

    const newState = useUIStore.getState().state;
    console.log(newState);

    try {
      const data = await sendToInfip(payload);

      set({ result: data });
      showToast("Image generated successfully", "success");

      setStep(3);

      setState("complete");
      return data;
    } catch (error) {
      set({ error: error.message });
      showToast(error.message || "Failed to generate image", "error");
      setState("initial");
    } finally {
      setLoading(false);
    }
  },
}));

export default useGenerateStore;
