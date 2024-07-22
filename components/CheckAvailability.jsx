import React from "react";
import { DateRange } from "react-date-range";
import { BiArea, BiBed } from "react-icons/bi";

const CheckAvailability = ({
  room,
  state,
  setState,
  setReqRooms,
  reqRooms,
  nights,
  checkAvailability,
}) => {
  return (
    <>
      <div className="max-w-6xl  m-auto p-5">
        <h2>Check Availability</h2>

        <div className="flex md:flex-row flex-col gap-10 my-14 ">
          <div className="md:w-1/3">
            <h3 className="p-5">{room?.title}</h3>
            <div className="bg-sky-50 rounded p-5 ">
              <h3>Rs. {room?.price}/-</h3>
              <p>Per Night</p>
            </div>
            {/* <div className="info flex gap-5 my-5">
              <div className="w-1/2 p-3 bg-slate-100  flex flex-col items-center ">
                <BiBed size={50} className={"text-primary"} />
                <p>1 King</p>
              </div>
              <div className="w-1/2 p-3 bg-slate-100  flex flex-col items-center ">
                <BiArea size={50} className={"text-primary"} />
                <p>313 sq ft</p>
              </div>
            </div> */}
            <div className="p-5 my-5  bg-blue-50">
              <p className="font-semibold text-center">
                Check in 12:30 PM <br /> Check out 11:00 AM
              </p>
            </div>
          </div>
          <div className="md:w-1/3 flex border">
            <DateRange
              className="m-auto"
              editableDateInputs={true}
              minDate={new Date()}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>

          <div className="md:w-1/3">
            <p>
              {" "}
              <span className="font-semibold"> Check In: </span>{" "}
              {state[0].startDate.getDate()}-{state[0].startDate.getMonth() + 1}
              -{state[0].startDate.getFullYear()}
            </p>
            <p>
              {" "}
              <span className="font-semibold"> Check Out: </span>{" "}
              {state[0].endDate.getDate()}-{state[0].endDate.getMonth() + 1}-
              {state[0].endDate.getFullYear()}
            </p>

            <br />

            <p>
              {" "}
              <span className="font-semibold">Total Nights: </span> {nights}
            </p>

            <br />
            <h4>Number Of Rooms Required</h4>
            <div className="flex gap-2 mt-5">
              <button
                className="disabled:bg-slate-300 disabled:cursor-not-allowed"
                disabled={reqRooms <= 1}
                onClick={() => {
                  setReqRooms(reqRooms - 1);
                }}
              >
                -
              </button>
              <p className="border px-5">{reqRooms}</p>
              <button
                className="disabled:bg-slate-300 disabled:cursor-not-allowed"
                disabled={reqRooms >= room?.currCapacity}
                onClick={() => {
                  setReqRooms(reqRooms + 1);
                }}
              >
                +
              </button>
            </div>

            <button onClick={checkAvailability} className="my-5 w-full">
              {" "}
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckAvailability;
