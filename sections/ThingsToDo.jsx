import Place from "@/components/Place";
import Image from "next/image";
import React from "react";

const ThingsToDo = () => {
  return (
    <div
      id="things-to-do"
      className="flex items-center flex-col max-w-6xl m-auto py-20"
    >
      <p>
        T H I N G S<span className="p-2"></span> T O{" "}
        <span className="p-2"></span> D O
      </p>
      <h2 className="my-5">Places to visit near by</h2>
      <p className="text-center p-5">
        There are several places to visit near Malshej Ghat that offer unique
        experiences and attractions. Here are some popular options. these nearby
        destinations offer a mix of natural beauty, historical significance, and
        adventure opportunities for visitors to Malshej Ghat.
      </p>

      <div className="flex mt-10 flex-col md:flex-row">
        <div className="md:w-1/3 w-full">
          <Place
            image={"/places/shivneri.jpg"}
            name={"Shivneri Fort"}
            desc={
              "This ancient fort is located near Junnar and is known for being the birthplace of the great Maratha ruler, Chhatrapati Shivaji."
            }
          />
          <Place
            image={"/places/harishchandragad.jpg"}
            name={"Harishchandragad Fort"}
            desc={
              "This fort is located in the Ahmednagar district and is known for its scenic views and challenging trekking trails."
            }
          />
          <Place
            image={"/places/boating.jpg"}
            name={"Boating"}
            desc={
              "Boating & Camping are popular lakeside activities during the monsoon and winter seasons when sufficient water is available in the reservoir."
            }
          />
        </div>
        <div className="md:w-1/3 w-full">
          <Place
            image={"/places/Lenyadri.jpg"}
            name={"Ozar and Lenyadri Caves"}
            desc={
              "These ancient rock-cut caves are located near Junnar and are known for their intricate carvings and historical significance."
            }
          />
          <Place
            image={"/places/bhandardara.jpg"}
            name={"Bhandardara"}
            desc={
              "This picturesque hill station is located near Ahmednagar and is known for its scenic beauty, waterfalls, and camping opportunities."
            }
          />
          <Place
            image={"/places/kalsubai.jpg"}
            name={"Kalsubai Peak"}
            desc={
              "This is the highest peak in Maharashtra, located near Bhandardara, and is a popular destination for trekking and adventure enthusiasts."
            }
          />
        </div>
        <div className="md:w-1/3 w-full">
          <Place
            image={"/places/ozar.jpg"}
            name={"Junnar Caves"}
            desc={
              "These rock-cut caves are located near Junnar and are known for their intricate carvings and historical significance."
            }
          />
          <Place
            image={"/places/bhimashankar.webp"}
            name={"Bhimashankar Wildlife Sanctuary"}
            desc={
              "This sanctuary is home to a variety of wildlife species, including the Indian giant squirrel and the barking deer, and is known for its beautiful waterfalls."
            }
          />
          <Place
            image={"/places/flamingo-pink.jpeg"}
            name={"Flamingo"}
            desc={
              " To see in Malshej Ghat is that of a huge flock of pink flamingos comfortably settling into their southern home"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
