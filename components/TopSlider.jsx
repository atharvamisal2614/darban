import React from "react";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

const TopSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('/images/ext-night2.jpeg')] h-[70vh] bg-fixed w-full flex justify-center items-center  bg-center bg-cover">
            {/* <div className=" text-center">
              <h1 className="text-white">Blu Water Resort</h1>

              <p className="text-white">Malshej Ghat</p>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('/images/blu-bg.webp')] h-[70vh] bg-fixed w-full flex justify-center items-center  bg-center bg-cover">
            {/* <div className=" text-center">
              <h1 className="text-white">Blu Water Resort</h1>

              <p className="text-white">Malshej Ghat</p>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('/images/ext-night.jpeg')] h-[70vh] bg-fixed w-full flex justify-center items-center  bg-center bg-cover">
            {/* <div className=" text-center">
              <h1 className="text-white">Blu Water Resort</h1>

              <p className="text-white">Malshej Ghat</p>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopSlider;
