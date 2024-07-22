import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const path = useRouter().asPath;

  if (path.startsWith("/admin")) return;

  return (
    <>
      <div className="p-5 relative bg-sky-50">
        <div className="flex justify-center">
          <div className="px-5 max-md:hidden flex-1">
            <div className="flex flex-col text-right justify-center gap-3 h-full">
              <div className="flex justify-end gap-5">
                <Link href={"/malshej"}>
                  <p className="hover:text-primary">
                    Experience the best Resort in Malshej Ghat
                  </p>
                </Link>
                {/* <p>OUR OTHER RESORTS</p> */}
                {/* <p>ABOUT MALSHEJ</p> */}
              </div>

              <div className="flex gap-5 justify-end">
                <Link href={"/careers"}>
                  <p className="hover:text-primary">Careers</p>
                </Link>
                <Link href={"/event-weddings"}>
                  <p className="hover:text-primary">Event & Weddings</p>
                </Link>
              </div>
            </div>
          </div>
          <Image
            src={"/blu-logo.png"}
            className={"w-20 object-contain mx-10 "}
            width={200}
            height={200}
            alt={"blu logo"}
            priority
          />

          <div className="px-5 max-md:hidden flex-1 ">
            <div className="flex flex-col h-full justify-center gap-3">
              {/* <p>EXPERIENCE THE BEST RESORT IN Malshej Ghat</p> */}
              <div className="flex gap-5">
                <Link href={"/offers"}>
                  <p className="hover:text-primary">Offers and Packages</p>
                </Link>
                <Link href={"/malshej"}>
                  <p className="hover:text-primary">About Malshej</p>
                </Link>
                <Link href={"/#aminities"}>
                  <p className="hover:text-primary">Amenities</p>
                </Link>
              </div>
              <div className="flex gap-5 items-center">
                <Link href={"/gallery"}>
                  <p className="hover:text-primary">Photo Gallery</p>
                </Link>
                <Link href={"/contact"}>
                  <p className="hover:text-primary">Contact Us</p>
                </Link>
                <a href="https://instagram.com/blu.water.resort.malshej?igshid=YmMyMTA2M2Y=">
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="line h-[1px] bg-gray-200 mt-5 "></div>

        <div className="flex md:hidden justify-center items-center pt-4 gap-10">
          <div onClick={() => setNavbar(!navbar)} className="">
            <div className="line w-5 h-0.5 bg-primary my-1"></div>
            <div className="line w-5 h-0.5 bg-primary my-1"></div>
            <div className="line w-5 h-0.5 bg-primary my-1"></div>
          </div>

          <Link href={"/"}>
            <button>Book Now</button>
          </Link>
        </div>

        <div
          className={`flex justify-center md:relative z-50 absolute ${
            navbar ? "translate-x-0 " : "max-md:translate-x-[100vw]"
          } transition-all bg-sky-50 mt-5 left-0 w-full duration-500 items-center md:flex-row flex-col gap-10 max-md:py-4 `}
        >
          <Link onClick={() => setNavbar(false)} href={"/"}>
            <p>Home</p>
          </Link>
          <Link onClick={() => setNavbar(false)} href={"/blunest"}>
            <p>Blu Nest</p>
          </Link>
          <Link onClick={() => setNavbar(false)} href={"/bludeck"}>
            <p>Blu Deck</p>
          </Link>
          <Link onClick={() => setNavbar(false)} href={"/bluoasis"}>
            <p>Blu Oasis</p>
          </Link>
          <a href="/BluResort.pdf" download={true}>
            <button>Download Brochure</button>
          </a>
          <Link
            onClick={() => setNavbar(false)}
            className="max-md:hidden"
            href={"/book-now"}
          >
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
