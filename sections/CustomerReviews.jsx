import Review from "@/components/Review";
import React from "react";

const CustomerReviews = () => {
  return (
    <div className=" reviewBg">

    <div id="testimonials" className="flex md:flex-row flex-col  max-w-6xl m-auto md:py-20">
      <div className="md:w-1/3 p-5 text-white">
        <h2>Customer Reviews</h2>
      </div>
      <div className="md:w-1/3 p-5">
        <Review
          name={"Dhaval Desai"}
          review={
            "Unexpected views and spell bound natural scenery around. One should stop here once you cross malshej. This place is better than waiting on the ghats and seeing. You see lake, mountains and long stretch of land across. Good food. Lovely sit in the open. Infinity pool. Fabulous cottages."
          }
          highlights={"Romantic, Quiet, Kid-friendly, Great value, High-tech"}
          />
        <Review
          name={"Aditya Chavan"}
          review={
            "Fabulous service, next to heaven view. The food quality was also awesome. Definitely worth every penny we spent. Very spacious rooms with tons of amenities."
          }
          highlights={
            "Luxury, Great view, Romantic, Quiet, Kid-friendly, Great value, High-tech"
          }
          />
      </div>
      <div className="md:w-1/3 p-5">
        <Review
          name={"Shubham Jain"}
          review={
            "This is a really good resort to take a break from a daily routine. Situated on the shore of a lake with really mesmerizing views. I have been there just for a single lunch & the food was good. We had chicken afgani & chicken ajmeri which were really good. The biryani which we had later was amazing & was reasonably priced as well."
          }
          highlights={"Luxury, Great view, Romantic, Quiet, Kid-friendly"}
        />
        <Review
          name={"Sheetal Kamath"}
          review={
            "Good ambience and spacious rooms. Scenic view was awesome. Mouthwatering food menu.Overall a enjoyable stay."
          }
          highlights={"Romantic, Quiet, Kid-friendly, Great value, High-tech"}
          />
      </div>
    </div>
          </div>
  );
};

export default CustomerReviews;
