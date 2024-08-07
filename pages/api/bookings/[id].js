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
  } else if (req.method === "DELETE") {
    try {
      await dbConnect();

      const booking = await Booking.findById(id);

      if (!booking) {
        return res.status(400).json({ message: "Booking Unsuccessful" });
      }

      const { room, reqRooms } = booking;

      try {
        for (const date of booking.dates) {
          const availability = await Availability.findOne({
            room: room,
            date: date,
          });

          if (availability) {
            await Availability.findByIdAndUpdate(availability._id, {
              remainingCapacity: availability.remainingCapacity + reqRooms,
            });
          } else {
            console.error(
              `No availability found for room ${room} on date ${date}`
            );
          }
        }
      } catch (err) {
        console.error("Error updating availability:", err);
        return res.status(500).json({ message: "Error updating availability" });
      }

      try {
        await Booking.findByIdAndDelete(booking._id);
      } catch (err) {
        console.error("Error deleting booking:", err);
        return res.status(500).json({ message: "Error deleting booking" });
      }

      return res.status(200).json({ message: "Booking Deleted successfully" });
    } catch (error) {
      console.error("Unknown error:", error);
      return res.status(500).json({ message: "Unknown Error Occurred" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;