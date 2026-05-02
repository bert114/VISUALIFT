import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    originalName: {
      type: String,
      required: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Upload = mongoose.model("Upload", uploadSchema);

export default Upload;
