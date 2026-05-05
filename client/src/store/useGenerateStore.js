import { create } from "zustand";

export const useGenerateStore = create((set) => ({
  generate: (prompt) => {
    console.log("sending req to infip...");

    console.log(prompt);
  },
}));
