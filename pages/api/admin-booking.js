import dbConnect from "@/middleware/mongo";
import Room from "@/models/Room";
import Availability from "@/models/Availability";
import Booking from "@/models/Booking";
import { verifyAdmin } from "@/middleware/verifyToken";
import { calculateTotalAmount } from "@/helpers/calculateAmount";
import { Coupon } from "@/models/Coupon";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const {
      roomId,
      checkIn,
      checkOut,
      reqRooms,
      fname,
      lname,
      email,
      phone,
      specialRequest,
      childTen,
      adults,
      child,
      dates,
      coupon,
    } = req.body;

    console.log(req.body);
    const admin = verifyAdmin(req);

    if (!admin) {
      return res.status(401).json({ message: "You are not an admin" });
    }

    try {
      await dbConnect();

      dates.pop();

      const roomAvailability = await Availability.find({
        room: roomId,
        date: { $in: dates },
      });

      // check if on every date remaining capacity is greaterthan equal to requiredRooms
      for (let i = 0; i < roomAvailability.length; i++) {
        const room = roomAvailability[i];
        if (room.remainingCapacity < reqRooms) {
          return res.status(404).json({ message: "You Just Missed It" });
        }
      }

      const room = await Room.findById(roomId);

      if (room === null) throw Error("Room not found");

      // TODO: send mail
      if (reqRooms > room.currCapacity) {
        return res.status(404).json({ message: "You Just Missed It" });
      }

      const couponObj = await Coupon.findOne({
        code: coupon,
      });

      let amount = calculateTotalAmount(
        checkIn,
        checkOut,
        room,
        adults,
        child,
        childTen,
        roomAvailability,
        reqRooms,
        couponObj,
        dates
      );

      if (amount > 7500) {
        amount = amount + amount * 0.18;
      } else {
        amount = amount + amount * 0.12;
      }

      const booking = await Booking.create({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        specialRequest: specialRequest,
        reqRooms: reqRooms,
        orderId: "Local",
        amount: amount,
        room: roomId,
        checkIn: checkIn,
        checkOut: checkOut,
        receipt: "Local",
        paid: true,
        adults: adults,
        childs: child,
        dates: dates,
        childTen: childTen,
        coupon: couponObj?.code ?? "",
      });

      dates.forEach(async (date) => {
        try {
          const availablilty = await Availability.findOne({
            room: room._id,
            date: date,
          });

          console.log(date);

          if (availablilty) {
            await Availability.findByIdAndUpdate(availablilty._id, {
              remainingCapacity: availablilty.remainingCapacity - reqRooms,
            });
          } else {
            await Availability.create({
              room: room._id,
              date,
              remainingCapacity: room.currCapacity - reqRooms,
            });
          }
        } catch (error) {
          console.log(error);
        }
      });

      return res.status(200).json({
        booking: booking,
        message: "Booking Successfull",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Some Unknown Error occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
