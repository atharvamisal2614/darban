import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Cookies from "universal-cookie";

const SideNav = () => {
  const router = useRouter();
  const cookies = new Cookies();

  const logout = () => {
    localStorage.removeItem("token");
    cookies.remove("authorization");
    void router.push("/auth/login");
  };

  return (
    <>
      <div className="fixed flex h-screen w-1/5 flex-col bg-sky-200 p-4">
        <div className="flex items-center gap-3 px-2 py-4">
          <h2 className="text-3xl font-bold text-black">Blu Admin Panel</h2>
        </div>

        <div className="flex flex-col gap-1 py-4">
          <Link href={"/"}>
            <h3 className="text-2xl text-black font-semibold py-1 hover:text-primary cursor-pointer">
              Home
            </h3>
          </Link>
          <br />
          <Link href={"/bookings"}>
            <h3 className="text-2xl text-black font-semibold py-1 hover:text-primary cursor-pointer">
              All Bookings
            </h3>
          </Link>
          <Link href={"/bookings/add-booking"}>
            <h3 className="text-xl text-black font-semibold hover:text-primary cursor-pointer">
              Add New Booking
            </h3>
          </Link>
          <Link href={"/bookings/add-booking/bluwater"}>
            <h3 className="text-xl text-black hover:text-primary cursor-pointer">
              Blu Water
            </h3>
          </Link>
          <Link href={"/bookings/add-booking/blugarden"}>
            <h3 className="text-xl text-black hover:text-primary cursor-pointer">
              Blu Garden
            </h3>
          </Link>
          <Link href={"/bookings/add-booking/blusky"}>
            <h3 className="text-xl text-black hover:text-primary cursor-pointer">
              Blu Sky
            </h3>
          </Link>
          <br />

          <Link href={"/rooms"}>
            <h3 className="text-2xl text-black font-semibold py-1 hover:text-primary cursor-pointer">
              Change Prices
            </h3>
          </Link>

          <Link href={"/rooms/bluwater"}>
            <h3 className="text-xl text-black hover:text-primary cursor-pointer">
              Blu Water
            </h3>
          </Link>
          <Link href={"/rooms/blugarden"}>
            <h3 className="text-xl text-black hover:text-primary cursor-pointer">
              Blu Garden
            </h3>
          </Link>
          <Link href={"/rooms/blusky"}>
            <h3 className="text-xl text-black hover:text-primary cursor-pointer">
              Blu Sky
            </h3>
          </Link>
        </div>
        <Link href={"/block"}>
          <h3 className="text-2xl text-black font-semibold py-1 hover:text-primary cursor-pointer">
            Block Rooms
          </h3>
        </Link>
        <Link href={"/coupons"}>
          <h3 className="text-2xl text-black font-semibold py-1 hover:text-primary cursor-pointer">
            Coupons
          </h3>
        </Link>
        <div className="flex-1"></div>

        {/* <div className="divider my-6 h-[1px] w-full bg-gray-500"></div> */}

        <div className="flex gap-3 py-3 text-white">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default SideNav;

const NavLink = ({ title, url }) => {
  return (
    <>
      <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-700">
        <Link href={url}>
          <p className="text-base font-medium text-black">{title}</p>
        </Link>
      </div>
    </>
  );
};
