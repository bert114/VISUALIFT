import { create } from "zustand";

const useUIStore = create((set) => ({
  loading: false,
  toast: {
    message: "",
    type: "success",
  },

  setLoading: (loading) => set({ loading }),

  showToast: (message, type = "success") => {
    set({ toast: { message, type } });

    setTimeout(() => {
      set({ toast: { message: "", type: "success" } });
    }, 3000);
  },
}));

export default useUIStore;
