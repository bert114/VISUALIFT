import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    originalName: {
      type: String,
    },
    mimeType: {
      type: String,
    },
    size: {
      type: Number,
    },
    url: {
      type: String,
    },
    publicId: {
      type: String,
    },
  },
  { timestamps: true },
);

const UploadImageDb = mongoose.model("Upload", uploadSchema);

export default UploadImageDb;
