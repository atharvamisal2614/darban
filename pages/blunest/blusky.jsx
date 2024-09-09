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

const BluSky = ({ room }) => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (!room) {
      toast.error("Unknown Error Occured");
      router.push("/");
      return;
    }
  }, [router]);

  return (
    <>
      <div className="flex md:flex-row flex-col max-w-6xl h-fit m-auto">
        <div className="md:w-2/3  p-5">
          <h2 className=" mt-5">{room?.title}</h2>
          <p className="mb-10 mt-3">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing. */}
          </p>

          <Image src={"/darbanimages/premium_deluxe_room.jpeg"} width={1000} height={1000} alt="" />

          <p className="my-10">
            The Standard Suite is the perfect accommodation for a family looking
            for a luxurious and spacious room. This suite offers a separate
            bedroom and living area, providing ample space for families to relax
            and enjoy their stay. The suite features elegant decor and
            comfortable furnishings, including a king-size bed in the bedroom, a
            sofa bed in the living area, and modern amenities such as air
            conditioning, flat-screen television, and complimentary Wi-Fi. The
            suite is designed to provide a comfortable and functional living
            space for families, and it may also feature a kitchenette or dining
            area for added convenience. With its ample space and luxurious
            amenities, the High Standard Suite is the ideal accommodation for a
            perfect family vacation.
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
            <button className="w-full text-base my-5 bg-gradient-to-r from-purple-800 to-green-600 rounded-2xl  hover:bg-gradient-to-r hover:from-green-600 hover:to-purple-800">Book Now</button>
          </Link>

          <div className="info flex gap-5">
            <div className="w-1/2 p-3 bg-gradient-to-r from-purple-100 to-green-100 flex flex-col items-center ">
              <BiBed size={50} className={"text-indigo-500"} />
              <p>1 King</p>
            </div>
            <div className="w-1/2 p-3 bg-gradient-to-r from-purple-100 to-green-100 flex flex-col items-center ">
              <BiArea size={50} className={"text-sky-600"} />
              <p>380 sq ft</p>
            </div>
          </div>

          <div className="p-5 my-5 bg-gradient-to-r from-purple-100 to-green-100">
            <p className="font-semibold text-center">
              Check in 12:30 PM <br /> Check out 11:00 AM
            </p>
          </div>
          <div className="p-5 my-5 bg-gradient-to-t from-purple-100 to-green-100">
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

export default BluSky;

export async function getServerSideProps(context) {
  var room;
  try {
    await dbConnect();
    const roomData = await Room.find({ slug: "blusky" });

    room = JSON.parse(JSON.stringify(roomData[0]));
  } catch (error) {
    console.log(error);
    room = null;
  }
  return {
    props: { room }, // will be passed to the page component as props
  };
}






// import Aminity from "@/components/Aminity";
// import dbConnect from "@/middleware/mongo";
// import Room from "@/models/Room";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useEffect } from "react";
// import { toast } from "react-toastify";

// import { AiOutlineWifi } from "react-icons/ai";
// import {
//   TbAirConditioning,
//   TbMicrowave,
//   TbDeviceLandlinePhone,
// } from "react-icons/tb";
// import { BiFridge, BiBed, BiArea, BiDish } from "react-icons/bi";
// import { BsRouter, BsFileLock, BsTv, BsWater } from "react-icons/bs";
// import {
//   MdAir,
//   MdDinnerDining,
//   MdOutlineSatellite,
//   MdOutlineSmokeFree,
// } from "react-icons/md";
// import {
//   GiTowel,
//   GiWashingMachine,
//   GiWineGlass,
//   GiCoffeePot,
// } from "react-icons/gi";
// import { FaDog, FaShower } from "react-icons/fa";

// const BluSky = ({ room }) => {
//   const router = useRouter();

//   useEffect(() => {
//     if (!router.isReady) return;
//     if (!room) {
//       toast.error("Unknown Error Occurred");
//       router.push("/");
//       return;
//     }
//   }, [router, room]);

//   if (!room) return <p>Loading...</p>;

