import Image from "next/image";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
        <div data-aos="zoom-in-right" className="md:w-2/5 p-5 md:px-10">
          <p>W E L C O M E</p>
          <h2 className="my-5">Blu Water Resort, Malshej Ghat..</h2>
          <p>
          Welcome to Blu Water Resort, a luxury destination nestled in the breathtaking surroundings of Malshej Ghat. Our resort is the perfect escape from the hustle and bustle of city life, offering guests a serene and peaceful getaway surrounded by nature and a stunning lake view.
          </p>
          <br />
         
         <Link href={'/overview'}>
          <button>Expolre Resort</button>
         </Link>
        </div>

        <div data-aos="zoom-in-left" className="md:w-3/5 p-5 md:px-10">
          <Image
            src={"/images/blu-hero1.jpg"}
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

export default Welcome;
