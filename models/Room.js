import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    currCapacity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    weekendRates: {
      type: Number,
      required: true,
    },
    adultWeekend: {
      type: Number,
      required: true,
    },
    child7Weekend: {
      type: Number,
      required: true,
    },
    child10Weekend: {
      type: Number,
      required: true,
    },
    adultWeekdays: {
      type: Number,
      required: true,
    },
    child7Weekdays: {
      type: Number,
      required: true,
    },
    child10Weekdays: {
      type: Number,
      required: true,
    },
    validTill: {
      type: String,
    },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Room", RoomSchema);
// export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
