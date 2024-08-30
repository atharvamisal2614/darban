import Image from "next/image";
import React from "react";

const AboutMalshej = () => {
  return (
    <>
      <div className="max-w-6xl m-auto">
        <h2 className="text-center py-10">Malshej Ghat</h2>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 p-5">
            <Image
              src={"/images/malshej.jpg"}
              width={7000}
              height={700}
              alt=""
              className="w-full rounded-xl border shadow-xl"
            />
          </div>

          <div className="md:w-1/2 p-5">
            <p>
              Malshej Ghat is a picturesque mountain pass located in the Western
              Ghats range in Maharashtra, India. It is situated at an altitude
              of 700 meters above sea level and is a popular tourist destination
              known for its scenic beauty and natural wonders.
            </p>
            <br />
            <p>
              The region is covered with lush green forests, rolling hills, and
              cascading waterfalls, which make it a popular destination for
              trekking and nature enthusiasts. The area is also home to a
              variety of flora and fauna, including numerous bird species,
              making it an ideal spot for birdwatchers.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">

          <div className="md:w-1/2 p-5">
            <p>
            One of the main attractions of Malshej Ghat is its waterfalls, which are in full flow during the monsoon season. The most famous waterfall in the region is the Pimpalgaon Joga Dam, which cascades down from a height of 90 meters, creating a stunning spectacle of water and mist.
            </p>
            <br />
            <p>
            Apart from its natural beauty, Malshej Ghat is also known for its historical significance. The region has been an important trade route for centuries, connecting the Arabian Sea coast to the Deccan Plateau. The area is dotted with several ancient forts, including Harishchandragad Fort and Shivneri Fort, which was the birthplace of the legendary Maratha warrior, Chhatrapati Shivaji.

            </p>

            <p>Malshej Ghat is easily accessible by road and is approximately 130 km from Mumbai and 120 km from Pune. It is a popular weekend getaway for city dwellers looking for a peaceful retreat amidst nature beauty. Overall, Malshej Ghat is a must-visit destination for anyone looking to explore the beauty and history of the Western Ghats.</p>
          </div>

          <div className="md:w-1/2 p-5">
            <Image
              src={"/images/malshej1.jpg"}
              width={7000}
              height={700}
              alt=""
              className="w-full rounded-xl border shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMalshej;
