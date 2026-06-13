import { create } from "zustand";

const userGenerateStore = create((set) => ({
  userId: null,
  role: null,

  setCurrentUser: async ({ userId, role }) => {
    set({ userId, role });
  },
}));

export default userGenerateStore;
