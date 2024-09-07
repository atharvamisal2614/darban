// import Image from "next/image";
// import React from "react";

// const Place = ({ name, image, desc }) => {
//   return (
//     <>
//     <div className="p-5">

//        <div className=" relative flex ">
//         <Image
//           className="rounded-lg h-56 object-cover"
//           width={800}
//           height={800}
//           src={image}
//           alt=""
//         />

//         <div className="w-full hover:h-full h-20 p-5 rounded-lg text-center text-white bg-opacity-20 bg-black  hover:bg-opacity-80 transition-all hover:bg-primary absolute bottom-0">
//           <h4 className="mb-8 leading-6">{name}</h4>
//           <p className="text-white leading-5">
//             {desc}
//           </p>
//         </div>
//       </div>
//           </div>
//     </>
//   );
// };

// export default Place;




// import React from "react";
// import ReactCardFlip from "react-card-flip";
// import Image from "next/image";

// const Place = ({ name, image, desc }) => {
//   const [isFlipped, setIsFlipped] = React.useState(false);

//   const flipCard = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div className="p-5">
//       <ReactCardFlip
//         isFlipped={isFlipped}
//         flipDirection="horizontal"
//         className="relative flex items-center justify-center"
//       >
//         {/* Front Side */}
//         <div
//           className="w-full h-56 relative rounded-lg overflow-hidden cursor-pointer"
//           onMouseEnter={flipCard}
//         >
//           <Image
//             className="object-cover w-full h-full"
//             src={image}
//             alt={name}
//             width={800}
//             height={800}
//           />
//         </div>

//         {/* Back Side */}
//         <div
//           className="w-full h-56 flex items-center justify-center bg-black bg-opacity-80 rounded-lg cursor-pointer"
//           onMouseLeave={flipCard}
//         >
//           <div className="text-center text-white p-4">
//             <h4 className="text-xl font-semibold mb-2">{name}</h4>
//             <p className="text-sm">{desc}</p>
//           </div>
//         </div>
//       </ReactCardFlip>
//     </div>
//   );
// };

// export default Place;







import React from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";

const Place = ({ name, image, desc }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="p-5">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        className="relative flex items-center justify-center"
      >
        {/* Front Side */}
        <div
          className="w-full h-56 relative rounded-lg overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="object-cover w-full h-full"
            src={image}
            alt={name}
            width={800}
            height={800}
          />
        </div>

        {/* Back Side */}
        <div
          className="w-full h-56 flex items-center justify-center bg-black bg-opacity-5 rounded-3xl"
        >
          <div className="text-center text-gray-200 p-4">
            <h4 className="text-xl font-semibold mb-2">{name}</h4>
            <p className="text-md text-white font-bold">{desc}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Place;
