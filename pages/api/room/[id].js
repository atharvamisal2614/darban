import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import Room from "@/models/Room";
import { NextRequest } from "next/server";

const handler = async (req, res) => {
  const id = req.query.id;

  if (req.method == "GET") {
    try {
      await dbConnect();

      const room = await Room.findById(id);

      return res.status(200).json({ message: "Room Found", room });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else if (req.method == "PUT") {
    const admin = verifyAdmin(req);

    if (!admin) {
      return res.status(401).json({ message: "You are not an admin" });
    }

    const { price,
      weekendRates,
      adultWeekend,
      child7Weekend,
      child10Weekend,
      adultWeekdays,
      child7Weekdays,
      child10Weekdays, } = req.body;

    try {
      const room = await Room.findByIdAndUpdate(id, { price,
        weekendRates,
        adultWeekend,
        child7Weekend,
        child10Weekend,
        adultWeekdays,
        child7Weekdays,
        child10Weekdays, });
      return res
        .status(201)
        .json({ message: "Price Updated successfully", room });
    } catch (error) {}
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
