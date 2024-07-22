import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const path = useRouter().asPath;

  if (path.startsWith("/admin")) return;
  return (
    <>
      <footer className=" mt-20  ">
        <div className="flex md:flex-row flex-col max-md:p-5 max-md:gap-5 max-w-6xl justify-around m-auto border-y-2 py-10">
          <div className="bluresort">
            <h6 className="mb-1">BLU Water Resort</h6>
            <Link href={"/"}>
              <p className=" hover:text-primary">Overview</p>
            </Link>
            <Link href={"https://goo.gl/maps/mDEtg4Q1CfCR1T7T6"}>
              <p className=" hover:text-primary">Location</p>
            </Link>
            <Link href={"https://goo.gl/maps/mDEtg4Q1CfCR1T7T6"}>
              <p className=" hover:text-primary">Getting Here</p>
            </Link>
            <Link href={"/#things-to-do"}>
              <p className=" hover:text-primary">Local Attractions</p>
            </Link>
          </div>
          <div className="accommodation">
            <h6 className="mb-1">Accommodation</h6>
            <Link href={"/blunest/bluwater"}>
              <p className="hover:text-primary">Blu Water</p>
            </Link>
            <Link href={"/blunest/blugarden"}>
              <p className="hover:text-primary">Blu Garden</p>
            </Link>
            <Link href={"/blunest/blusky"}>
              <p className="hover:text-primary">Blu Sky</p>
            </Link>
          </div>
          <div className="amenities">
            <Link href={"/#aminities"}>
              <h6 className="mb-1">Amenities</h6>
            </Link>
            <Link href={"/coming-soon"}>
              <h6 className="mb-1">Offers & Packages</h6>
            </Link>
            <Link href={"/gallery"}>
              <h6 className="mb-1">Photo Gallery</h6>
            </Link>
            <Link href={"/event-weddings"}>
              <h6 className="mb-1">Events & Weddings</h6>
            </Link>
            <Link href={"/travel-assistance"}>
              <h6 className="mb-1">Travel Assistance</h6>
            </Link>
            <Link href={"/groupbooking"}>
              <h6 className="mb-1">Group Booking</h6>
            </Link>
          </div>
          <div className="abt-malshej">
            <Link href={"/malshej"}>
              <h6 className="mb-1">About Malshej</h6>
            </Link>
            <Link href={"/careers"}>
              <h6 className="mb-1">Career</h6>
            </Link>
            <Link href={"/coming-soon"}>
              <h6 className="mb-1">FAQs</h6>
            </Link>
            <Link href={"/#testimonials"}>
              <h6 className="mb-1">Testimonials</h6>
            </Link>
            <Link href={"/terms-conditions"}>
              <h6 className="mb-1">Terms and Conditions</h6>
            </Link>
            <Link href={"/reservation-cancellation"}>
              <h6 className="mb-1">Reservation And Cancellation</h6>
            </Link>
            <Link href={"/privacy-policy"}>
              <h6 className="mb-1">Privacy Policy</h6>
            </Link>
            <Link
              href={
                "https://maps.google.com?q=Blu%20Water%20Resort%20Malshej,%20Malshej,%20Maharashtra%20412409&ftid=0x3bdd6da5982ce415:0x38a8f7a4b2c86c75&hl=en-IN&gl=in&coh=181295&entry=gps&lucs=,47069507,47071704&g_st=ic"
              }
            >
              <h6 className="mb-1">Site Map</h6>
            </Link>
          </div>
          <div className="contact">
            <h6>Contact Us</h6>

            <p>
              Blu Water Resort Malshej <br /> A Unit By Blu Bird Hospitality,{" "}
              <br /> At/Post Karanjale Tal:Junnar, <br />
              Dist: Pune 412409
            </p>

            <p>
              {" "}
              <strong>Phone No: </strong>{" "}
              <a href="tel:9090104545">+91 90901 04545</a>{" "}
            </p>
            <p>
              {" "}
              <strong>Email: </strong>{" "}
              <a href="mailto:reservations@bluwaterresort.in">
                reservations@bluwaterresort.in
              </a>{" "}
            </p>
            <div className="p-1"></div>
            <a href="https://instagram.com/blu.water.resort.malshej?igshid=YmMyMTA2M2Y=">
              <BsInstagram size={25} />
            </a>
          </div>
        </div>

        <p className="p-5 text-center">
          © Copyright 2023 Blu Water Resort, Malshej. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
