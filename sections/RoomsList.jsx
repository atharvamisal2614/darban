import Link from "next/link";
import React from "react";

const RoomsList = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-6xl m-auto gap-5">
        <Link data-aos="zoom-in" href={"/blunest/bluwater"} className="md:w-1/2 ">
          <div className="bg-[url('/images/room1.webp')] hover:scale-105 transition-all duration-500 md:rounded-lg relative h-80 flex flex-col  my-5 bg-center bg-cover">
            <p className="px-2 border rotate-[270deg] right-1 absolute text-right mt-7 text-white rounded w-fit">
              View
            </p>
            <div className="flex-1"></div>
            <h3 className="text-white text-center py-2 bg-black bg-opacity-30">
              Blu Water
            </h3>
          </div>
        </Link>
        <Link data-aos="zoom-in" href={"/blunest/blugarden"} className="md:w-1/2">
          <div className="bg-[url('/images/room5.jpeg')] hover:scale-105 transition-all duration-500 md:rounded-lg relative h-80 flex flex-col  my-5 bg-center bg-cover">
            <p className="px-2 border rotate-[270deg] right-1 absolute text-right mt-7 text-white rounded w-fit">
              View
            </p>
            <div className="flex-1"></div>
            <h3 className="text-white text-center py-2 bg-black bg-opacity-30">
              Blu Garden
            </h3>
          </div>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl m-auto justify-center">
        <Link data-aos="zoom-in" href={"/blunest/blusky"} className="md:w-1/2">
          <div className="bg-[url('/images/room3.webp')] hover:scale-105 transition-all duration-500 md:rounded-lg relative h-80 flex flex-col  my-5 bg-center bg-cover">
            <p className="px-2 border rotate-[270deg] right-1 absolute text-right mt-7 text-white rounded w-fit">
              View
            </p>
            <div className="flex-1"></div>
            <h3 className="text-white text-center py-2 bg-black bg-opacity-30">
              Blu Sky
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RoomsList;
