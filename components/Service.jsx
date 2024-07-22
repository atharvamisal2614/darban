import React from "react";

const Service = ({ icon, name }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex max-md:flex-col justify-center transition-all duration-500 items-center md:w-1/4 w-1/2 md:my-8  my-5 rounded-lg md:p-5 p-2 hover:bg-sky-50 "
      >
        <div className="text-primary">{icon}</div>
        <h4 className="p-3 text-center">{name}</h4>
      </div>
    </>
  );
};

export default Service;
