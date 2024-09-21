import { isValidEmail } from "@/helpers/validations";
import Admin from "@/models/Admin";
import { sign } from "jsonwebtoken";
import { enc, AES } from "crypto-js";
import dbConnect from "@/middleware/mongo";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const { email = "", password = "" } = req.body;

      if (email.length == 0 || !isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" });
      }

      await dbConnect();

      const admin = await Admin.findOne({ email: email });

      if (!admin) {
        return res
          .status(400)
          .json({ message: "No user found with given email" });
      }

      if (!admin.verified) {
        return res.status(400).json({ message: "Email is not verified" });
      }
      const bytes = AES.decrypt(admin.password, process.env.ADMIN_SEC);
      const pass = bytes.toString(enc.Utf8);

      if (pass == password) {
        const token = sign({ admin }, process.env.ADMIN_SEC, {
          expiresIn: "10d",
        });
        return res
          .status(200)
          .json({ message: "Successfully Logged In", token });
      }
      return res.status(400).json({ message: "Failed to login" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;




// import { AES, enc } from "crypto-js";
// import crypto from "crypto";

// const secretKey = process.env.ADMIN_SEC; // Ensure this is securely managed
// const password = "Darban@1234";

// // Encrypt the password
// const encryptedPassword = AES.encrypt(password, secretKey).toString();
// console.log("Encrypted Password:", encryptedPassword);

// // Hash the encrypted password
// const hashString = (stringToHash) => {
//   return crypto.createHash('sha256').update(stringToHash).digest('hex');
// };

// const hashedEncryptedPassword = hashString(encryptedPassword);
// console.log("Hashed Encrypted Password:", hashedEncryptedPassword);
