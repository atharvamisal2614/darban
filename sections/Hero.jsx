import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20 ">
        <div className="md:w-2/5 p-5" data-aos="zoom-in-right">
          <Image
            src={"/images/ext3.jpeg"}
            className={`h-full object-cover relative -z-10`}
            width={700}
            height={500}
            alt={""}
          />
          <div className="bg-primary  p-10 md:w-fit md:-ml-10 md:-mt-28 z-50 text-white text-center">
            <h2>20+</h2>
            <p className="text-white font-semibold ">R O O M S</p>
          </div>
        </div>
        <div data-aos="zoom-in-left" className="md:w-3/5 p-5 md:px-10">
          <p>
            R E S O R T <span className="p-2"></span> H O T E L
          </p>
          <h2 className="my-5">Relax in our Wonderful Suites & Rooms</h2>
          <p>
            {" "}
            Blu Water Resort offer a range of scenic room accommodations named BLU
            NEST. The blu nest consists of 3 spacious and unique room types 1.
            Blu water 2.Blu garden 3.Blu Sky
          </p>
          <br />
          <p>
            The rooms are well-furnished and equipped with modern amenities. As
            blu resort offers 3 room categories to choose from Blu Nest,
            including standard rooms (Blu Water), deluxe rooms(Blu Garden), and
            suites(Blu Sky), each providing a different level of comfort and
            luxury. All rooms offer beautiful views of the surrounding hills and
            valleys and a wide Lakeview. Guests can enjoy their stay in a
            peaceful environment, surrounded by natural beauty and the resorts
            facilities and services.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
