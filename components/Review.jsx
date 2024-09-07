// import React from "react";
// import { BsStarFill } from "react-icons/bs";

// const Review = ({name, review, highlights}) => {
//   return (
//     <>
//       <div className="p-5 py-8 bg-center bg-cover border shadow-md bg-white bg-opacity-80 text-center mb-5 rounded-2xl ">
//         <h4 className="">{name}</h4>
//         <div className="flex my-5 text-yellow-400 gap-2 justify-center">
//           <BsStarFill />
//           <BsStarFill />
//           <BsStarFill />
//           <BsStarFill />
//           <BsStarFill />
//         </div>
//         <p className="leading-5 ">
//           {review}
//         </p>

//         <br />
//         <strong className="underline">
//           {highlights}
//         </strong>
//       </div>
//     </>
//   );
// };

// export default Review;





import React from "react";
import { BsStarFill } from "react-icons/bs";

const Review = ({ name, review, highlights }) => {



 

  return (
    <div className="p-5 py-8 bg-center bg-cover border shadow-md bg-white bg-opacity-80 text-center mb-5 rounded-2xl h-[350px] w-full md:w-[350px] flex flex-col justify-between mx-auto">
      <div>
        <h4 className="text-xl font-semibold mb-4">{name}</h4>
        <div className="flex my-5 text-yellow-400 gap-2 justify-center">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <p className="leading-5">{review}</p>
      </div>
      <strong className="underline">{highlights}</strong>
    </div>
  );
};

export default Review;

