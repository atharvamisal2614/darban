// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { BsInstagram } from "react-icons/bs";

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);

//   const path = useRouter().asPath;

//   if (path.startsWith("/admin")) return;

//   return (
//     <>
//       <div className="p-5 relative bg-[#9cff3a]">
//         <div className="flex justify-center">
//           <div className="px-5 max-md:hidden flex-1">
//             <div className="flex flex-col text-right justify-center gap-3 h-full">
//               <div className="flex justify-end gap-5">
//                 <Link href={"/malshej"}>
//                   <p className="text-gray-800 hover:text-green-900">
//                     Nearby Places
//                   </p>
//                 </Link>
//                 {/* <p>OUR OTHER RESORTS</p> */}
//                 {/* <p>ABOUT MALSHEJ</p> */}
//               </div>

//               <div className="flex gap-5 justify-end">
//                 <Link href={"/careers"}>
//                   <p className="text-gray-800 hover:text-green-900">Careers</p>
//                 </Link>
//                 {/* <Link href={"/event-weddings"}>
//                   <p className="text-gray-800 hover:text-green-900">Event & Weddings</p>
//                 </Link> */}
//               </div>
//             </div>
//           </div>
//           <Image
//             src={"/darbanimages/darban-logo-og.png"}
//             // className="w-20 object-contain mx-10"
//             // width={200}
//             // height={700}
//             style={{ height:"150px" }}
//             width={200}
//             height={300}
//             alt={"blu logo"}
//             priority
//           />

//           <div className="px-5 max-md:hidden flex-1 ">
//             <div className="flex flex-col h-full justify-center gap-3">
//               {/* <p>EXPERIENCE THE BEST RESORT IN Malshej Ghat</p> */}
//               <div className="flex gap-5">
//                 {/* <Link href={"/offers"}>
//                   <p className="hover:text-primary">Offers and Packages</p>
//                 </Link> */}
//                 <Link href={"/malshej"}>
//                   <p className="text-gray-800 hover:text-green-900">About Diveagar</p>
//                 </Link>
//                 {/* <Link href={"/#aminities"}>
//                   <p className="hover:text-primary">Amenities</p>
//                 </Link> */}
//               </div>
//               <div className="flex gap-5 items-center">
//                 <Link href={"/gallery"}>
//                   <p className="text-gray-800 hover:text-green-900">Photo Gallery</p>
//                 </Link>
//                 <Link href={"/contact"}>
//                   <p className="text-gray-800 hover:text-green-900">Contact Us</p>
//                 </Link>
//                 <a href="https://www.instagram.com/darban_resort_/">
//                   <BsInstagram />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="line h-[1px] bg-sky50 mt-5 "></div>

//         <div className="flex md:hidden justify-center items-center pt-4 gap-10">
//           <div onClick={() => setNavbar(!navbar)} className="">
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//           </div>

//           <Link href={"/"}>
//             <button>Book Now</button>
//           </Link>
//         </div>

//         <div
//           className={`flex justify-center md:relative z-50 absolute ${
//             navbar ? "translate-x-0 " : "max-md:translate-x-[100vw]"
//           } transition-all bg-[#9cff3a] mt-5 left-0 w-full duration-500 items-center md:flex-row flex-col gap-10 max-md:py-4 `}
//         >
//           <Link onClick={() => setNavbar(false)} href={"/"}>
//             <p className="text-gray-700 hover:text-green-800">Home</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/blunest"}>
//             <p className="text-gray-700 hover:text-green-800" >Restaurant</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/bludeck"}>
//             <p className="text-gray-700 hover:text-green-800">Rooms</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/bluoasis"}>
//             <p className="text-gray-700 hover:text-green-800">About Us</p>
//           </Link>
//           <a href="/BluResort.pdf" download={true}>
//             <button>Download Brochure</button>
//           </a>
//           <Link
//             onClick={() => setNavbar(false)}
//             className="max-md:hidden"
//             href={"/book-now"}
//           >
//             <button>Book Now</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;






// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { BsInstagram } from "react-icons/bs";

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);

//   const path = useRouter().asPath;

//   if (path.startsWith("/admin")) return;

//   return (
//     <>
//       <div className="p-5 relative bg-[#9cff3a]">
//         <div className="flex justify-center">
//           <div className="px-5 max-md:hidden flex-1">
//             <div className="flex flex-col text-right justify-center gap-3 h-full">
//               <div className="flex justify-end gap-5">
//                 <Link href={"/malshej"}>
//                   <p className="text-gray-800 hover:text-blue-800">
//                     Nearby Places
//                   </p>
//                 </Link>
//               </div>

//               <div className="flex gap-5 justify-end">
//                 <Link href={"/careers"}>
//                   <p className="text-gray-800 hover:text-blue-800">Careers</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <Image
//             src={"/darbanimages/darban-logo-og.png"}
//             style={{ height: "150px" }}
//             width={200}
//             height={300}
//             alt={"blu logo"}
//             priority
//           />

//           <div className="px-5 max-md:hidden flex-1">
//             <div className="flex flex-col h-full justify-center gap-3">
//               <div className="flex gap-5">
//                 <Link href={"/malshej"}>
//                   <p className="text-gray-800 hover:text-blue-800">About Diveagar</p>
//                 </Link>
//               </div>
//               <div className="flex gap-5 items-center">
//                 <Link href={"/gallery"}>
//                   <p className="text-gray-800 hover:text-blue-800">Photo Gallery</p>
//                 </Link>
//                 <Link href={"/contact"}>
//                   <p className="text-gray-800 hover:text-blue-800">Contact Us</p>
//                 </Link>
//                 <a href="https://www.instagram.com/darban_resort_/">
//                   <BsInstagram />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="line h-[1px] bg-sky50 mt-5"></div>

//         <div className="flex md:hidden justify-center items-center pt-4 gap-10">
//           <div onClick={() => setNavbar(!navbar)} className="">
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//           </div>

//           <Link href={"/"}>
//             <button className="bg-white text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 ease-in-out">
//               Book Now
//             </button>
//           </Link>
//         </div>

//         <div
//           className={`flex justify-center md:relative z-50 absolute ${
//             navbar ? "translate-x-0 " : "max-md:translate-x-[100vw]"
//           } transition-all bg-[#9cff3a] mt-5 left-0 w-full duration-500 items-center md:flex-row flex-col gap-10 max-md:py-4 `}
//         >
//           <Link onClick={() => setNavbar(false)} href={"/"}>
//             <p className="text-gray-700 hover:text-blue-800">Home</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/blunest"}>
//             <p className="text-gray-700 hover:text-blue-800">Restaurant</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/bludeck"}>
//             <p className="text-gray-700 hover:text-blue-800">Rooms</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/bluoasis"}>
//             <p className="text-gray-700 hover:text-blue-800">About Us</p>
//           </Link>
//           <a href="/BluResort.pdf" download={true}>
//             <button className="bg-white text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 ease-in-out">
//               Download Brochure
//             </button>
//           </a>
//           <Link
//             onClick={() => setNavbar(false)}
//             className="max-md:hidden"
//             href={"/book-now"}
//           >
//             <button className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-700 ease-in-out">
//               Book Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;






// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { BsInstagram } from "react-icons/bs";

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);

//   const path = useRouter().asPath;

//   if (path.startsWith("/admin")) return;

//   return (
//     <>
//       <div className="p-5 relative bg-[#9cff3a]">
//         <div className="flex justify-center">
//           <div className="px-5 max-md:hidden flex-1">
//             <div className="flex flex-col text-right justify-center gap-3 h-full">
//               <div className="flex justify-end gap-5">
//                 <Link href={"/malshej"}>
//                   <p className="text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out">
//                     Nearby Places
//                   </p>
//                 </Link>
//               </div>

