import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
        <div data-aos="zoom-in-right" className="md:w-2/5 p-5 md:px-10">
          <p>
            B E S T <span className="p-2"></span> Q U A L I T Y
          </p>
          <h2 className="my-5">Satisfaction & Quality in Everything</h2>
          <p>
          At Blu Water Resort, our primary goal is to provide our guests with an exceptional experience that is focused on quality. We believe that quality should be the foundation of everything we do, from the amenities we offer to the services we provide. 

          </p>
          <br />
          {/* <button>Check Services</button> */}
        </div>

        <div data-aos="zoom-in-left" className="md:w-3/5 p-5 md:px-10">
        <Image
            src={"/images/ext5.jpeg"}
            className={`h-full object-cover relative -z-10`}
            width={700}
            height={500}
            alt={""}
          />
        </div>

      </div>
    </>
  );
};

export default Services;
