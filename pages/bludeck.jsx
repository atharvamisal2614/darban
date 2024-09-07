// import BluDeckIntro from "@/sections/BluDeckIntro";
// import TopSection from "@/sections/TopSection";
// import Image from "next/image";
// import React from "react";

// const BluDeck = () => {
//   return (
//     <>

//       <div className="bg-[url('/darbanimages/darban-3.jpeg')] h-[70vh] bg-fixed w-full flex justify-center items-center  bg-center bg-cover">
//         <div className=" text-center">
//           <h1 className="text-white">The Darban</h1>
          
//           <p className="text-white">Restaurant</p>

//         </div>
//       </div>

//       {/* <BluDeckIntro /> */}

//       <div className="flex md:flex-row flex-col max-w-6xl m-auto ">
//         {/* <div  className="md:w-1/3 p-5 text-center flex">
//           <p className="my-auto ">
//             The decor of the restaurant is modern and elegant, with comfortable
//             seating and a sophisticated ambiance. The open-air design of the
//             restaurant allows guests to enjoy the cool breeze while they savor
//             their meal, creating a truly unique and memorable dining experience.
//           </p>
//         </div> */}
//         <div data-aos="zoom-in-right" className="md:w-1/3 p-5 ">
//           <Image
//             src={"/darbanimages/darban-slide-1.jpeg"}
//             className={`h-full object-cover relative -z-10 w-[300px]`}
//             width={1000}
//             height={500}
//             alt={""}
//           />
//         </div>

//         <div data-aos="zoom-in" className="md:w-1/3 p-5 text-center h-full">
//           <p className="m-auto">
//             The menu at Blu Deck is carefully curated to offer guests a wide
//             range of dishes that cater to different palates. The restaurant
//             specializes in a variety of cuisines, including Indian, Chinese, and
//             continental, with an emphasis on fresh, local ingredients. The chefs
//             at Blu Deck take great pride in creating innovative and flavorful
//             dishes that showcase the best of each cuisine, and guests can be
//             assured of a delightful dining experience.
//           </p>
//         </div>
//       </div>
//       <div className="flex md:flex-row flex-col max-w-6xl m-auto py-10 ">
       
//         <div data-aos="zoom-in" className="md:w-1/3 p-5 ">
//           <Image
//             src={"/darbanimages/darban-slide-4.jpeg"}
//             className={`h-full object-cover relative -z-10`}
//             width={700}
//             height={500}
//             alt={""}
//           />
//         </div>
//         <div data-aos="zoom-in" className="md:w-1/3 p-5 ">
//           <Image
//             src={"/darbanimages/darban-slide-3.jpeg"}
//             className={`h-full object-cover relative -z-10`}
//             width={700}
//             height={500}
//             alt={""}
//           />
//         </div>
//         <div data-aos="zoom-in" className="md:w-1/3 p-5 ">
//           <Image
//             src={"/darbanimages/darban-slide-6.jpeg"}
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

// export default BluDeck;







// import BluDeckIntro from "@/sections/BluDeckIntro";
// import TopSection from "@/sections/TopSection";
// import Image from "next/image";
// import React from "react";

// const BluDeck = () => {
//   return (
//     <>
//       <div className="bg-[url('/darbanimages/darban-3.jpeg')] h-[70vh] bg-fixed w-full flex justify-center items-center bg-center bg-cover">
//         <div className="text-center">
//           <h1 className="text-white">The Darban</h1>
//           <p className="text-white">Restaurant</p>
//         </div>
//       </div>

//       {/* <BluDeckIntro /> */}

//       <div className="flex md:flex-row flex-col max-w-6xl m-auto">
//         <div data-aos="zoom-in-right" className="md:w-1/2 p-5">
//           <Image
//             src={"/darbanimages/darban-slide-1.jpeg"}
//             className="h-full object-cover relative -z-10 w-full"
//             width={1000}
//             height={500}
//             alt=""
//           />
//         </div>

