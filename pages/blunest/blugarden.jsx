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
  MdBatteryChargingFull,
  MdEvStation,
} from "react-icons/md";
import {
  GiDiamondRing,
  GiPalmTree,
  GiFairyWand,
  GiBabyfootPlayers
} from "react-icons/gi";
import { FaCar,  FaSwimmingPool, FaConciergeBell,FaUtensils } from "react-icons/fa";


const BluGarden = ({ room }) => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (!room) {
      toast.error("Unknown Error Occured");
      router.push("/");
      return;
    }
  }, [router]);

  if (!room) <></>;

  return (
    <>
      <div className="flex max-md:flex-col max-w-6xl h-fit m-auto">
        <div className="md:w-2/3  p-5">
          <h2 className=" mt-5">{room?.title}</h2>
          <p className="mb-10 mt-3">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing. */}
          </p>

          <Image src={"/darbanimages/exe_deluxe_room.jpeg"} width={1000} height={700} alt="" />

          <p className="my-10">
            The Executive Deluxe Room is the perfect accommodation for a romantic weekend
            getaway. It offers a spacious and luxurious setting with elegant
            decor and comfortable furnishings, including a plush king-size bed,
            cozy seating area, and modern amenities such as air conditioning,
            flat-screen television, and complimentary Wi-Fi. The room is
            beautifully designed with romantic touches, such as soft lighting,
            and may also feature a private balcony or terrace with stunning
            views of the surroundings. The Deluxe Room provides a tranquil
            retreat for couples to relax and spend quality time together in a
            romantic and intimate setting.
          </p>

          <h3 className="mb-5">Aminities</h3>
          <div className="flex flex-wrap justify-center">
          <Aminity icon={<GiFairyWand size={50} className={"text-rose-500"} />} name={"Kids Wonderland"} />
            <Aminity icon={<MdBatteryChargingFull size={50} className={"text-yellow-400"} />} name={"Power Backup"} />
            <Aminity icon={<AiOutlineWifi size={50} className={"text-blue-500"} />} name={"Free Wifi"} />
            <Aminity
              icon={<GiDiamondRing size={50} className={"text-pink-500"} />}
              name={"Marriage Lawns"}
            />
            <Aminity icon={<FaCar size={50} className={"text-gray-700"} />} name={"Safe Parking"} />
            <Aminity icon={<FaSwimmingPool size={50} className={"text-teal-400"} />} name={"Swimming Pool"} />
            <Aminity
              icon={<MdEvStation size={50} className={"text-green-500"} />}
              name={"EV Charging"}
            />
            <Aminity icon={<FaConciergeBell size={50} className={"text-amber-500"} />} name={"Personalized Hospitality"} />
            <Aminity icon={<GiPalmTree size={50} className={"text-cyan-600"} />} name={"Coastal Retreat"} />
            
            <Aminity
              icon={<FaUtensils size={50} className={"text-orange-600"} />}
              name={"Restaurant"}
            />
          </div>
        </div>

        <div className="md:w-1/3 max-md:p-5">
          {/* <div className="sticky top-0 h-fit bg-red-50 "> */}

          <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-2xl p-5 mt-10">
            <h4>Starting From</h4>
            <h2>Rs. {room?.price}/-</h2>
            <p>Per Night (Dinner & Breakfast included)</p>
          </div>
          <Link href={`/book/${room?.slug}`}>
            <button className="w-full text-base my-5 bg-gradient-to-r from-purple-800 to-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-purple-800">Book Now</button>
          </Link>

          <div className="info flex gap-5">
            <div className="w-1/2 p-3 bg-gradient-to-r from-purple-100 to-green-100 flex flex-col items-center ">
              <BiBed size={50} className={"text-indigo-500"} />
              <p>1 King</p>
            </div>
            <div className="w-1/2 p-3 bg-gradient-to-r from-purple-100 to-green-100 flex flex-col items-center ">
              <BiArea size={50} className={"text-sky-600"} />
              <p>325 sq ft</p>
            </div>
          </div>

          <div className="p-5 my-5 bg-gradient-to-r from-purple-100 to-green-100">
            <p className="font-semibold text-center">
              Check in 12:30 PM <br /> Check out 11:00 AM
            </p>
          </div>
          <div className="p-5 my-5  bg-gradient-to-t from-purple-100 to-green-100">
            <p className="lowercase">TAX APPLICABLE ON THE RATE CARD</p> <br />
            <p>The above Packages is Valid from 15 June to 14 December</p>
            <br />
            <ul className="list-disc p-5">
              <li>Extra person 10 N Above : 3000 [ Monday to Thursday ]</li>
              <li>
                Extra person 10 N Above : 4000 [ Friday, Saturday & Sunday]
              </li>
              <li>Child Rate 5 N above : 2500 [ Monday to Thursday ]</li>
              <li>Child Rate 5 N above : 3000 [ Friday, Saturday & Sunday]</li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default BluGarden;

export async function getServerSideProps(context) {
  var room;
  try {
    await dbConnect();
    const roomData = await Room.find({ slug: "blugarden" });
    console.log(roomData);
    room = JSON.parse(JSON.stringify(roomData[0]));
  } catch (error) {
    console.log(error);
    room = null;
  }
  return {
    props: { room }, // will be passed to the page component as props
  };
}






