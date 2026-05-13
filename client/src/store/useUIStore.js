import { create } from "zustand";

const useUIStore = create((set) => ({
  loading: false,
  state: "initial", // uploaded, analyzing, review, generating, complete, error
  toast: {
    message: "",
    type: "success",
  },

  setLoading: (loading) => set({ loading }),
  setState: (state) => set({ state }),

  showToast: (message, type = "success") => {
    set({ toast: { message, type } });

    setTimeout(() => {
      set({ toast: { message: "", type: "success" } });
    }, 3000);
  },
}));

export default useUIStore;