//         <div data-aos="zoom-in" className="md:w-1/2 p-5 text-center h-full">
//           <p className="m-auto">
//             The menu at Blu Deck is carefully curated to offer guests a wide
//             range of dishes that cater to different palates. The restaurant
//             specializes in a variety of cuisines, including Indian, Chinese, and
//             continental, with an emphasis on fresh, local ingredients. The chefs
//             at Blu Deck take great pride in creating innovative and flavorful
//             dishes that showcase the best of each cuisine, and guests can be
//             assured of a delightful dining experience.
//           </p>
//         </div>
//       </div>

//       <div className="flex md:flex-row flex-col max-w-6xl m-auto py-10">
//         <div data-aos="zoom-in" className="md:w-1/3 p-5">
//           <Image
//             src={"/darbanimages/darban-slide-4.jpeg"}
//             className="h-full object-cover relative -z-10 w-full"
//             width={700}
//             height={500}
//             alt=""
//           />
//         </div>
//         <div data-aos="zoom-in" className="md:w-1/3 p-5">
//           <Image
//             src={"/darbanimages/darban-slide-3.jpeg"}
//             className="h-full object-cover relative -z-10 w-full"
//             width={700}
//             height={500}
//             alt=""
//           />
//         </div>
//         <div data-aos="zoom-in" className="md:w-1/3 p-5">
//           <Image
//             src={"/darbanimages/darban-slide-6.jpeg"}
//             className="h-full object-cover relative -z-10 w-full"
//             width={700}
//             height={500}
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BluDeck;




import BluDeckIntro from "@/sections/BluDeckIntro";
import TopSection from "@/sections/TopSection";
import Image from "next/image";
import React,{useEffect} from "react";

const BluDeck = () => {


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

  return (
    <>
      <div className="bg-[url('/darbanimages/darban-3.jpeg')] h-[80vh] bg-fixed w-full flex justify-center items-center bg-center bg-cover">
        <div className="text-center">
          <h1 className="text-white">The Darban</h1>
          <p className="text-white">Rooms</p>
        </div>
      </div>

      {/* Add top margin to this section */}
      <div className="flex md:flex-row flex-col max-w-6xl m-auto mt-10">
        <div data-aos="zoom-in-right" className="md:w-1/2 p-5">
          <Image
            src={"/darbanimages/darban-slide-1.jpeg"}
            className="h-96 object-cover relative -z-10 w-full"
            width={1000}
            height={600} 
            alt=""
          />
        </div>

        <div data-aos="zoom-in" className="md:w-1/2 p-5 text-center h-full">
          <p className="wow animate__fadeInUpBig  m-auto text-justify" data-wow-duration="3s">
          The rooms at Darban Resort are thoughtfully designed to provide guests with
          a perfect blend of comfort and style. Each room is equipped with modern
          amenities, ensuring a luxurious stay. From plush bedding to 
          spacious interiors, every detail is crafted to enhance your 
          relaxation. Large windows offer stunning views of the lush greenery
          and serene surroundings, allowing you to immerse yourself in the
          natural beauty of the area. Whether you are enjoying a romantic
          getaway or a family vacation, the rooms at Darban Resort
          promise a tranquil and memorable experience
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col max-w-6xl m-auto py-10 mt-10">
        <div data-aos="zoom-in" className="md:w-1/3 p-5">
          <Image
            src={"/darbanimages/darban-slide-4.jpeg"}
            className="h-96 object-cover relative -z-10 w-full"  
            width={700}
            height={500}
            alt=""
          />
        </div>
        <div data-aos="zoom-in" className="md:w-1/3 p-5">
          <Image
            src={"/darbanimages/darban-slide-3.jpeg"}
            className="h-96 object-cover relative -z-10 w-full"  
            width={700}
            height={500}
            alt=""
          />
        </div>
        <div data-aos="zoom-in" className="md:w-1/3 p-5">
          <Image
            src={"/darbanimages/darban-slide-6.jpeg"}
            className="h-96 object-cover relative -z-10 w-full"  
            width={700}
            height={500}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BluDeck;
