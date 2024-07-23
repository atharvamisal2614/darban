import React from "react";
import Image from "next/image";
import evStationImg from "../public/images/ev-charging-station.png";
import crossIcon from "../public/images/cross_icon.png";

const EvModal = ({ isOpen, onChange }) => {
  if (!isOpen) return null; // Close modal if isOpen is false

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onChange();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div
        data-aos="zoom-in-right"
        className="relative bg-sky-50 rounded-3xl shadow-lg max-w-lg mx-4 sm:mx-8 md:mx-auto p-4 sm:p-8 border-4 border-transparent"
      >
        <div className="absolute top-3 right-3">
          <Image
            className="cursor-pointer"
            onClick={onChange}
            width={24}
            height={24}
            alt="Close"
            src={crossIcon}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-sm mb-4">
            <Image
              className="rounded-lg m-auto object-center"
              width={300}
              height={250}
              src={evStationImg}
              alt="EV Charging Station"
            />
          </div>
          <div className="text-center pb-4 ">
            <p className="text-lg font-semibold text-green-600">
              <span>⚡</span>
              EV Charging Station Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvModal;
