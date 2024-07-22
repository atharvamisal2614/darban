// import nodemailer from "nodemailer";

import { sendMail } from "@/utils/mail";

// // const transporter = createTransport({
// //     host: 'smtp.ethereal.email',
// //     port: 587,
// //     auth: {
// //         user: 'toy.stamm48@ethereal.email',
// //         pass: 'rJ2F79bhFxSG9cwMrs'
// //     }
// // });

// const transporter = nodemailer.createTransport({
//   host: "smtp.zoho.in",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "test.user@pranitpatil.com",
//     pass: "bc5a?aWr",
//   },
// });
// // const transporter = createTransport({
// //   host: "smtp.zoho.in",
// //   port: 465,
// //   secure: false,
// //   auth: {
// //     user: "reservations@bluwaterresort.in",
// //     pass: "Qxqe8u#t",

// //   },
// // });

const handler = async (req, res) => {
  if (req.method == "GET") {
    try {
      const booking = {
        _id: "bid",
        email: "dev.pranitpatil@gmail.com",
      };

      await sendMail(booking);

      //       console.log(req.body);
      //       const mailOptions = {
      //         from: "test.user@pranitpatil.com", // sender address
      //         to: "pp7590227@gmail.com",

      //         subject: ` Your Booking Confirmation - Booking ID: ${booking._id}`, // Subject line
      //         html: `<p> Dear Customer,</p>
      // <p>Greetings from Blu Water Resort Malshej !!</p>

      // <p>
      // Thank you for choosing our resort for your upcoming stay. We are thrilled to confirm your booking with us, and your Booking ID is ${booking._id} You can access all the details of your reservation at https://bluwaterresort.in/booking/${booking._id}
      // </p>
      // <p>
      // Blu Water Resort Malshej is nestled amidst the serene beauty of Malshej Ghat, offering a tranquil and rejuvenating escape from the bustling city life. Surrounded by lush green valleys, cascading waterfalls, and majestic mountains, Malshej Ghat is a paradise for nature lovers and adventure enthusiasts alike.
      // </p>
      // <p>
      // As you prepare for your stay with us, we would like to share a few nearby places of interest that you might consider visiting during your trip:
      // </p>
      // <p>

      // 1)Pimpalgaon Joga Dam: Located just a short drive away from the resort, this picturesque dam offers splendid views and is an ideal spot for a leisurely picnic.
      // </p>
      // <p>

      // 2)Harishchandragad Fort: For the adventurous souls, this ancient hill fort provides an exhilarating trekking experience and rewards you with panoramic vistas from the top.
      // </p>
      // <p>

      // 3)Ajoba Hill Fort: Another hiking opportunity awaits you at Ajoba Hill Fort, where you can witness the charming beauty of the Sahyadri range.
      // </p>
      // <p>

      // 4)Shivneri Fort : Birth place of Shri chhatrapati shivaji maharaj
      // </p>
      // <p>

      // 5)Malshej Ghat and Kalu Waterfall : Nature Scenic location near Resort.
      // </p>
      // <p>

      // We sincerely thank you for trusting us with your accommodation needs. Our dedicated team is committed to ensuring that you have a delightful and memorable stay with us. From our comfortable rooms to our warm hospitality and delicious Food from Blu Deck Restaurant we are here to serve you with the best of our abilities.
      // </p>
      // <p>

      // If you have any special requests or queries, please feel free to contact our Customer support team at +91 9090104545.
      // </p>
      // <p>

      // We are more than happy to assist you in any way we can.
      // See you soon!
      // </p>
      // <br/>
      // <p>
      // Best regards,
      // <br/>
      // Blu Water Resort Malshej
      // <br/>
      // +91 9090104545
      // <br/>
      // marketing.bluewaterresort@gmail.com
      // </p>
      // `,
      //       };

      //       const info = await transporter.sendMail(mailOptions);

      //       console.log(info);

      return res.status(200).json({ message: "Mail Sent" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Unknown error occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
