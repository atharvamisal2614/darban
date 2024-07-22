import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    specialRequest: {
      type: String,
    },
    reqRooms: {
      type: Number,
      required: true,
    },
    adults: {
      type: Number,
      required: true,
    },
    childs: {
      type: Number,
      required: true,
    },
    childTen: {
      type: Number,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      required: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },

    dates: [String],

    receipt: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    coupon: {
      type: String,
    },
  },
  { timestamps: true }
);

BookingSchema.index({ fname: "text", lname: "text" });

mongoose.models = {};

export default mongoose.model("Booking", BookingSchema);
