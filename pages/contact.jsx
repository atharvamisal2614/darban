import React from "react";
import {} from 'react-icons'
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col max-w-6xl  m-auto py-20 text-center">
        <h2>Contact Us</h2>

        <div className="flex max-md:flex-col max-md:p-5 justify-around py-16">
          <div className="flex flex-col items-center flex-1 ">
            <MdLocationPin className="text-primary" size={80} />
            <br />
            <h3>Address</h3>
            <p>
              Darban Resort, Hanuman Pakhadi, Diveagar.
            </p>
          </div>
          <div className="flex flex-col items-center flex-1 ">
            <MdPhone className="text-primary" size={80} />
            <br />
            <h3>Phone No</h3>
            <p>+91 77418 11112 / +91 72640 72626 </p>
          </div>
          <div className="flex flex-col items-center flex-1">
            <MdEmail className="text-primary" size={80} />
            <br />
            <h3>Email</h3>
            <p>contact@darbanresort.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