//               <div className="flex gap-5 justify-end">
//                 <Link href={"/careers"}>
//                   <p className="text-gray-700 hover:bg-green-600 hover:p-3 hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out">
//                   Careers</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <Image
//             src={"/darbanimages/darban-logo-og.png"}
//             style={{ height: "150px" }}
//             width={200}
//             height={300}
//             alt={"blu logo"}
//             priority
//           />

//           <div className="px-5 max-md:hidden flex-1">
//             <div className="flex flex-col h-full justify-center gap-3">
//               <div className="flex gap-5">
//                 <Link href={"/malshej"}>
//                   <p className="text-gray-700 hover:bg-green-600 hover:p-3 hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out">
//                   About Diveagar</p>
//                 </Link>
//               </div>
//               <div className="flex gap-5 items-center">
//                 <Link href={"/gallery"}>
//                   <p className="text-gray-700 hover:bg-green-600 hover:p-3 hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out">
//                   Photo Gallery</p>
//                 </Link>
//                 <Link href={"/contact"}>
//                   <p className="text-gray-700 hover:bg-green-600 hover:p-3 hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out">
//                   Contact Us</p>
//                 </Link>
//                 <a href="https://www.instagram.com/darban_resort_/">
//                   <BsInstagram />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="line h-[1px] bg-sky50 mt-5"></div>

//         <div className="flex md:hidden justify-center items-center pt-4 gap-10">
//           <div onClick={() => setNavbar(!navbar)} className="">
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//             <div className="line w-5 h-0.5 bg-primary my-1"></div>
//           </div>

//           <Link href={"/"}>
//             <button className="bg-white text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-dark-olive-green hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-300 ease-in-out">
//               Book Now
//             </button>
//           </Link>
//         </div>

//         <div
//           className={`flex justify-center md:relative z-50 absolute ${
//             navbar ? "translate-x-0 " : "max-md:translate-x-[100vw]"
//           } transition-all bg-[#9cff3a] mt-5 left-0 w-full duration-500 items-center md:flex-row flex-col gap-10 max-md:py-4 `}
//         >
//           <Link onClick={() => setNavbar(false)} href={"/"}>
//             <p className="text-gray-700 hover:bg-green-600 hover:p-3 hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out">
//             Home</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/blunest"}>
//             <p className="text-gray-700 hover:bg-green-600 hover:p-3 hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out">
//             Restaurant</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/bludeck"}>
//             <p className="text-gray-700 hover:bg-green-600 hover:p-3 hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out">
//             Rooms</p>
//           </Link>
//           <Link onClick={() => setNavbar(false)} href={"/bluoasis"}>
//             <p className="text-gray-700 hover:bg-green-600 hover:p-3 hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out">
//             About Us</p>
//           </Link>
//           <a href="/BluResort.pdf" download={true}>
//             <button className="bg-white text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-700 ease-in-out">
//               Download Brochure
//             </button>
//           </a>
//           <Link
//             onClick={() => setNavbar(false)}
//             className="max-md:hidden"
//             href={"/book-now"}
//           >
//             <button className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-700 ease-in-out">
//               Book Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;








