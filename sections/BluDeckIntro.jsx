import Image from "next/image";
import Link from "next/link";
import React from "react";

const BluDeckIntro = ({ explore }) => {
  return (
    <div className="flex md:flex-row flex-col max-w-6xl m-auto py-20">
      <div data-aos="zoom-in-right" className="md:w-1/3 p-5 ">
        <Image
          src={"/images/rest3.jpeg"}
          className={`h-full object-cover relative -z-10`}
          width={700}
          height={500}
          alt={""}
        />
      </div>

      <div data-aos="zoom-in" className="md:w-1/3 p-5 text-center">
        <p>R E S T A U R A N T</p>
        <h2 className="my-5">Blu Deck</h2>
        <p>
          Blu Deck is a restaurant located at the resort, offering guests a
          unique dining experience in a stunning setting. The restaurant is
          situated on a deck overlooking the lake, providing guests with a
          breathtaking view while they dine.
        </p>
        <br />
        {explore && (
          <Link href={"/bludeck"}>
            <button>Explore</button>
          </Link>
        )}
      </div>

      <div data-aos="zoom-in-left" className="md:w-1/3 p-5 ">
        <Image
          src={"/images/rest1.jpeg"}
          className={`h-full object-cover relative -z-10`}
          width={700}
          height={500}
          alt={""}
        />
      </div>
    </div>
  );
};

export default BluDeckIntro;
