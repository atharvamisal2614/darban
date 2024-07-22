import Service from "@/components/Service";
import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import {
  TbAirConditioning,
  TbMicrowave,
  TbDeviceLandlinePhone,
} from "react-icons/tb";
import { BiFridge, BiFirstAid, BiShower } from "react-icons/bi";
import { BsPhoneLandscape, BsFileLock, BsTv } from "react-icons/bs";
import {
  MdAir,
  MdOutlineCoffeeMaker,
  MdOutlineSatellite,
  MdSportsCricket,
} from "react-icons/md";
import {
  GiTowel,
  GiWashingMachine,
  GiWineGlass,
  GiGrass,
} from "react-icons/gi";

import { FaSwimmingPool } from "react-icons/fa";

const CoreServices = () => {
  return (
    <>
      <div
        id="aminities"
        className="flex max-w-6xl m-auto flex-wrap justify-center p-5"
      >
        <Service icon={<AiOutlineWifi size={50} />} name={"WIFI"} />
        <Service icon={<TbAirConditioning size={50} />} name={"AC"} />
        <Service icon={<BiFridge size={50} />} name={"Fridge"} />
        <Service icon={<TbDeviceLandlinePhone size={50} />} name={"Intercom"} />
        <Service icon={<BiFirstAid size={50} />} name={"First Aid Kit"} />
        <Service icon={<BsTv size={50} />} name={"Smart TV"} />
        <Service icon={<MdAir size={50} />} name={"Hairdryer"} />
        <Service
          icon={<MdOutlineCoffeeMaker size={50} />}
          name={"Tea & Coffee Maker"}
        />
        <Service icon={<BiShower size={50} />} name={"Executive Bathrooms"} />
        <Service
          icon={<GiTowel size={50} />}
          name={"Lavish Interiors with executive Linen"}
        />
        <Service icon={<GiWashingMachine size={50} />} name={"Dishwasher"} />

        <Service
          icon={<GiWineGlass size={50} />}
          name={"Royal Cuttlery & Executive dishes"}
        />

        <Service icon={<GiGrass size={50} />} name={"Lush Green Lawn."} />
        <Service
          icon={<FaSwimmingPool size={50} />}
          name={"Infinity view Swimming Pool"}
        />
        <Service
          icon={<MdSportsCricket size={50} />}
          name={"Children play area."}
        />
        <Service icon={<BsPhoneLandscape size={50} />} name={"Selfi Deck."} />
      </div>
    </>
  );
};

export default CoreServices;
