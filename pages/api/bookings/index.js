import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import Booking from "@/models/Booking";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  const admin = verifyAdmin(req);
  if (!admin) {
    return res.status(401).json({ message: "You are not an admin" });
  }

  if (req.method == "GET") {
    try {
      await dbConnect();

      // add search
      const { bid = "", name = "" } = req.query;

      if (bid.length !== 0 && isValidObjectId(bid)) {
        const bookings = await Booking.find({ _id: bid });
        return res.status(200).json({ message: "Bookings Fetched", bookings });
      }

      if (name.length !== 0) {
        const bookings = await Booking.find({
          $text: { $search: name },
          paid: true,
        })
          .sort({ _id: -1 })
          .limit(100);
        return res.status(200).json({ message: "Bookings Fetched", bookings });
      }

      const bookings = await Booking.find({ paid: true })
        .sort({ _id: -1 })
        .limit(100);
      return res.status(200).json({ message: "Bookings Fetched", bookings });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
