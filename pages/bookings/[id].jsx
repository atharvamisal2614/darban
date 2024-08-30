import AdminLayout from "@/components/AdminLayout";
import { getIndianDate } from "@/helpers/dateOps";
import dbConnect from "@/middleware/mongo";
import Booking from "@/models/Booking";
import Room from "@/models/Room";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingDetails = ({ booking }) => {
  const [notes, setnotes] = useState(booking?.notes);

  const saveNotes = async () => {
    try {
      const url = `${BASE_URL}/api/bookings/${booking._id}`;
      console.log(url);
      const res = await axios.put(url, { ...booking, notes: notes });
      console.log(res.data);
      toast.success("Note Saved");
    } catch (error) {
      console.log(error);
      toast.error("Failed to save Notes");
    }
  };

  if (!booking) {
    return (
      <>
        <div className="max-w-6xl m-auto p-10">
          No Booking Found with Given Id
        </div>
      </>
    );
  }
  return (
    <>
      <AdminLayout>
        <div className="max-w-6xl m-auto p-10 space-y-2">
          <h3>Booking #{booking?._id}</h3>

          <p>
            Name: <strong>{booking?.fname}</strong>{" "}
            <strong>{booking?.lname}</strong>
          </p>
          <p>
            Email: <strong>{booking?.email}</strong>
          </p>
          <p>
            Phone: <strong>{booking?.phone}</strong>
          </p>
          <p>
            Room: <strong>{booking?.room?.title}</strong>
          </p>
          <p>
            Adults: <strong>{booking?.adults}</strong>
          </p>
          <p>
            Child 7+: <strong>{booking?.childs}</strong>
          </p>
          <p>
            Child 10+: <strong>{booking?.childTen}</strong>
          </p>

          <p>
            Booked Rooms: <strong>{booking?.reqRooms}</strong>
          </p>
          <p>
            Special Request: <strong>{booking?.specialRequest}</strong>
          </p>
          <p>
            Amount Paid: <strong>Rs. {booking?.amount}/-</strong>
          </p>
          <p>
            Check In: <strong>{getIndianDate(booking?.checkIn)}</strong>
          </p>
          <p>
            Check Out: <strong>{getIndianDate(booking?.checkOut)}</strong>
          </p>
          <p>
            Coupon Used: <strong>{booking.coupon}</strong>
          </p>

          <p>Notes:</p>
          <textarea
            className="outline-none border-2 border-gray-500 md:w-1/2 w-full p-2 rounded"
            type="text"
            value={notes}
            onChange={(e) => setnotes(e.target.value)}
          />
          <br />
          <button onClick={saveNotes} className="btn">
            Save Notes
          </button>
        </div>
      </AdminLayout>
    </>
  );
};

export default BookingDetails;

export async function getServerSideProps(context) {
  //   console.log(context);

  const id = context.params.id;

  let booking;

  try {
    await dbConnect();

    const bookingsData = await Booking.findById(id).populate({
      path: "room",
      model: Room,
    });

    console.log(bookingsData);

    booking = JSON.parse(JSON.stringify(bookingsData));
  } catch (error) {
    console.log(error);
    booking = null;
  }
  return {
    props: { booking }, // will be passed to the page component as props
  };
}
