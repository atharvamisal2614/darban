import BluDeckIntro from "@/sections/BluDeckIntro";
import TopSection from "@/sections/TopSection";
import Image from "next/image";
import React from "react";

const BluDeck = () => {
  return (
    <>

      <div className="bg-[url('/images/ext-rest.jpeg')] h-[70vh] bg-fixed w-full flex justify-center items-center  bg-center bg-cover">
        <div className=" text-center">
          <h1 className="text-white">Blu Deck</h1>
          
          <p className="text-white">Restaurant</p>

        </div>
      </div>

      <BluDeckIntro />

      <div className="flex md:flex-row flex-col max-w-6xl m-auto ">
        <div  className="md:w-1/3 p-5 text-center flex">
          <p className="my-auto ">
            The decor of the restaurant is modern and elegant, with comfortable
            seating and a sophisticated ambiance. The open-air design of the
            restaurant allows guests to enjoy the cool breeze while they savor
            their meal, creating a truly unique and memorable dining experience.
          </p>
        </div>
        <div data-aos="zoom-in-right" className="md:w-1/3 p-5 ">
          <Image
            src={"/images/rest-food.jpeg"}
            className={`h-full object-cover relative -z-10`}
            width={700}
            height={500}
            alt={""}
          />
        </div>

        <div data-aos="zoom-in" className="md:w-1/3 p-5 text-center h-full">
          <p className="m-auto">
            The menu at Blu Deck is carefully curated to offer guests a wide
            range of dishes that cater to different palates. The restaurant
            specializes in a variety of cuisines, including Indian, Chinese, and
            continental, with an emphasis on fresh, local ingredients. The chefs
            at Blu Deck take great pride in creating innovative and flavorful
            dishes that showcase the best of each cuisine, and guests can be
            assured of a delightful dining experience.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col max-w-6xl m-auto py-10 ">
       
        <div data-aos="zoom-in" className="md:w-1/3 p-5 ">
          <Image
            src={"/images/rest-ext.jpeg"}
            className={`h-full object-cover relative -z-10`}
            width={700}
            height={500}
            alt={""}
          />
        </div>
        <div data-aos="zoom-in" className="md:w-1/3 p-5 ">
          <Image
            src={"/images/rest2.jpeg"}
            className={`h-full object-cover relative -z-10`}
            width={700}
            height={500}
            alt={""}
          />
        </div>
        <div data-aos="zoom-in" className="md:w-1/3 p-5 ">
          <Image
            src={"/images/rest-food1.jpeg"}
            className={`h-full object-cover relative -z-10`}
            width={700}
            height={500}
            alt={""}
          />
        </div>


      </div>
    </>
  );
};

export default BluDeck;
