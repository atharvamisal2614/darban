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

  const [coupon, setCoupon] = useState("");

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
        setRoomAvailability(res.data.roomAvailability);
        setPage(1);
        return true;
      } else if (res.status === 404) {
        toast.error("Rooms are not available for the selected dates.");
        setRoomAvailability([]);
        return false;
      } else {
        toast.error("Unexpected response from server.");
        setRoomAvailability([]);
        return false;
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Unknown Error Occurred");
      }
      return false; // Error occurred
    }
  };

  const checkout = async () => {
    try {
      const isAvailable = await checkAvailability();

      if (!isAvailable) {
        return; // Exit if rooms are not available
      }

      const url = `${BASE_URL}/api/admin-booking`;
      const dates = getDatesInRange(
        state[0].startDate.toString(),
        state[0].endDate.toString()
      );
      const data = {
        roomId: room._id,
        checkIn: state[0].startDate.toString(),
        checkOut: state[0].endDate.toString(),
        reqRooms: reqRooms,
        fname: guest.fname,
        lname: guest.lname,
        email: guest.email,
        phone: guest.phone,
        specialRequest: guest.specialRequest,
        adults: guest.adults,
        child: guest.child,
        childTen: guest.childTen,
        coupon,
        dates,
      };

      const order = await axios.post(url, data);
      toast.success("Booking Successfull User will receive email shortly");

      try {
        await axios.post("/api/send-email", {
          ...data,
          _id: order.data.booking._id,
        });
        console.log("Email sent successfully.");
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        toast.error("Booking successful, but failed to send email.");
      }

      setTimeout(() => {
        router.push(`/admin/bookings/${order.data.booking._id}`);
      }, 1000);
    } catch (error) {
      console.log(error);
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
        {page == 0 && (
          <CheckAvailability
            room={room}
            setState={setState}
            state={state}
            setReqRooms={setReqRooms}
            reqRooms={reqRooms}
            nights={nights}
            checkAvailability={checkAvailability}
          />
        )}
        {page == 1 && (
          <GuestDetails
            room={room}
            state={state}
            nights={nights}
            reqRooms={reqRooms}
            setPage={setPage}
            setGuest={setGuest}
            checkout={checkout}
            roomAvailability={roomAvailability}
            coupon={coupon}
            setCoupon={setCoupon}
          />
        )}
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
