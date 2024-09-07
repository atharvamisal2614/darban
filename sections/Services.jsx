// import Image from "next/image";
// import React from "react";

// const Services = () => {
//   return (
//     <>
//       <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
//         <div data-aos="zoom-in-right" className="md:w-2/5 p-5 md:px-10">
//           <p>
//             A B O U T <span className="p-2"></span> U S
//           </p>
//           <h2 className="my-5">We are here for you.</h2>
//           <p>
//           Few pieces of heaven must have fallen in Kokan only to be named
//                 together as the Diveagar Or mother earth have chosen a place just to relax along
//                 with
//                 beautiful open sky, sea, sun, shore, serenity & splendour of
//                 tropical Flora & Fauna, chirping birds, and marine species.

//           </p>
//           <br />
//           {/* <button>Check Services</button> */}
//         </div>

//         <div data-aos="zoom-in-left" className="md:w-3/5 p-5 md:px-10">
//         <Image
//             src={"/darbanimages/darban-logo-og.png"}
//             className={`h-full object-cover relative -z-10`}
//             width={400}
//             height={300}
//             alt={""}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;





// import Image from "next/image";
// import React from "react";
// import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon

// const Services = () => {
//   return (
//     <>
//       <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
//         <div data-aos="zoom-in-right" className="md:w-2/5 p-5 md:px-10">
//           <p>
//             A B O U T <span className="p-2"></span> U S
//           </p>
//           <h2 className="my-5">We are here for you.</h2>
//           <p>
//             Few pieces of heaven must have fallen in Kokan only to be named
//             together as the Diveagar. Or mother earth have chosen a place just
//             to relax along with beautiful open sky, sea, sun, shore, serenity &
//             splendour of tropical Flora & Fauna, chirping birds, and marine
//             species.
//           </p>
//           <br />
//           {/* Call Now Button */}
//           <a
//             href="tel:+917741811112"
//             className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all mt-4"
//           >
//             <FaPhoneAlt className="mr-2" /> Call Now: +91 7741811112
//           </a>
//         </div>

//         <div data-aos="zoom-in-left" className="md:w-3/5 p-5 md:px-10">
//           <Image
//             src={"/darbanimages/darban-logo-og.png"}
//             className={`h-full object-cover relative -z-10`}
//             width={400}
//             height={300}
//             alt={""}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;





import Image from "next/image";
import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

import "animate.css";

const Services = () => {
  // useEffect(() => {
    
  //   if (typeof window !=="undefined") {
  //     const wow = new WOW.WOW({
  //       live: false, // Ensure animations aren't reinitialized
  //     });
  //     wow.init();
  //   }
  // }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wow.js");
      const wow = new WOW({
        live: false,
        resetAnimation: true,
      });
      wow.init();
    }
  }, []);

  return (
    <>
      <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
        {/* Text Section */}
        <div className="md:w-2/5 p-5 md:px-10" >
          <p className="wow animate__fadeInUpBig font-Cartitra" data-wow-duration="4s">
            A B O U T <span className="p-2"></span> U S
          </p>
          <h2 className=" my-5 wow animate__fadeInDownBig" data-wow-duration="4s">We are here for you.</h2>
          <p className=" wow animate__fadeInUpBig" data-wow-duration="2s">
            Few pieces of heaven must have fallen in Kokan only to be named
            together as the Diveagar. Or mother earth have chosen a place just
            to relax along with beautiful open sky, sea, sun, shore, serenity &
            splendour of tropical Flora & Fauna, chirping birds, and marine
            species.
          </p>
          <br />
          {/* Call Now Button */}
          <a
            href="tel:+917741811112"
            className="wow animate__bounceInRight inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-800 to-green-600 text-white text-xl font-semibold rounded-md"
            data-wow-duration="6s"
          >
            <FaPhoneAlt className="mr-2" /> Call Now: +91 7741811112
          </a>
        </div>

        {/* Image Section */}
        <div className="wow animate__bounceInRight md:w-3/5 p-5 md:px-10" data-wow-duration="2s">
          <Image
            src={"/darbanimages/darban-logo-og.png"}
            className="h-full object-cover relative -z-10"
            width={400}
            height={300}
            alt="Darban Resort Logo"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
