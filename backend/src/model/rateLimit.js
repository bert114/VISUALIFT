import mongoose from "mongoose";

const rateLimitSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },

    date: {
      type: String,
      required: true,
      index: true,
    },

    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

rateLimitSchema.index({ userId: 1, date: 1 }, { unique: true });

const RateLimit = mongoose.model("RateLimit", rateLimitSchema);

export default RateLimit;
