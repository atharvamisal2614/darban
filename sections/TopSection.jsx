import React from "react";

const TopSection = ({title, subtitle}) => {
  return (
    <>
      <div className="bg-[url('/images/blu-bg.webp')] h-[70vh] bg-fixed w-full flex justify-center items-center  bg-center bg-cover">
        <div className=" text-center">
          <h1 className="text-white">{title}</h1>
          
          <p className="text-white">{subtitle}</p>

        </div>
      </div>
    </>
  );
};

export default TopSection;
