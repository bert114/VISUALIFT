import { create } from "zustand";

const useLoadStore = create((set, get) => ({
  load: false,

  setLoad: async (bool) => {
    set({ load: bool });
  },
}));

export default useLoadStore;
