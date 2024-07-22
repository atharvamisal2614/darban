import Image from "next/image";
import Link from "next/link";
import React from "react";

const BluOasisIntro = ({ explore }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
        <div data-aos="zoom-in-right" className="md:w-2/5 p-5 md:px-10">
          <p>B L U <span className="px-2"></span> O A S I S</p>
          <h2 className="my-5">Largest Infinity Pool in Malshej</h2>
          <p>
            The view of a lake from a resort can be breathtaking, and if its
            combined with a Largest Infinity Pool in Malshej, it can be a truly
            awe-inspiring experience. Imagine being surrounded by natural beauty
            while you lounge poolside, gazing out at the serene waters of a
            tranquil lake.
          </p>
          <br />
          {explore && (
            <Link href={"/bluoasis"}>
              <button>Explore</button>
            </Link>
          )}
        </div>

        <div data-aos="zoom-in-left" className="md:w-3/5 p-5 md:px-10">
          <Image
            src={"/images/ext-swim.jpeg"}
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

export default BluOasisIntro;
