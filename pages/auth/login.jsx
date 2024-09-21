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
//     const url = `${BASE_URL}/api/auth/login`;
    
//     const data = {
//       email,
//       password,
//     };
//     const res = await axios.post(url, data);

//     if (res.status == 200) {
//       localStorage.setItem("token", res.data.token);
//       cookies.set("authorization", res.data.token, { path: "/" });
//       // toast.success(res.data.message);
//       router.push('/admin');
//     }
//   };
//  const handleLogin = (e) => {
//     e.preventDefault();

//     if (email.length == 0) return;
//     if (password.length == 0) return;

//     toast.promise(loginPromise, {
//       pending: "Logging In ...",
//       error: "Failed To Login",
//       success: "Logged In Successfully",
//     });
//   };

//   return (
// <>
//       <div className="max-w-lg m-auto p-5 border my-10 rounded shadow ">
//         <h2>Sign In</h2>
//         <form onSubmit={(e) => handleLogin(e)}>
        
//           <p className="font-semibold mt-5">Email</p>
//           <input
//             type="email"
//             placeholder="yourmail@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border w-full rounded px-2 py-1 outline-none"
//           />
//           <p className="font-semibold mt-5">Password</p>
//           <input
//             type="password"
//             placeholder="***********"
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
    try {
      const url = `${BASE_URL}/api/auth/login`;
      const data = { email, password };

      const res = await axios.post(url, data);

      if (res.status === 200 && res.data.token) {
        localStorage.setItem("token", res.data.token);
        cookies.set("authorization", res.data.token, {
          path: "/",
          // sameSite: "Strict",
          // secure: process.env.NODE_ENV === "production",
        });

        toast.success("Logged In Successfully");
        await router.push("/admin"); // Ensure this path matches the file structure
      } else {
        toast.error("Failed To Login");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Failed To Login");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!password) {
      toast.error("Password is required");
      return;
    }

    toast.promise(loginPromise(), {
      pending: "Logging In ...",
      error: "Failed To Login",
      success: "Logged In Successfully",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-green-200 shadow-lg sm:rounded-2xl"></div>
    <div className="relative px-4 py-10 bg-opacity-20 sm:rounded-lg sm:p-20">
      <h2 className="text-5xl font-bold text-center mb-6">Sign In</h2>
      <p className="text-center text-gray-600 mb-8 text-2xl">Sign In to access your dashboard.</p>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-xl font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="yourgmail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-800 to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ease-in-out duration-150"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;
