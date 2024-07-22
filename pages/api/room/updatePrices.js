import dbConnect from "@/middleware/mongo";
import { getDatesInRange } from "@/helpers/dateOps";
import Availability from "@/models/Availability";
import Room from "@/models/Room";
import { verifyAdmin } from "@/middleware/verifyToken";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { dates, room, price } = req.body;

    const admin = verifyAdmin(req);

    if (!admin) {
      return res.status(401).json({ message: "You are not an admin" });
    }

    try {
      await dbConnect();

      const roomObj = await Room.findById(room);

      // get all the availability dates
      const roomAvailability = await Availability.find({
        room,
        date: { $in: dates },
      });
      // check if for each room aval obj is there or not
      // if yes update price
      // else create availability obj  currCapacity
      
      const toUpdate = [];
      const toCreate = [];

      dates.forEach(date => {

        const aval = roomAvailability.find((r)=>{
           return r.date == date
        })
        if(aval) {
            toUpdate.push(aval._id)
            console.log("Update Price")
        } else {
            toCreate.push({
                room: room,
                date: date,
                price: price,
                remainingCapacity: roomObj.currCapacity
            })
            console.log("Create ")
        }
      });

    await Availability.insertMany(toCreate)
    await Availability.updateMany({_id: {$in: toUpdate}}, {$set: {price: price}})



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
