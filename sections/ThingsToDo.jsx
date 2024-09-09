// import Place from "@/components/Place";
// import Image from "next/image";
// import React from "react";

// const ThingsToDo = () => {
//   return (
//     <div
//       id="things-to-do"
//       className="flex items-center flex-col max-w-6xl m-auto py-20"
//     >
//       <p>
//         T H I N G S<span className="p-2"></span> T O{" "}
//         <span className="p-2"></span> D O
//       </p>
//       <h2 className="my-5">Places to visit near by</h2>
//       <p className="text-center p-5">
//         There are several places to visit near Malshej Ghat that offer unique
//         experiences and attractions. Here are some popular options. these nearby
//         destinations offer a mix of natural beauty, historical significance, and
//         adventure opportunities for visitors to Malshej Ghat.
//       </p>

//       <div className="flex mt-10 flex-col md:flex-row">
//         <div className="md:w-1/3 w-full wow animate__fadeInUp">
//           <Place
//             image={"/places/shivneri.jpg"}
//             name={"Shivneri Fort"}
//             desc={
//               "This ancient fort is located near Junnar and is known for being the birthplace of the great Maratha ruler, Chhatrapati Shivaji."
//             }
//           />
//           <Place
//             image={"/places/harishchandragad.jpg"}
//             name={"Harishchandragad Fort"}
//             desc={
//               "This fort is located in the Ahmednagar district and is known for its scenic views and challenging trekking trails."
//             }
//           />
//           <Place
//             image={"/places/boating.jpg"}
//             name={"Boating"}
//             desc={
//               "Boating & Camping are popular lakeside activities during the monsoon and winter seasons when sufficient water is available in the reservoir."
//             }
//           />
//         </div>
//         <div className="md:w-1/3 w-full wow animate__fadeInUp">
//           <Place
//             image={"/places/Lenyadri.jpg"}
//             name={"Ozar and Lenyadri Caves"}
//             desc={
//               "These ancient rock-cut caves are located near Junnar and are known for their intricate carvings and historical significance."
//             }
//           />
//           <Place
//             image={"/places/bhandardara.jpg"}
//             name={"Bhandardara"}
//             desc={
//               "This picturesque hill station is located near Ahmednagar and is known for its scenic beauty, waterfalls, and camping opportunities."
//             }
//           />
//           <Place
//             image={"/places/kalsubai.jpg"}
//             name={"Kalsubai Peak"}
//             desc={
//               "This is the highest peak in Maharashtra, located near Bhandardara, and is a popular destination for trekking and adventure enthusiasts."
//             }
//           />
//         </div>
//         <div className="md:w-1/3 w-full wow animate__fadeInUp">
//           <Place
//             image={"/places/ozar.jpg"}
//             name={"Junnar Caves"}
//             desc={
//               "These rock-cut caves are located near Junnar and are known for their intricate carvings and historical significance."
//             }
//           />
//           <Place
//             image={"/places/bhimashankar.webp"}
//             name={"Bhimashankar Wildlife Sanctuary"}
//             desc={
//               "This sanctuary is home to a variety of wildlife species, including the Indian giant squirrel and the barking deer, and is known for its beautiful waterfalls."
//             }
//           />
//           <Place
//             image={"/places/flamingo-pink.jpeg"}
//             name={"Flamingo"}
//             desc={
//               " To see in Malshej Ghat is that of a huge flock of pink flamingos comfortably settling into their southern home"
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThingsToDo;






// import Place from "@/components/Place";
// import React from "react";

// const ThingsToDo = () => {
//   return (
//     <div
//       id="things-to-do"
//       className="flex flex-col items-center max-w-6xl mx-auto py-20 px-4" // Added padding for visibility
//     >
//       <p className="text-lg font-semibold uppercase tracking-wider mb-4">
//         T H I N G S<span className="p-2"></span> T O{" "}
//         <span className="p-2"></span> D O
//       </p>
//       <h2 className="text-3xl font-bold my-5">Nearby Places</h2>
//       <p className="text-center px-4 md:px-10 mb-10">
//       There are numerous experiences awaiting you at Darban Resort, offering a blend of relaxation and adventure. 
//       From scenic natural beauty to thrilling activities, Darban Resort provides a perfect escape. 
//       Explore these popular options to immerse yourself in the serene surroundings and enjoy unforgettable moments. 
//       Whether you're seeking tranquility or excitement, Darban Resort has something for everyone
//       </p>

