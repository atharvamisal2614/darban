// import Review from "@/components/Review";
// import React from "react";

// const CustomerReviews = () => {
//   return (
//     <div className=" reviewBg">

//     <div id="testimonials" className="flex md:flex-row flex-col  max-w-6xl m-auto md:py-20">
//       <div className="md:w-1/3 p-5 text-white">
//         <h2>Customer Reviews</h2>
//       </div>
//       <div className="md:w-1/3 p-5">
//         <Review
//           name={"Dhaval Desai"}
//           review={
//             "Unexpected views and spell bound natural scenery around. One should stop here once you cross malshej. This place is better than waiting on the ghats and seeing. You see lake, mountains and long stretch of land across. Good food. Lovely sit in the open. Infinity pool. Fabulous cottages."
//           }
//           highlights={"Romantic, Quiet, Kid-friendly, Great value, High-tech"}
//           />
//         <Review
//           name={"Aditya Chavan"}
//           review={
//             "Fabulous service, next to heaven view. The food quality was also awesome. Definitely worth every penny we spent. Very spacious rooms with tons of amenities."
//           }
//           highlights={
//             "Luxury, Great view, Romantic, Quiet, Kid-friendly, Great value, High-tech"
//           }
//           />
//       </div>
//       <div className="md:w-1/3 p-5">
//         <Review
//           name={"Shubham Jain"}
//           review={
//             "This is a really good resort to take a break from a daily routine. Situated on the shore of a lake with really mesmerizing views. I have been there just for a single lunch & the food was good. We had chicken afgani & chicken ajmeri which were really good. The biryani which we had later was amazing & was reasonably priced as well."
//           }
//           highlights={"Luxury, Great view, Romantic, Quiet, Kid-friendly"}
//         />
//         <Review
//           name={"Sheetal Kamath"}
//           review={
//             "Good ambience and spacious rooms. Scenic view was awesome. Mouthwatering food menu.Overall a enjoyable stay."
//           }
//           highlights={"Romantic, Quiet, Kid-friendly, Great value, High-tech"}
//           />
//       </div>
//     </div>
//           </div>
//   );
// };

// export default CustomerReviews;



// import React,{useEffect} from "react";
// import Slider from "react-slick";
// import Review from "@/components/Review";
// import "animate.css"

// const CustomerReviews = () => {

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const WOW = require("wow.js");
//       const wow = new WOW({
//         live: false,
//         resetAnimation: true,
//       });
//       wow.init();
//     }
//   }, []);

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768, // Mobile devices
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="reviewBg py-10">
//       <div id="testimonials" className="wow animate__zoomInUp flex flex-col max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-6 text-center text-gray-100">Customer Reviews</h2>
//         <Slider {...settings}>
//           <div>
//             <Review
//               name={"ANIL KHAVATE"}
//               review={
//                 ` Very nice place for a family vacation. 2
//                             minutes walk to the beach. Clean rooms.
//                             Restaurant serves nice tasty food. Manager
//                             and staff are very friendly, always ready to
//                             help to make your stay better. I would love
//                             to stay at this resort again in future.`
              
//               }
//               highlights={"Romantic, Quiet, Kid-friendly, Great value, High-tech"}
//             />
//           </div>
//           <div>
//             <Review
//               name={"ANKUSH MOHOKAR"}
//               review={
//                 `Stay was excellent. They have well maintained rooms, pool, garden and
//                             restaurant. Service staff is responsive & helpful. They have good room
//                             service and gave multiple options to eat. Beach is at walking distance`
//               }
//               highlights={
//                 "Luxury, Great view, Romantic, Quiet, Kid-friendly, Great value, High-tech"
//               }
//             />
//           </div>
//           <div>
//             <Review
//               name={"Sagar"}
//               review={
//                 `Darban is a nice resort in a nearby locality. Room was neat n clean.
//                             Food
//                             was fair enough to meet the expectation. Swimming pool and surrounding
//                             is
//                             well maintained. Staff was friendly and attentive.`
//               }
//               highlights={"Luxury, Great view, Romantic, Quiet, Kid-friendly"}
//             />
//           </div>
//           <div>
//             <Review
//               name={"MANGESH YADAV"}
//               review={
//                 ` Excellent resort in diveagar. Rooms are clean and neat, charges are
//                             reasonable, swimming pool is clean, little play area for children, good
//                             area
//                             for all to spend time in evening, light music is playing in morning and
//                             Evening in entire resort which gives pleasent experience. Ideal for
//                             family,
//                             couples.`
//               }
//               highlights={"Romantic, Quiet, Kid-friendly, Great value, High-tech"}
//             />
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;




import React, { useEffect } from "react";
import Slider from "react-slick";
import Review from "@/components/Review";
import "animate.css";

const CustomerReviews = () => {
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

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="reviewBg py-10">
      <div id="testimonials" className="flex flex-col max-w-6xl mx-auto">
        {/* Apply wow and animate__zoomInUp to the heading */}
        <h2 className="font-learningCurve  wow animate__zoomInUp text-7xl font-bold mb-6 text-center text-gray-100">
          Customer Reviews
        </h2>
        <Slider {...settings}>
          <div>
            <Review
              name={"ANIL KHAVATE"}
              review={` Very nice place for a family vacation. 2 minutes walk to the beach. Clean rooms. Restaurant serves nice tasty food. Manager and staff are very friendly, always ready to help to make your stay better. I would love to stay at this resort again in future.`}
              highlights={"Romantic, Quiet, Kid-friendly, Great value, High-tech"}
            />
          </div>
          <div>
            <Review
              name={"ANKUSH MOHOKAR"}
              review={`Stay was excellent. They have well maintained rooms, pool, garden and restaurant. Service staff is responsive & helpful. They have good room service and gave multiple options to eat. Beach is at walking distance`}
              highlights={
                "Luxury, Great view, Romantic, Quiet, Kid-friendly, Great value, High-tech"
              }
            />
          </div>
          <div>
            <Review
              name={"Sagar"}
              review={`Darban is a nice resort in a nearby locality. Room was neat n clean. Food was fair enough to meet the expectation. Swimming pool and surrounding is well maintained. Staff was friendly and attentive.`}
              highlights={"Luxury, Great view, Romantic, Quiet, Kid-friendly"}
            />
          </div>
          <div>
            <Review
              name={"MANGESH YADAV"}
              review={` Excellent resort in diveagar. Rooms are clean and neat, charges are reasonable, swimming pool is clean, little play area for children, good area for all to spend time in evening, light music is playing in morning and Evening in entire resort which gives pleasent experience. Ideal for family, couples.`}
              highlights={"Romantic, Quiet, Kid-friendly, Great value, High-tech"}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
