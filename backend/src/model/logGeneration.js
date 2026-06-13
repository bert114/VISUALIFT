import mongoose from "mongoose";

const logGenerationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    prompt: {
      type: String,
    },

    result: {
      type: Object,
    },
  },
  { timestamps: true },
);

const LogGeneration = mongoose.model("LogGeneration", logGenerationSchema);

export default LogGeneration;
