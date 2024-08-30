import Aminity from "@/components/Aminity";
import dbConnect from "@/middleware/mongo";
import Room from "@/models/Room";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import { AiOutlineWifi } from "react-icons/ai";
import {
  TbAirConditioning,
  TbMicrowave,
  TbDeviceLandlinePhone,
} from "react-icons/tb";
import { BiFridge, BiBed, BiArea, BiDish } from "react-icons/bi";
import { BsFileLock, BsTv, BsWater } from "react-icons/bs";
import {
  MdAir,
  MdDinnerDining,
  MdOutlineSatellite,
  MdOutlineSmokeFree,
} from "react-icons/md";
import {
  GiTowel,
  GiWashingMachine,
  GiWineGlass,
  GiCoffeePot,
} from "react-icons/gi";
import { FaDog, FaShower } from "react-icons/fa";
import RateCard from "@/components/RateCard";


const BluWater = ({ room }) => {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    console.log(room);
    if (!room) {
      toast.error("Unknown Error Occured");
      router.push("/");
      return;
    }
  }, [router]);
    return (
    <>
      <div className="flex max-md:flex-col max-w-6xl h-fit m-auto">
        <div className="md:w-2/3  p-5">
          <h2 className=" mt-5">{room?.title}</h2>
          <p className="mb-10 mt-3">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing. */}
          </p>

          <Image src={"/images/room1.jpeg"} width={1000} height={700} alt="" />

          <p className="my-10">
            Come stay in the comfort room for a real “home away from home”
            atmosphere. The most spacious room has all modern amenities
            including a sofa cum bed. The room is furnished with a king size bed
            that can accommodate a couple and a child. It comes with a
            landscaped lake view that enlightens the entire view of the cottage.
            You can ask for extra mattress if needed.
          </p>

          <h3 className="mb-5">Aminities</h3>
          <div className="flex flex-wrap justify-center">
            <Aminity icon={<BsWater size={50} />} name={"Lakeview"} />
            <Aminity icon={<TbAirConditioning size={50} />} name={"AC"} />
            <Aminity icon={<AiOutlineWifi size={50} />} name={"Free Wifi"} />
            <Aminity
              icon={<MdOutlineSmokeFree size={50} />}
              name={"Non-smoking room"}
            />
            <Aminity icon={<BiDish size={50} />} name={"Room service"} />
            <Aminity icon={<BsTv size={50} />} name={"Flat screen TV"} />
            <Aminity
              icon={<GiCoffeePot size={50} />}
              name={"Electric kettle"}
            />
            <Aminity icon={<BiFridge size={50} />} name={"Refrigerator"} />
            <Aminity icon={<FaDog size={50} />} name={"Pet friendly"} />
            <Aminity icon={<FaShower size={50} />} name={"Private bathroom"} />
            <Aminity
              icon={<MdDinnerDining size={50} />}
              name={"In room Dinning"}
            />
            <Aminity
              icon={<BsFileLock size={50} />}
              name={"Cupboard with locker"}
            />
          </div>
        </div>

        <div className="md:w-1/3 max-md:p-5">
          {/* <div className="sticky top-0 h-fit bg-red-50 "> */}

          <div className="bg-sky-50 rounded p-5 mt-10">
            <h4>Starting From</h4>
            <h2>Rs. {room?.price}/-</h2>
            <p>Per Night (Dinner & Breakfast included)</p>
          </div>
          <Link href={`/book/${room?.slug}`}>
            <button className="w-full text-base my-5">Book Now</button>
          </Link>

          <div className="info flex gap-5">
            <div className="w-1/2 p-3 bg-slate-100  flex flex-col items-center ">
              <BiBed size={50} className={"text-primary"} />
              <p>1 King</p>
            </div>
            <div className="w-1/2 p-3 bg-slate-100  flex flex-col items-center ">
              <BiArea size={50} className={"text-primary"} />
              <p>313 sq ft</p>
            </div>
          </div>

          <div className="p-5 my-5  bg-blue-50">
            <p className="font-semibold text-center">
              Check in 12:30 PM <br /> Check out 11:00 AM
            </p>
          </div>
          <RateCard room={room} />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default BluWater;

// export async function getServerSideProps(context) {
//   var room;
//   try {
//     await dbConnect();
//     const roomData = await Room.find({ slug: "bluwater" });

//     room = JSON.parse(JSON.stringify(roomData[0]));
//   } catch (error) {
//     console.log(error);
//     room = null;
//   }
//   return {
//     props: { room }, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps(context) {
    let room;
    try {
        await dbConnect();
        console.log("Connecting to MongoDB...");
        const roomData = await Room.find({ slug: "bluwater" });
        console.log("Room Data:", roomData);

        if (roomData.length > 0) {
            room = JSON.parse(JSON.stringify(roomData[0]));
        } else {
            room = null;
        }
    } catch (error) {
        console.log("Error fetching room data:", error);
        room = null;
    }

    return {
        props: { room },
    };
}