//   return (
//     <>
//       <div className="flex md:flex-row flex-col max-w-6xl h-fit m-auto">
//         <div className="md:w-2/3 p-5">
//           <h2 className="mt-5">{room.title}</h2>
//           <p className="mb-10 mt-3">
//             {/* Lorem ipsum dolor sit amet consectetur adipisicing. */}
//           </p>

//           <Image src={"/images/room2.jpeg"} width={1000} height={700} alt="" />

//           <p className="my-10">
//             The Standard Suite is the perfect accommodation for a family looking
//             for a luxurious and spacious room. This suite offers a separate
//             bedroom and living area, providing ample space for families to relax
//             and enjoy their stay. The suite features elegant decor and
//             comfortable furnishings, including a king-size bed in the bedroom, a
//             sofa bed in the living area, and modern amenities such as air
//             conditioning, flat-screen television, and complimentary Wi-Fi. The
//             suite is designed to provide a comfortable and functional living
//             space for families, and it may also feature a kitchenette or dining
//             area for added convenience. With its ample space and luxurious
//             amenities, the High Standard Suite is the ideal accommodation for a
//             perfect family vacation.
//           </p>

//           <h3 className="mb-5">Amenities</h3>
//           <div className="flex flex-wrap justify-center">
//             <Aminity icon={<BsWater size={50} />} name={"Lakeview"} />
//             <Aminity icon={<TbAirConditioning size={50} />} name={"AC"} />
//             <Aminity icon={<AiOutlineWifi size={50} />} name={"Free Wifi"} />
//             <Aminity
//               icon={<MdOutlineSmokeFree size={50} />}
//               name={"Non-smoking room"}
//             />
//             <Aminity icon={<BiDish size={50} />} name={"Room service"} />
//             <Aminity icon={<BsTv size={50} />} name={"Flat screen TV"} />
//             <Aminity
//               icon={<GiCoffeePot size={50} />}
//               name={"Electric kettle"}
//             />
//             <Aminity icon={<BiFridge size={50} />} name={"Refrigerator"} />
//             <Aminity icon={<FaDog size={50} />} name={"Pet friendly"} />
//             <Aminity icon={<FaShower size={50} />} name={"Private bathroom"} />
//             <Aminity
//               icon={<MdDinnerDining size={50} />}
//               name={"In room Dining"}
//             />
//             <Aminity
//               icon={<BsFileLock size={50} />}
//               name={"Cupboard with locker"}
//             />
//           </div>
//         </div>

//         <div className="md:w-1/3 max-md:p-5">
//           <div className="bg-sky-50 rounded p-5 mt-10">
//             <h4>Starting From</h4>
//             <h2>Rs. {room.price}/-</h2>
//             <p>Per Night (Dinner & Breakfast included)</p>
//           </div>
//           <Link href={`/book/${room.slug}`}>
//             <button className="w-full text-base my-5">Book Now</button>
//           </Link>

//           <div className="info flex gap-5">
//             <div className="w-1/2 p-3 bg-slate-100 flex flex-col items-center ">
//               <BiBed size={50} className={"text-primary"} />
//               <p>1 King</p>
//             </div>
//             <div className="w-1/2 p-3 bg-slate-100 flex flex-col items-center ">
//               <BiArea size={50} className={"text-primary"} />
//               <p>380 sq ft</p>
//             </div>
//           </div>

//           <div className="p-5 my-5 bg-blue-50">
//             <p className="font-semibold text-center">
//               Check in 12:30 PM <br /> Check out 11:00 AM
//             </p>
//           </div>
//           <div className="p-5 my-5 bg-blue-50">
//             <p className="lowercase">TAX APPLICABLE ON THE RATE CARD</p> <br />
//             <p>The above Packages is Valid from 15 June to 14 December</p>
//             <br />
//             <ul className="list-disc p-5">
//               <li>Extra person 10 N Above : 3000 [ Monday to Thursday ]</li>
//               <li>
//                 Extra person 10 N Above : 4000 [ Friday, Saturday & Sunday]
//               </li>
//               <li>Child Rate 5 N above : 2500 [ Monday to Thursday ]</li>
//               <li>Child Rate 5 N above : 3000 [ Friday, Saturday & Sunday]</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BluSky;

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