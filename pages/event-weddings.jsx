import Event from "@/components/Event";
import Place from "@/components/Place";
import TopSection from "@/sections/TopSection";
import React from "react";

const EventWed = () => {
  return (
    <>
      {/* <TopSection
        title={"Event and Weddings"}
        subtitle={
          "Make your celebration a lifetime happiest memory! Blu Resorts offers a wide range of luxurious destination wedding packages at affordable prices!"
        }
      /> */}

      <h2 className="pt-10 text-center">Event and Weddings</h2>
      <p className="max-w-3xl pb-10 py-5 m-auto text-center">
        Make your celebration a lifetime happiest memory! Blu Water Resorts offers a
        wide range of luxurious destination wedding packages at affordable
        prices!
      </p>

      <div className="flex mt-10 flex-col md:flex-row max-w-6xl m-auto">
        <div className="md:w-1/3 w-full">
          <Event image={"/events/pre-wedding.jpg"} name={"Pre Wedding Shoot"} />
          <Event
            image={"/events/dest-wedding.jpg"}
            name={"Destination Wedding"}
          />
          <Event
            image={"/events/familyvacation.jpg"}
            name={"Family Vacation"}
          />
        </div>
        <div className="md:w-1/3 w-full">
          <Event image={"/events/get-together.jpg"} name={"Get Together"} />
          <Event image={"/events/group-tour.jpg"} name={"Group Tour"} />
          <Event image={"/events/yoga.jpg"} name={"Yoga, Painting, Arts"} />
        </div>
        <div className="md:w-1/3 w-full">
          <Event image={"/events/corporate1.jpg"} name={"Corporate Meetings"} />
          <Event image={"/events/bloggers.jpg"} name={"Bloggers, Authors"} />
        </div>
      </div>
    </>
  );
};

export default EventWed;