import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const path = useRouter().asPath;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      const wow = new WOW.WOW({
        live: false,
        resetAnimation: true,
      });
      wow.init();
    }
  }, []);

  if (path.startsWith("/admin")) return null;

  return (
    <>
      <div className="p-5 relative bg-gradient-to-r from-purple-300 to-green-300">
        <div className="flex justify-center">
          <div className="px-5 max-md:hidden flex-1">
            <div className="flex flex-col text-right justify-center gap-3 h-full">
              <div className="flex justify-end gap-5">
                <Link href={"/malshej"}>
                  <p
                    className="font-Croogs text-2xl wow animate__fadeInLeftBig text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
                    data-wow-duration="2s"
                  >
                    Nearby Places
                  </p>
                </Link>
              </div>

              <div className="flex gap-5 justify-end">
                <Link href={"/careers"}>
                  <p
                    className="font-Croogs text-2xl wow animate__fadeInLeftBig text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
                    data-wow-duration="2s"
                  >
                    Careers
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <Image className="wow animate__backInDown" data-wow-duration="2s"
            src={"/darbanimages/darban-logo-og.png"}
            style={{ height: "150px" }}
            width={200}
            height={300}
            alt={"blu logo"}
            priority
          />

          <div className="px-5 max-md:hidden flex-1">
            <div className="flex flex-col h-full justify-center gap-3">
              <div className="flex gap-5">
                <Link href={"/malshej"}>
                  <p
                    className="font-Croogs text-2xl wow animate__fadeInRightBig text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
                    data-wow-duration="2s"
                  >
                    About Diveagar
                  </p>
                </Link>
              </div>
              <div className="flex gap-5 items-center">
                <Link href={"/gallery"}>
                  <p
                    className="font-Croogs text-2xl wow animate__fadeInRightBig text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
                    data-wow-duration="2s"
                  >
                    Photo Gallery
                  </p>
                </Link>
                <Link href={"/contact"}>
                  <p
                    className="font-Croogs text-2xl wow animate__fadeInRightBig text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
                    data-wow-duration="2s"
                  >
                    Contact Us
                  </p>
                  
                </Link>
              
               
              </div>
            </div>
          </div>
        </div>

        <div className="line h-[1px] bg-sky50 mt-5"></div>

        <div className="flex md:hidden justify-center items-center pt-4 gap-10">
          <div onClick={() => setNavbar(!navbar)} className="">
            <div className="line w-5 h-0.5 bg-primary my-1"></div>
            <div className="line w-5 h-0.5 bg-primary my-1"></div>
            <div className="line w-5 h-0.5 bg-primary my-1"></div>
          </div>

          <Link href={"/"}>
            <button className="bg-white text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-dark-olive-green hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-300 ease-in-out">
              Book Now
            </button>
          </Link>
        </div>

        <div
          className={`flex justify-center md:relative z-50 absolute ${
            navbar ? "translate-x-0 " : "max-md:translate-x-[100vw]"
          } transition-all bg-gradient-to-r from-purple-300 to-green-300 mt-5 left-0 w-full duration-500 items-center md:flex-row flex-col gap-10 max-md:py-4`}
        >
          <Link onClick={() => setNavbar(false)} href={"/"}>
            <p
              className="font-lifeSugar text-2xl wow animate__zoomInRight text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
              data-wow-duration="2s"
            >
              Home
            </p>
          </Link>

          <Link onClick={() => setNavbar(false)} href={"/blunest"}>
            <p
              className="font-lifeSugar text-2xl wow animate__zoomInRight animated text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
              data-wow-duration="2s"
            >
              Restaurant
            </p>
          </Link>

          <Link onClick={() => setNavbar(false)} href={"/bludeck"}>
            <p
              className="font-lifeSugar text-2xl wow animate__zoomInLeft animated text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
              data-wow-duration="2s"
            >
              Rooms
            </p>
          </Link>

          <Link onClick={() => setNavbar(false)} href={"/bluoasis"}>
            <p
              className="font-lifeSugar text-2xl wow animate__zoomInRight animated text-gray-700 hover:bg-gradient-to-r from-green-600 to-purple-800 hover:p-2 hover:rounded-lg hover:text-white transition-all duration-700 ease-in-out"
              data-wow-duration="2s"
            >
              About Us
            </p>
          </Link>

          <a href="/BluResort.pdf" download={true}>
            <button
              className="font-Croogs text-lg wow animate__backInUp text-gray-700 bg-white hover:bg-green-800 hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out"
              data-wow-duration="2s"
            >
              Download Brochure
            </button>
          </a>

          <Link onClick={() => setNavbar(false)} href={"/book-now"}>
            <button
              className="font-Croogs text-lg wow animate__backInUp text-gray-700 bg-white hover:bg-green-800 hover:text-white hover:shadow-[0_0_10px_4px_rgba(50,205,50,0.5)] transition-all duration-700 ease-in-out"
              data-wow-duration="2s"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
