import { getDatesInRange } from "@/helpers/dateOps";
import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import Availability from "@/models/Availability";
import Booking from "@/models/Booking";
import Room from "@/models/Room";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  const id = req.query.id;
  const admin = verifyAdmin(req);

  if (!admin) {
    return res.status(401).json({ message: "You are not an admin" });
  }

  if (req.method == "PUT") {
    const { notes } = req.body;

    try {
      await dbConnect();
      const room = await Booking.findByIdAndUpdate(
        id,
        { notes },
        { new: true }
      );
      return res
        .status(201)
        .json({ message: "Booking Updated successfully", room });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else if (req.method == "DELETE") {
    try {
      await dbConnect();

      const booking = await Booking.findById(id);

      if (!booking) {
        return res.status(400).json({ message: "Booking Unsuccessfull" });
      }

      const { room, reqRooms } = booking;

      booking.dates.forEach(async (date) => {
        const availablilty = await Availability.findOne({
          room: room,
          date: date,
        });

        console.log(availablilty);

        await Availability.findByIdAndUpdate(availablilty._id, {
          remainingCapacity: availablilty.remainingCapacity + reqRooms,
        });
      });

      await Booking.findByIdAndDelete(booking._id);

      return res.status(200).json({ message: "Booking Deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
