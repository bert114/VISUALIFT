import { create } from "zustand";

const useToastStore = create((set, get) => ({
  message: "",
  type: "success",

  showToast: (message, type = "success") => {
    set({ message, type });

    setTimeout(() => {
      set({ message: "", type: "success" });
    }, 3000);
  },
}));

export default useToastStore;
