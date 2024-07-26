import { sendMail } from "@/utils/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const booking = req.body;

    try {
      await sendMail(booking);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
