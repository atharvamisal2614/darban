import { BASE_URL } from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cookies = new Cookies();

  const router = useRouter();

  const loginPromise = async () => {
    const url = `${BASE_URL}/api/auth/login`;
    const redirectUrl = 'http://localhost:3000/indexx'
    const data = {
      email,
      password,
    };
    const res = await axios.post(url, data);

    if (res.status == 200) {
      localStorage.setItem("token", res.data.token);
      cookies.set("authorization", res.data.token, { path: "/" });
      // toast.success(res.data.message);
      router.push(redirectUrl);
    }
  };
 const handleLogin = (e) => {
    e.preventDefault();

    if (email.length == 0) return;
    if (password.length == 0) return;

    toast.promise(loginPromise, {
      pending: "Logging In ...",
      error: "Failed To Login",
      success: "Logged In Successfully",
    });
  };

  return (
    <>
      <div className="max-w-lg m-auto p-5 border my-10 rounded shadow">
        <h2>Sign In</h2>
        <p>Sign In to add blogs.</p>
        <form onSubmit={(e) => handleLogin(e)}>
        
          <p className="font-semibold mt-5">Email</p>
          <input
            type="email"
            placeholder="psp@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full rounded px-2 py-1 outline-none"
          />
          <p className="font-semibold mt-5">Password</p>
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full rounded px-2 py-1 outline-none"
          />
          <button type="submit" className="bg-primary w-full my-5 rounded">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;






// import { BASE_URL } from "@/utils/config";
// import axios from "axios";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import Cookies from "universal-cookie";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const cookies = new Cookies();
//   const router = useRouter();

//   const loginPromise = async () => {
//     try {
//       const url = `${BASE_URL}/api/auth/login`;
//       const data = { email, password };

//       const res = await axios.post(url, data);

//       if (res.status === 200 && res.data.token) {
//         localStorage.setItem("token", res.data.token);
//         cookies.set("authorization", res.data.token, {
//           path: "/",
//           sameSite: "Strict",
//           secure: process.env.NODE_ENV === "production",
//         });

//         toast.success("Logged In Successfully");

      
//         await router.push("/admin"); // Ensure this path matches the file structure
//       } else {
//         toast.error("Failed To Login");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       toast.error("Failed To Login");
//     }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email.length === 0) {
//       toast.error("Email is required");
//       return;
//     }

//     if (password.length === 0) {
//       toast.error("Password is required");
//       return;
//     }

//     toast.promise(loginPromise(), {
//       pending: "Logging In ...",
//       error: "Failed To Login",
//       success: "Logged In Successfully",
//     });
//   };

//   return (
//     <>
//       <div className="max-w-lg m-auto p-5 border my-10 rounded shadow">
//         <h2>Sign In</h2>
//         <p>Sign In to add blogs.</p>
//         <form onSubmit={handleLogin}>
//           <p className="font-semibold mt-5">Email</p>
//           <input
//             type="email"
//             placeholder="psp@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border w-full rounded px-2 py-1 outline-none"
//           />
//           <p className="font-semibold mt-5">Password</p>
//           <input
//             type="password"
//             placeholder="**********"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border w-full rounded px-2 py-1 outline-none"
//           />

//           <button type="submit" className="bg-primary w-full my-5 rounded">
//             Login
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;



