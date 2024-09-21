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
          <p className="wow animate__fadeInUpBig font-Cartitra" >
            A B O U T <span className="p-2"></span> U S
          </p>
          <h2 className=" my-5 wow animate__fadeInDownBig" >We are here for you.</h2>
          <p className=" wow animate__fadeInUpBig">
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
            className="wow animate__bounceInRight inline-flex items-center px-4 py-2 bg-green-200 hover:bg-green-300 text-black text-xl font-semibold rounded-md"
            
          >
            <FaPhoneAlt className="mr-2" /> Call Now: +91 7741811112
          </a>
        </div>

        {/* Image Section */}
        <div className="wow animate__bounceInRight md:w-3/5 p-5 md:px-10">
          <Image
            src={"/darbanimages/darban-logo-og.png"}
            className="h-full object-cover relative -z-10"
            width={400}
            height={300}
            alt="Darban Resort Logo"
          />
        </div>
       
      </div>
      {/* <div className="flex" >
      <Image
            src={"/darbanimages/darban-1_sketch.png"}
            className="h-full object-cover relative -z-10 mx-20 wow animate__fadeInRight" 
            width={700}
            height={700}
            alt="Darban Resort Logo"
            c
          />

<Image
            src={"/darbanimages/darban-2_sketch.png"}
            className="h-full object-cover relative -z-10 mx-20 wow animate__fadeInLeft" 
            width={700}
            height={700}
            alt="Darban Resort Logo"
            c
          />
      </div> */}
      <div className="flex flex-col md:flex-row gap-y-10">
  <Image
    src={"/darbanimages/darban-1_sketch.png"}
    className="h-full object-cover relative -z-10 mx-auto md:mx-20 wow animate__fadeInRight"
    
    width={700}
    height={700}
    alt="Darban Resort Logo"
  />
  <Image
    src={"/darbanimages/darban-2_sketch.png"}
    className="h-full object-cover relative -z-10 mx-auto md:mx-20 wow animate__fadeInLeft"
    
    width={700}
    height={700}
    alt="Darban Resort Logo"
  />
</div>
    </>
  );
};

export default Services;
