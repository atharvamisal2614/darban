import AdminLayout from "@/components/AdminLayout";
import PasswordModal from "@/components/PasswordModal";
import { getIndianDate } from "@/helpers/dateOps";
import dbConnect from "@/middleware/mongo";
import Booking from "@/models/Booking";
import Room from "@/models/Room";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Bookings = ({ bookings }) => {
  const [bookingsList, setBookingsList] = useState(bookings);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date(Date.now()).toISOString();

  const deleteBookingByBid = async (bid) => {
    setIsLoading(true);
    try {
      const url = `${BASE_URL}/api/bookings/${bid}`;
      const response = await axios.delete(url);

      if (response.status === 200) {
        toast.success("Booking Deleted Successfully");
        setIsPasswordModalOpen(null);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(`Failed to delete the booking: ${response.statusText}`);
      }
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        toast.error(
          `Failed to delete the booking: ${error.response.data.message}`
        );
      } else if (error.request) {
        // Request made but no response received
        console.log(error.request);
        toast.error("No response received from the server");
      } else {
        // Something happened in setting up the request
        console.log("Error", error.message);
        toast.error("An error occurred while deleting the booking");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePasswordMgmt = async () => {
    if (isPasswordModalOpen !== null) {
      setIsLoading(true);
      await deleteBookingByBid(isPasswordModalOpen);
    } else {
      toast.error("Something went wrong");
    }
  };

  if (isClient)
    return (
      <>
        <AdminLayout>
          <div className=" m-auto p-10 ">
            <div className="flex justify-between items-center">
              <h3 className="py-5">Blocked Dates</h3>
              <div className="flex gap-3">
                <Link href={"/block/bluwater"}>
                  <button className="h-fit">Blu Water</button>
                </Link>
                <Link href={"/block/blugarden"}>
                  <button className="h-fit">Blu Garden</button>
                </Link>
                <Link href={"/block/blusky"}>
                  <button className="h-fit">Blu Sky</button>
                </Link>
              </div>
            </div>

            <div className="bookings ">
              <table className="table-auto w-full">
                <thead className="bg-blue-50 p-5 text-left rounded">
                  <tr>
                    <th className="p-3">From</th>
                    <th className="p-3">To</th>
                    <th className="p-3">Booked Rooms</th>
                    <th className="p-3">Room Type</th>
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
                          {getIndianDate(booking?.checkIn)}
                        </td>
                        <td className="p-3">
                          {getIndianDate(booking?.checkOut)}
                        </td>

                        <td className="p-3">{booking?.reqRooms}</td>
                        <td className="p-3">{booking?.room.title}</td>

                        <td
                          onClick={() =>
                            booking?._id && setIsPasswordModalOpen(booking?._id)
                          }
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
          <PasswordModal
            isLoading={isLoading}
            onSubmit={() => handlePasswordMgmt()}
            handleClick={() => setIsPasswordModalOpen(null)}
            isOpen={isPasswordModalOpen}
          />
        </AdminLayout>
      </>
    );
};

export default Bookings;

export async function getServerSideProps(context) {
  var bookings;
  try {
        await dbConnect();
        const bookingsData = await Booking.find({ fname: "block" })
          .populate({
            path: "room",
            model: Room,
          })
          .sort({ _id: -1 })
          .limit(300);

        // console.log(
        //   "blocked rooms",
        //   JSON.stringify(bookingsData),
        //   bookingsData.length
        // );

        bookings = JSON.parse(JSON.stringify(bookingsData));
      } catch (error) {
    console.log(error);
    bookings = null;
  }
  return {
    props: { bookings },
  };
}
