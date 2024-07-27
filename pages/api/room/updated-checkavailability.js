import dbConnect from "@/middleware/mongo";
import Availability from "@/models/Availability";
import Room from "@/models/Room";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { room, reqRooms, dates } = req.body;

    try {
      dates.pop(); // Remove the last date if not needed

      await dbConnect();

      const roomData = await Room.findById(room);

      // Check room capacity
      if (roomData.currCapacity < reqRooms) {
        console.log(roomData);
        return res.status(404).json({ message: "Rooms Are Not Available" });
      }

      // Get all the dates when the room is booked
      const roomAvailability = await Availability.find({
        room,
        date: { $in: dates },
      });

      // Convert timestamps to Date objects and sort by date
      const sortedAvailability = roomAvailability
        .map((availability) => ({
          ...availability._doc,
        }))
        .sort((a, b) => a.date - b.date);

      // Check for overlapping date ranges
      let isRoomAvailable = true;
      const formattedAvailability = sortedAvailability.map((availability) => {
        const { date, remainingCapacity } = availability;

        // If the room is fully booked on this date
        if (remainingCapacity < reqRooms) {
          // Check if the requested date range overlaps with this date
          const isOverlap = dates.some((requestedDate) => {
            const requestedParsedDate = new Date(Number(requestedDate));
            const updatedDateFormat = new Date(Number(date));
            return (
              requestedParsedDate.getTime() === updatedDateFormat.getTime()
            );
          });
          if (isOverlap) {
            isRoomAvailable = false;
          }
        }
        return availability;
      });

      if (!isRoomAvailable) {
        return res.status(404).json({
          message: "Rooms Are Not Available",
          roomAvailability: formattedAvailability,
        });
      }

      return res.status(200).json({
        message: "Room Available",
        roomAvailability: formattedAvailability,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unknown Error Occurred" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
