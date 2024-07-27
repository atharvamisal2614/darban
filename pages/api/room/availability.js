import dbConnect from "@/middleware/mongo";
import { getDatesInRange } from "@/helpers/dateOps";
import Availability from "@/models/Availability";
import Room from "@/models/Room";
import { verifyAdmin } from "@/middleware/verifyToken";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { dates, room } = req.body;


    console.log("availability", dates, room);

    const admin = verifyAdmin(req);

    if (!admin) {
      return res.status(401).json({ message: "You are not an admin" });
    }

    try {
      await dbConnect();

      // get all the dates when room is booked
      const roomAvailability = await Availability.find({
        room,
        date: { $in: dates },
      });

      return res
        .status(200)
        .json({ message: "Room Available", roomAvailability });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
