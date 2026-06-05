// backend/src/models/SavedImage.js
import mongoose from "mongoose";

const savedImageSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  prompt: {
    type: String,
    required: true,
  },

  originalPrompt: {
    type: String,
    default: null,
  },

  preferences: {
    noText: Boolean,
    whiteBackground: Boolean,
    aspectRatio: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("SavedImage", savedImageSchema);
