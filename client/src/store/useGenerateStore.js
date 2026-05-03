import { create } from "zustand";

export const useGenerateStore = create((set) => ({
  generate: (prompt) => {
    console.log("generating prompt......");

    console.log(prompt);
  },
}));
