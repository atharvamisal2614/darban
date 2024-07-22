import mongoose from "mongoose";

const AvailabilitySchema = new mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    remainingCapacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Availability", AvailabilitySchema);
