import mongoose from "mongoose";

const availableModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
      unique: true,
    },
    tier: {
      type: String,
      enum: ["Free", "Pro"],
      required: true,
    },
    async: {
      type: Boolean,
      default: false,
    },
    maxImages: {
      type: Number,
      default: 1,
    },
    supportsEditing: {
      type: Boolean,
      default: true,
    },
    supportsAllRatios: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

const AvailableModel = mongoose.model("AiModels", availableModelSchema);

export default AvailableModel;
