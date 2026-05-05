// import { create } from "zustand";
// import sendToInfip from "../helper/infip.js";

// export const useGenerateStore = create((set) => ({
//   generate: async (obj) => {

//     const data = await sendToInfip(obj);

//     console.log(data);

//   },
// }));

import { create } from "zustand";
import sendToInfip from "../helper/infip.js";
import useUIStore from "./useUIStore.js";

const useGenerateStore = create((set) => ({
  result: null,
  error: null,

  generate: async (payload) => {
    const { setLoading, showToast } = useUIStore.getState();

    setLoading(true);
    set({ error: null });

    try {
      const data = await sendToInfip(payload);

      set({ result: data });
      showToast("Image generated successfully", "success");

      return data;
    } catch (error) {
      set({ error: error.message });
      showToast(error.message || "Failed to generate image", "error");
    } finally {
      setLoading(false);
    }
  },
}));

export default useGenerateStore;
