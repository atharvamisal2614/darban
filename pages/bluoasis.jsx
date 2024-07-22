import BluOasisIntro from "@/sections/BluOasisIntro";
import TopSection from "@/sections/TopSection";
import Image from "next/image";
import React from "react";

const BluOsis = () => {
  return (
    <>
      <div className="bg-[url('/images/ext-water.jpeg')] h-[70vh] bg-fixed w-full flex justify-center items-center  bg-center bg-cover">
        <div className=" text-center">
          <h1 className="text-white">Blu Oasis</h1>

          <p className="text-white">Largest Infinity Pool in Malshej</p>
        </div>
      </div>

      <BluOasisIntro />

      <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
        <div data-aos="zoom-in-left" className="md:w-2/5 p-5 ">
          <Image
            src={"/images/ext-water.jpeg"}
            className={`h-full object-cover relative`}
            width={700}
            height={500}
            alt={""}
          />
        </div>
        <div data-aos="zoom-in-right" className="md:w-3/5 p-5 md:px-10">
          <p>
            At Blu Water Resort, the lake view is undoubtedly a major highlight, and
            guests can enjoy this mesmerizing view from the comfort of their own
            rooms or while relaxing by the infinity pool. The pool appears to
            merge seamlessly with the lake, creating an illusion of the water
            extending out to infinity, and guests can swim or simply relax while
            enjoying this stunning view.
          </p>
          <br />
          <p>
            As the sun sets over the lake, the view becomes even more
            spectacular, with the vibrant colors of the sunset reflected on the
            waters surface, creating a stunning natural canvas that is hard to
            forget. Guests can sit back and enjoy this breathtaking view with a
            refreshing drink in hand, or even indulge in a romantic dinner on
            the pool deck, surrounded by the serene beauty of the lake.
          </p>
          <br />
          <p>
            Overall, the view of the lake and the huge swimming pool gives a
            unforgettable oasis experience that truly captures the essence of a
            tranquil and serene getaway.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default BluOsis;
