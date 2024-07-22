import AdminLayout from "@/components/AdminLayout";
import { getIndianDate } from "@/helpers/dateOps";
import dbConnect from "@/middleware/mongo";
import Booking from "@/models/Booking";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Bookings = ({ bookings }) => {
  const [bid, setBid] = useState("");
  const [name, setName] = useState("");
  const [bookingsList, setBookingsList] = useState(bookings);

  const [isClient, setIsClient] = useState(false);

  const today = new Date(Date.now()).toISOString();
  console.log(today);

  const deleteBookingByBid = async (bid) => {
    const pass = prompt("Enter Password to delete booking");

    if (pass !== "blu@2023#sevenstar") {
      toast.error("Incorrect Password");
      return;
    }

    try {
      const url = `${BASE_URL}/api/bookings/${bid}`;
      await axios.delete(url);

      getBookingsByName();
      toast.success("Booking Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed To delete the Bookings");
    }
  };

  const getBookingsByBid = async (e) => {
    e.preventDefault();
    if (bid == "") return;
    try {
      const url = `${BASE_URL}/api/bookings`;
      const res = await axios.get(url, {
        params: {
          bid: bid,
        },
      });
      setBookingsList(res.data.bookings);
    } catch (error) {
      console.log(error);
      toast.error("Failed To fetch the Bookings");
    }
  };

  const getBookingsByName = async (e) => {
    e?.preventDefault();
    try {
      const url = `${BASE_URL}/api/bookings`;
      const res = await axios.get(url, {
        params: {
          name: name,
        },
      });
      console.log(res.data);
      setBookingsList(res.data.bookings);
    } catch (error) {
      console.log(error);
      toast.error("Failed To fetch the Bookings");
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <>
        <AdminLayout>
          <div className=" m-auto p-10 ">
            <div className="flex justify-between items-center">
              <h3 className="py-5">Latest Bookings</h3>
              <Link href={"/admin/bookings/add-booking"}>
                <button className="h-fit">Add New Booking</button>
              </Link>
            </div>
            <div className="flex gap-5 justify-center my-5">
              <div className="w-1/2">
                <form onSubmit={(e) => getBookingsByBid(e)}>
                  <input
                    type="text"
                    className="outline-none border-2 p-1 px-2 w-3/4 rounded mx-2"
                    placeholder="Booking Id"
                    value={bid}
                    onChange={(e) => setBid(e.target.value)}
                  />
                  <button className="bg-primary" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="w-1/2">
                <form onSubmit={(e) => getBookingsByName(e)}>
                  <input
                    type="text"
                    className="outline-none border-2 p-1 px-2 w-3/4 rounded mx-2"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button className="bg-primary" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="bookings ">
              <table className="table-auto w-full">
                <thead className="bg-blue-50 p-5 rounded">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Name</th>
                    {/* <th className="p-3">Email</th> */}
                    <th className="p-3">Phone</th>
                    <th className="p-3">Booked Rooms</th>
                    <th className="p-3">Paid Amount</th>
                    <th className="p-3">Check In</th>
                    <th className="p-3">Check Out</th>
                    <th className="p-3">Details</th>
                    <th className="p-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingsList &&
                    bookingsList.map((booking) => (
                      <tr
                        className={`${
                          booking?.createdAt.slice(0, 10) == today.slice(0, 10)
                            ? "bg-blue-200"
                            : ""
                        }`}
                        key={booking?._id}
                      >
                        <td className="p-3">
                          {booking?.createdAt.slice(0, 10)}
                        </td>
                        <td className="p-3">
                          {booking?.fname} {booking?.lname}
                        </td>
                        {/* <td className="p-3">{booking?.email}</td> */}
                        <td className="p-3">{booking?.phone}</td>
                        <td className="p-3">{booking?.reqRooms}</td>
                        <td className="p-3">{booking?.amount}</td>
                        <td className="p-3">
                          {getIndianDate(booking?.checkIn)}
                        </td>
                        <td className="p-3">
                          {getIndianDate(booking?.checkOut)}
                        </td>
                        <Link href={`/admin/bookings/${booking?._id}`}>
                          <td className="p-3 font-semibold text-primary cursor-pointer">
                            DETAILS
                          </td>
                        </Link>
                        <td
                          onClick={() => deleteBookingByBid(booking?._id)}
                          className="p-3 text-red-400 cursor-pointer font-semibold"
                        >
                          Delete
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </AdminLayout>
      </>
    );
};

export default Bookings;

export async function getServerSideProps(context) {
  var bookings;
  try {
    await dbConnect();
    const bookingsData = await Booking.find({
      paid: true,
      fname: { $ne: "block" },
    })
      .sort({ _id: -1 })
      .limit(100);

    console.log(bookingsData);

    bookings = JSON.parse(JSON.stringify(bookingsData));
  } catch (error) {
    console.log(error);
    bookings = null;
  }
  return {
    props: { bookings },
  };
}
