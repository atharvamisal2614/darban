// import mongoose from "mongoose";

// const AvailabilitySchema = new mongoose.Schema(
//   {
//     room: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//     },
//     remainingCapacity: {
//       type: Number,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// mongoose.models = {};

// export default mongoose.model("Availability", AvailabilitySchema);



import mongoose from "mongoose";

const AvailabilitySchema = new mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    date: {
      type: Date,  // Using Date type for better date handling
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

// Check if the model already exists to avoid recompilation issues
const Availability = mongoose.models.Availability || mongoose.model("Availability", AvailabilitySchema);

export default Availability;
