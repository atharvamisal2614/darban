// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Welcome = () => {
//   return (
//     <>
//       <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
//         <div data-aos="zoom-in-right" className="md:w-2/5 p-5 md:px-10">
//           <p>W E L C O M E</p>
//           <h2 className="my-5">Darban Resort, Diveagar</h2>
//           <h4>We konkanis take hosting as a pleasure and our resort gives
//                 the
//                 cozy feel of home-away from home</h4><br></br>
//           <p>
//           Our place is known for its thoughtful
//                     hospitality that gives personal attention
//                     to the guests and ensures the safety
//                     and comfort of our customers. Quality food,
//                     security and your comfort are our top priorities and your Nature Friendly beach
//                     resort welcomes you yo heaven on earth.
//           </p>
//           <br />
         
//          <Link href={'/overview'}>
//           <button>Expolre Resort</button>
//          </Link>
//         </div>

//         <div data-aos="zoom-in-left" className="md:w-3/5 p-5 md:px-10">
//           <Image
//             src={"/images/blu-hero1.jpg"}
//             className={`h-full object-cover relative -z-10`}
//             width={700}
//             height={500}
//             alt={""}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Welcome;





// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Welcome = () => {
//   return (
//     <>
//       <div className="mt-36 flex md:flex-row flex-col max-w-6xl m-auto my-20 shadow-lg rounded-lg overflow-hidden bg-white">
//         {/* Text Section */}
//         <div data-aos="fade-right" className="md:w-2/5 p-10 bg-gradient-to-b from-primary to-secondary text-white">
//           <p className="text-lg font-semibold tracking-widest text-gray-900">W E L C O M E</p>
//           <h2 className="my-5 text-3xl font-bold">Darban Resort, Diveagar</h2>
//           <h4 className="text-xl mb-4">We Konkanis take hosting as a pleasure and our resort gives the cozy feel of a home away from home.</h4>
//           <p className="mb-4 text-gray-800">
//             Our place is known for its thoughtful hospitality that gives personal attention to the guests and ensures the safety and comfort of our customers. Quality food, security, and your comfort are our top priorities, and your nature-friendly beach resort welcomes you to heaven on earth.
//           </p>
//           <Link href={'/overview'}>
//             <button className="px-6 py-2 bg-secondary hover:bg-primary text-white font-semibold rounded-md transition duration-300">
//               Explore Resort
//             </button>
//           </Link>
//         </div>

//         {/* Image Section */}
//         <div data-aos="fade-left" className="md:w-3/5 relative">
//           <Image
//             src="/darbanimages/darban-2.jpeg"
//             className="object-cover h-full w-full"
//             width={700}
//             height={500}
//             alt="Darban Resort Hero Image"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Welcome;





import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const Welcome = () => {
  

  
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
      <div className="mt-44 flex md:flex-row flex-col w-full m-auto my-20 overflow-hidden bg-white">
        {/* Text Section */}
        <div data-aos="fade-right" className="md:w-2/5 p-10">
          <p className=" wow animate__fadeInUpBig text-4xl text-center font-bold tracking-widest text-gray-900 font-lifeSugar" data-wow-duration="3s">
            
                W E L C O M E
               
          </p>
          <h2 className="wow animate__fadeInDown text-center font-learningCurve my-5 text-5xl font-bold" data-wow-duration="3s">
           
                Darban Resort, Diveagar
               
          </h2>
          

          <p className="font-sans text-[18px] mb-4 text-gray-600 wow animate__fadeInUp" data-wow-duration="3s">
            <span className="text-green-600">Our place </span> is known for its
            thoughtful <span className="text-green-600"> hospitality </span> that
            gives <span className="text-purple-800"> personal </span> attention to
            the <span className="text-green-600"> guests </span> & ensures the
            safety and comfort of our{" "}
            <span className="text-purple-800"> customers. Quality food </span>,
            security & your comfort are our top{" "}
            <span className="text-green-600"> priorities </span> Nature Friendly
            and your <span className="text-purple-800"> beach </span> resort
            welcomes you to <span className="text-green-600 ">heaven on earth.</span>
          </p>

          
          <Link href={"/overview"}>
            <button className="wow animate__fadeInLeft md:z-10 flex mt-5 px-3 py-3 text-lg bg-gradient-to-r from-purple-800 to-green-600 hover:bg-primary text-white font-semibold rounded-md transition duration-300"
            data-wow-duration="3s">
              Explore Resort
            </button>
          
          </Link>
  <div className="wow animate__fadeInRight" data-wow-duration="3s">
  <Image 
    src="/darbanimages/one_line_beach.webp"
    className="mx-auto mt-10 md:mx-52 md:-mt-20"
    width={350}
    height={350}
    alt="Beach" 
  />
</div>

        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="md:w-3/5 relative">
          <Image
            src="/darbanimages/darban-2.jpeg"
            className="object-cover h-full w-full"
            width={700}
            height={500}
            alt="Darban Resort Hero Image"
          />

        </div>
      </div>
    </>
  );
};

export default Welcome;