//       <div className="flex flex-col md:flex-row gap-5 md:gap-10">
//         <div className="md:w-1/3 w-full wow animate__fadeInUp">
//           <Place
//             image="/places/shivneri.jpg"
//             name="Shivneri Fort"
//             desc="This ancient fort is located near Junnar and is known for being the birthplace of the great Maratha ruler, Chhatrapati Shivaji."
//           />
//           <Place
//             image="/places/harishchandragad.jpg"
//             name="Harishchandragad Fort"
//             desc="This fort is located in the Ahmednagar district and is known for its scenic views and challenging trekking trails."
//           />
//           <Place
//             image="/places/boating.jpg"
//             name="Boating"
//             desc="Boating & Camping are popular lakeside activities during the monsoon and winter seasons when sufficient water is available in the reservoir."
//           />
//         </div>
//         <div className="md:w-1/3 w-full wow animate__fadeInUp">
//           <Place
//             image="/places/Lenyadri.jpg"
//             name="Ozar and Lenyadri Caves"
//             desc="These ancient rock-cut caves are located near Junnar and are known for their intricate carvings and historical significance."
//           />
//           <Place
//             image="/places/bhandardara.jpg"
//             name="Bhandardara"
//             desc="This picturesque hill station is located near Ahmednagar and is known for its scenic beauty, waterfalls, and camping opportunities."
//           />
//           <Place
//             image="/places/kalsubai.jpg"
//             name="Kalsubai Peak"
//             desc="This is the highest peak in Maharashtra, located near Bhandardara, and is a popular destination for trekking and adventure enthusiasts."
//           />
//         </div>
//         <div className="md:w-1/3 w-full wow animate__fadeInUp">
//           <Place
//             image="/places/ozar.jpg"
//             name="Junnar Caves"
//             desc="These rock-cut caves are located near Junnar and are known for their intricate carvings and historical significance."
//           />
//           <Place
//             image="/places/bhimashankar.webp"
//             name="Bhimashankar Wildlife Sanctuary"
//             desc="This sanctuary is home to a variety of wildlife species, including the Indian giant squirrel and the barking deer, and is known for its beautiful waterfalls."
//           />
//           <Place
//             image="/places/flamingo-pink.jpeg"
//             name="Flamingo"
//             desc="To see in Malshej Ghat is that of a huge flock of pink flamingos comfortably settling into their southern home."
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThingsToDo;






import Place from "@/components/Place";
import React, {useEffect} from "react";
import "animate.css";

const ThingsToDo = () => {

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
    <div
      id="things-to-do"
      className="flex flex-col items-center max-w-full mx-auto py-20 px-4 bg-gradient-to-t from-purple-800 to-green-600 shadow-2xl rounded-lg"
    >
      <p
        className=" font-lifeSugar wow animate__fadeInUpBig text-5xl font-semibold uppercase tracking-wider mb-4 text-gray-100 text-center"
        data-wow-duration="3s"
        data-aos="fade-down"
      >
        T H I N G S<span className="p-2"></span> T O{" "}
        <span className="p-2"></span> D O
      </p>
      <h2
        className="font-learningCurve wow animate__fadeInDownBig text-6xl font-extrabold my-5 text-blue-800 drop-shadow-lg text-center"
        data-wow-duration="3s"
        data-aos="fade-up"
      >
        Nearby Places
      </h2>
      <p
  className="mx-auto text-lg md:text-2xl font-lifeSugar wow animate__backInLeft px-4 md:px-10 lg:px-20 xl:px-44 mb-10 text-gray-100 leading-relaxed text-justify flex items-center justify-center"
  data-wow-duration="2s"
  data-aos="zoom-in"
>
  There are numerous experiences awaiting you at Darban Resort, offering a
  blend of relaxation and adventure. From scenic natural beauty to
  thrilling activities, Darban Resort provides a perfect escape. Explore
  these popular options to immerse yourself in the serene surroundings and
  enjoy unforgettable moments. Whether you're seeking tranquility or
  excitement, Darban Resort has something for everyone.
</p>


      <div className=" flex flex-col md:flex-row gap-5 md:gap-10 w-full" >
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s">
          <Place
            image="/darbanimages/diveagar.jpg"
            name="Diveagar Beach"
            desc=" serene beach town along the Konkan coast, known for its pristine beaches and lush green surroundings, offering a peaceful retreat away from the hustle and bustle."
          />
        </div>
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s" >
          <Place
            image="/darbanimages/murud_janjira.webp"
            name="Murud Janjira Fort"
            desc="An impressive sea fort located off the coast of Murud, renowned for its historical significance and strategic location, surrounded by the Arabian Sea."
          />
        </div>
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s">
          <Place
            image="/places/boating.jpg"
            name="Boating"
            desc="Boating & Camping are popular lakeside activities during the monsoon and winter seasons when sufficient water is available in the reservoir."
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10 w-full">
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s" >
          <Place
            image="/darbanimages/harihareshwar.jpg"
            name="Harihareshwar Fort"
            desc="A historic fort in Harihareshwar, perched on a hill with panoramic views of the surrounding landscape and coastline, blending natural beauty with historical charm.

"
          />
        </div>
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s" >
          <Place
            image="/darbanimages/uttareshwar.jpeg"
            name="Uttareshwar Temple"
            desc="An ancient temple dedicated to Lord Shiva, situated in Uttreshwar with intricate carvings and serene ambiance, making it a prominent spiritual site in the region."
          />
        </div>
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s" >
          <Place
            image="/darbanimages/phansad.jpeg"
            name="Phansad Sanctuary"
            desc="A wildlife sanctuary near Murud, known for its rich biodiversity, including various species of birds, mammals, and reptiles, and its lush forested landscapes."
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10 w-full">
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s">
          <Place
            image="/darbanimages/para_sailing.jpg"
            name="Para Sailing"
            desc="A thrilling adventure sport available along the Konkan coast, offering breathtaking aerial views of the coastline and a sense of exhilaration."
          />
        </div>
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s" >
          <Place
            image="/darbanimages/bankot_fort.jpg"
            name="Bankot Fort"
            desc="A historical fort located near the village of Bankot, offering spectacular views of the surrounding sea and countryside, and a glimpse into the region's past."
          />
        </div>
        <div className="md:w-1/3 w-full wow animate__fadeInUp" data-wow-duration="3s">
          <Place
            image="/darbanimages/peshwa_memorial.jpg"
            name="Peshwa Memorial"
            desc="A memorial dedicated to the Peshwas of the Maratha Empire, located in Pune, showcasing the architectural prowess and historical significance of the Maratha rulers."
          />
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
