// import Link from "next/link";
// import { useRouter } from "next/router";
// import React from "react";


// const Footer = () => {
//   const path = useRouter().asPath;

//   if (path.startsWith("/admin")) return;
//   return (
//     <>
//       <footer className=" mt-20  ">
//         <div className="flex md:flex-row flex-col max-md:p-5 max-md:gap-5 max-w-6xl justify-around m-auto border-y-2 py-10">
//           <div className="bluresort">
//             <h6 className="mb-1">Darban Resort</h6>
          
//           </div>
//           <div className="abt-malshej">
//           <h6>Quick Links</h6>
//             <Link href={"/terms-conditions"}>
//               <h6 className="mb-1">Terms and Conditions</h6>
//             </Link>
//             <Link href={"/reservation-cancellation"}>
//               <h6 className="mb-1">Reservation And Cancellation</h6>
//             </Link>
//             <Link href={"/privacy-policy"}>
//               <h6 className="mb-1">Privacy Policy</h6>
//             </Link>
            
//           </div>
//           <div className="contact">
//             <h6>Contact Us</h6>

//             <p>
//               Darban Resort <br /> Hanuman Pakhadi,{" "}
//               <br /> Diveagar <br />
//             </p>

//             <p>
//               {" "}
//               <strong>Phone No: </strong>{" "}
//               <a href="tel:77418 11112">+91 77418 11112 / +91 72640 72626</a>{" "}
//             </p>
//             {/* <p>
//               {" "}
//               <strong>Email: </strong>{" "}
//               <a href="mailto:reservations@bluwaterresort.in">
//                 reservations@bluwaterresort.in
//               </a>{" "}
//             </p> */}
//             {/* <div className="p-1"></div>
//             <a href="https://instagram.com/blu.water.resort.malshej?igshid=YmMyMTA2M2Y=">
//               <BsInstagram size={25} />
//             </a> */}
//           </div>
//         </div>

//         <p className="p-5 text-center">
//           © Copyright 2022 Darban Resort. All rights reserved.
//         </p>
//       </footer>
//     </>
//   );
// };

// export default Footer;



import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const path = useRouter().asPath;

  if (path.startsWith("/admin")) return;

  return (
    <>
      <footer className="bg-gradient-to-r from-purple-300 to-green-300 text-gray-900 mt-20 rounded-tl-full rounded-tr-full">
  <div className="flex flex-col md:flex-row max-md:p-5 max-md:gap-5 max-w-6xl justify-center m-auto border-green-500 py-10 text-center">
    <div className="bluresort mb-5 md:mb-0">
      <h3 className="font-lifeSugar text-4xl font-semibold">Darban Resort</h3>
    </div>

    <div className="abt-malshej mb-5 md:mb-0">
      <h6 className="text-lg font-semibold">Quick Links</h6>
      <Link href="/terms-conditions">
        <h6 className="block mb-1 cursor-pointer hover:text-green-800 transition">
          Terms and Conditions
        </h6>
      </Link>
      <Link href="/reservation-cancellation">
        <h6 className="block mb-1 cursor-pointer hover:text-green-800 transition">
          Reservation And Cancellation
        </h6>
      </Link>
      <Link href="/privacy-policy">
        <h6 className="block mb-1 cursor-pointer hover:text-green-800 transition">
          Privacy Policy
        </h6>
      </Link>
    </div>

    <div className="contact text-black">
      <h6 className="text-lg font-semibold mb-3">Contact Us</h6>
      <p className="mb-3 text-black hover:text-green-800">
        Darban Resort <br />
        Hanuman Pakhadi, <br />
        Diveagar <br />
      </p>
      <p className="mb-3 text-black hover:text-green-800">
        <strong>Phone No:</strong>{" "}
        <Link href="tel:7741811112" className="hover:text-gray-400 transition">
          +91 77418 11112 / +91 72640 72626
        </Link>
      </p>
      {/* Uncomment below lines if you need Email and Social Media Links */}
      {/* <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:reservations@bluwaterresort.in" className="hover:text-green-800 transition">
          reservations@bluwaterresort.in
        </a>
      </p>
      <a href="https://instagram.com/blu.water.resort.malshej?igshid=YmMyMTA2M2Y=">
        <BsInstagram size={25} className="hover:text-green-800 transition" />
      </a> */}
    </div>
  </div>

  <p className="text-black hover:text-green-800  p-5 text-center">
    © Copyright 2022 Darban Resort. All rights reserved.
  </p>
</footer>

    </>
  );
};

export default Footer;


