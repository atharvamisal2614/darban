import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import Room from "@/models/Room";

const handler = async (req, res) => {
  const admin = verifyAdmin(req);

  if (!admin) {
    return res.status(401).json({ message: "You are not an admin" });
  }

  if (req.method == "GET") {
    try {
      await dbConnect();

      const rooms = await Room.find();
      return res.status(200).json({ message: "Rooms Fetched", rooms });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else if (req.method == "POST") {
    const {
      title,
      slug,
      maxPeople,
      currCapacity,
      price,
      weekendRates,
      adultWeekend,
      child7Weekend,
      child10Weekend,
      adultWeekdays,
      child7Weekdays,
      child10Weekdays,
      validTill,
    } = req.body;

    try {
      await dbConnect();

      const room = await Room.create({
        title,
        slug,
        maxPeople,
        currCapacity,
        price,
        weekendRates,
        adultWeekend,
        child7Weekend,
        child10Weekend,
        adultWeekdays,
        child7Weekdays,
        child10Weekdays,
        validTill,
      });

      return res.status(201).json({ message: "Room Created", room });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
