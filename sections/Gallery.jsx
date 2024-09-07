// import React, { useState } from "react";
// import Image from "next/image";

// const Gallery = () => {
//   const [image, setImage] = useState(null);

//   return (
//     <>
//       {image && (
//         <div
//           onClick={() => setImage(null)}
//           className="fixed w-screen h-screen bg-primary bg-opacity-50 top-0"
//         >
//           <div className="relative">
//             <div
//               onClick={() => setImage(null)}
//               className="absolute top-5 right-10 text-3xl text-white cursor-pointer"
//             >
//               X
//             </div>
//             <Image
//               className="p-3 m-auto "
//               width={1000}
//               height={1000}
//               src={image}
//               alt=""
//             />
//           </div>
//         </div>
//       )}

//       <div className="flex flex-col max-w-6xl  m-auto py-20 text-center">
//         <h2>Gallery</h2>

//         <div className="flex flex-wrap my-5">
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer h-[500px] "
//             width={1000}
//             height={1000}
//             onClick={() => setImage("/darbanimages/darban-5.jpeg")}
//             src={"/darbanimages/darban-5.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/darbanimages/darban-gallery-1.jpeg")}
//             src={"/darbanimages/darban-gallery-1.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/darbanimages/darban-gallery-2.jpeg")}
//             src={"/darbanimages/darban-gallery-2.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/darbanimages/darban-gallery-3.jpeg")}
//             src={"/darbanimages/darban-gallery-3.jpeg"}
//             alt=""
//           />
//           {/* <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/ext-oasis.jpeg")}
//             src={"/images/ext-oasis.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/ext-rest.jpeg")}
//             src={"/images/ext-rest.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/ext-swim.jpeg")}
//             src={"/images/ext-swim.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/ext-water.jpeg")}
//             src={"/images/ext-water.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/ext1.jpeg")}
//             src={"/images/ext1.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/ext2.jpeg")}
//             src={"/images/ext2.jpeg"}
//             alt=""
//           />

//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/ext4.jpeg")}
//             src={"/images/ext4.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/ext5.jpeg")}
//             src={"/images/ext5.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/rest-ext.jpeg")}
//             src={"/images/rest-ext.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/rest-food.jpeg")}
//             src={"/images/rest-food.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/rest-food1.jpeg")}
//             src={"/images/rest-food1.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/rest-food2.jpeg")}
//             src={"/images/rest-food2.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/rest.jpeg")}
//             src={"/images/rest.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/rest2.jpeg")}
//             src={"/images/rest2.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/rest3.jpeg")}
//             src={"/images/rest3.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/rest4.jpeg")}
//             src={"/images/rest4.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/room1.jpeg")}
//             src={"/images/room1.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/room2.jpeg")}
//             src={"/images/room2.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/room3.jpeg")}
//             src={"/images/room3.jpeg"}
//             alt=""
//           />
//           <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             onClick={() => setImage("/images/room4.jpeg")}
//             src={"/images/room4.jpeg"}
//             alt=""
//           /> */}
//           {/* <Image
//             className="p-3 md:w-1/4 w-1/2 cursor-pointer "
//             width={500}
//             height={500}
//             src={"/images/room1.jpeg"}
//             alt=""
//           /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gallery;







import React, { useState, useEffect } from "react";
import Image from "next/image";
import "animate.css"


const Gallery = () => {
  const [image, setImage] = useState(null);

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
      {image && (
        <div
          onClick={() => setImage(null)}
          className="fixed w-screen h-screen bg-primary bg-opacity-50 top-0 flex items-center justify-center z-50"
        >
          <div className="relative">
            <div
              onClick={() => setImage(null)}
              className="absolute top-5 right-10 text-3xl text-white cursor-pointer"
            >
              X
            </div>
            <Image
              className="p-3 m-auto"
              width={1000}
              height={1000}
              src={image}
              alt="Expanded view"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col max-w-6xl m-auto py-20 text-center">
        <h2 className=" wow animate__backInUp text-9xl font-bold mb-10 font-learningCurve bg-gradient-to-r from-purple-900 to-green-300 inline-block text-transparent bg-clip-text" data-wow-duration="2s">Our Gallery</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div data-aos="flip-up">
          <Image
            className="p-3 cursor-pointer object-cover h-[500px] w-full"
            width={500}
            height={500}
            onClick={() => setImage("/darbanimages/darban-5.jpeg")}
            src={"/darbanimages/darban-5.jpeg"}
            alt="Image 1"
          />
          </div>
          <div data-aos="flip-down">
          <Image
            className="p-3 cursor-pointer object-cover h-[500px] w-full"
            width={500}
            height={500}
            onClick={() => setImage("/darbanimages/darban-gallery-1.jpeg")}
            src={"/darbanimages/darban-gallery-1.jpeg"}
            alt="Image 2"
          />
          </div>
          <div data-aos="flip-up">
          <Image
            className="p-3 cursor-pointer object-cover h-[500px] w-full"
            width={500}
            height={500}
            onClick={() => setImage("/darbanimages/darban-gallery-2.jpeg")}
            src={"/darbanimages/darban-gallery-2.jpeg"}
            alt="Image 3"
          />
          </div>
          <div data-aos="flip-down">
          <Image
            className="p-3 cursor-pointer object-cover h-[500px] w-full"
            width={500}
            height={500}
            onClick={() => setImage("/darbanimages/darban-gallery-3.jpeg")}
            src={"/darbanimages/darban-gallery-3.jpeg"}
            alt="Image 4"
          />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Gallery;
