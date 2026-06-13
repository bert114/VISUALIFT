import mongoose from "mongoose";

const saveImageSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    imageUrl: {
      type: String,
    },

    prompt: {
      type: String,
    },
  },
  { timestamps: true },
);

const Savedimages = mongoose.model("Savedimages", saveImageSchema);

export default Savedimages;
