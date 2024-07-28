import AdminLayout from "@/components/AdminLayout";
import AvailabilityCalender from "@/components/AvailabilityCalender";
import CheckAvailability from "@/components/CheckAvailability";
import GuestDetails from "@/components/GuestDetails";
import PlainAvalCalender from "@/components/PlainAvalCalender";
import { getDatesInRange } from "@/helpers/dateOps";
import dbConnect from "@/middleware/mongo";
import Room from "@/models/Room";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { toast } from "react-toastify";

const Booking = ({ room }) => {
  // get dates and number of rooms
  // check Availability.
  // if available get details
  // show booking details
  // send to checkout
  // If Successufull send them a link

  const [page, setPage] = useState(0);
  const [reqRooms, setReqRooms] = useState(1);
  const [nights, setNights] = useState(0);
  const [guest, setGuest] = useState({});
  const [roomAvailability, setRoomAvailability] = useState([]);

  const router = useRouter();

  const tomorrow = () => {
    var result = new Date();
    result.setDate(result.getDate() + 2);
    return result;
  };

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: tomorrow(),
      key: "selection",
    },
  ]);

  const checkAvailability = async () => {
    try {
      const url = `${BASE_URL}/api/room/updated-checkavailability`;
      const dates = getDatesInRange(
        state[0].startDate.toString(),
        state[0].endDate.toString()
      );
      const data = {
        checkIn: state[0].startDate.toString(),
        checkOut: state[0].endDate.toString(),
        reqRooms: reqRooms,
        room: room,
        dates: dates,
      };
      const res = await axios.post(url, data);
     if (res.status === 200) {
       await checkout();
     } else if (res.status === 404) {
       toast.error("Rooms are not available for the selected dates.");
     } else {
       toast.error("Unexpected response from server.");
     }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Unknown Error Occured");
      }
    }
  };

  const checkout = async () => {
    try {
      const dates = getDatesInRange(
        state[0].startDate.toString(),
        state[0].endDate.toString()
      );
      const url = `${BASE_URL}/api/admin-booking`;
      const data = {
        roomId: room._id,
        checkIn: state[0].startDate.toString(),
        checkOut: state[0].endDate.toString(),
        reqRooms: reqRooms,
        fname: "block",
        lname: "block",
        email: "block",
        phone: "block",
        specialRequest: "block",
        adults: 2,
        child: 0,
        childTen: 0,
        dates,
      };

      const order = await axios.post(url, data);
      console.log(order);
      toast.success("Room Blocked Successfully");
    } catch (error) {
      console.log("error", error);
      toast.error("Unknown Error Occured");
    }
  };

  // To find total nights
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    setNights(diffDays);
    return diffDays;
  }

  useEffect(() => {
    if (state[0].endDate) {
      dayDifference(state[0].startDate, state[0].endDate);
    }
  }, [state]);

  useEffect(() => {
    if (!router.isReady) return;
    if (!room) {
      toast.error("Unknown Error Occured");
      router.push("/");
      return;
    }
  }, [router]);

  return (
    <>
      <AdminLayout>
        <h3 className="p-5">{room.title} - Block Rooms</h3>
        <div className="flex md:flex-row flex-col gap-10 my-14 ">
          <div className="md:w-1/2 flex border">
            <DateRange
              className="m-auto"
              editableDateInputs={true}
              minDate={new Date()}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>

          <div className="md:w-1/2">
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
              Block
            </button>
          </div>
        </div>

        <PlainAvalCalender room={room} />
      </AdminLayout>
    </>
  );
};

export default Booking;

export async function getServerSideProps(context) {
  const id = context.query.id;

  var room;
  try {
    await dbConnect();
    const roomData = await Room.findOne({ slug: id });
    room = JSON.parse(JSON.stringify(roomData));
  } catch (error) {
    console.log(error);
    room = null;
  }
  return {
    props: { room }, // will be passed to the page component as props
  };
}
