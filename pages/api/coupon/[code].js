import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import { Coupon } from "@/models/Coupon";

const handler = async (req, res) => {
  const code = req.query.code;

  if (req.method === "GET") {
    try {
      await dbConnect();

      const coupon = await Coupon.findOne({ code });

      res.status(200).json({ message: "Coupon Found", coupon });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else if (req.method === "DELETE") {
    try {
      await dbConnect();
      const admin = verifyAdmin(req);

      if (admin === null) {
        res.status(401).json({ message: "You are not an admin" });
        return;
      }

      await Coupon.deleteOne({ code });
      res.status(201).json({ message: "Coupon Deleated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;




// import dbConnect from "@/middleware/mongo";
// import { Coupon } from "@/models/Coupon";
// import moment from "moment"; // Moment.js for date handling

// const handler = async (req, res) => {
//   const code = req.query.code;

//   if (req.method === "GET") {
//     try {
//       await dbConnect();

//       // Find the coupon in the database
//       const coupon = await Coupon.findOne({ code });

//       if (!coupon) {
//         return res.status(404).json({ message: "Coupon not found" });
//       }

//       // Get the current day name
//       const currentDayName = moment().format("dddd");

//       // Define the valid days for applying the coupon (Monday to Friday)
//       const validDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//       // Check if the current day is valid for the coupon
//       if (!validDays.includes(currentDayName)) {
//         return res.status(400).json({
//           message: `Coupon is not valid on weekends (${currentDayName})`,
//           discountApplied: 0, // No discount on weekends
//         });
//       }

//       // If the coupon is valid for the current day, return success response
//       res.status(200).json({
//         message: "Coupon applied",
//         coupon,
//         discountApplied: coupon.discount, // 20% discount (or whatever is in the coupon)
//         validDay: currentDayName,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Unknown error occurred" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// };

// export default handler;
