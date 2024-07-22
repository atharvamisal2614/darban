import React from "react";

const TravelAssistance = () => {
  return (
    <>
      <div className="max-w-6xl m-auto my-20">
        <h3 className=" text-center">Travel Assistance</h3>

        <form
          id="guest-details"
          className="m-auto md:w-2/5 flex flex-col my-10"
        >
          <p>Name</p>
          <input type="text" className="outline-none border rounded p-1" />
          <br />

          <p>Email</p>
          <input type="email" className="outline-none border rounded p-1" />
          <br />

          <p>Phone</p>
          <input type="number" className="outline-none border rounded p-1" />
          <br />

          <p>Message</p>
          <textarea className="outline-none border rounded p-1"></textarea>

          <br />

          <button type="submit" className="px-10 py-2 bg-primary rounded-md">
            Enquire Now
          </button>
        </form>
      </div>
    </>
  );
};

export default TravelAssistance;
