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
  const [bid, setBid] = useState("");
  const [name, setName] = useState("");
  const [bookingsList, setBookingsList] = useState(bookings);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const today = new Date(Date.now()).toISOString();
  console.log(today);

  const deleteBookingByBid = async (bid) => {
    // const pass = prompt("Enter Password to delete booking");

    // if (pass !== "blu@2023#sevenstar") {
    //   toast.error("Incorrect Password");
    //   return;
    // }

    try {
      const url = `${BASE_URL}/api/bookings/${bid}`;
      await axios.delete(url);

      setIsPasswordModalOpen(false);
      //   getBookingsByName();
      toast.success("Block Removed Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Failed To delete the Bookings");
    }
  };

  //   const getBookingsByName = async (e) => {
  //     e?.preventDefault();
  //     try {
  //       const url = `${BASE_URL}/api/bookings`;
  //       const res = await axios.get(url, {
  //         params: {
  //           name: name,
  //         },
  //       });
  //       console.log(res.data);
  //       setBookingsList(res.data.bookings);
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Failed To fetch the Bookings");
  //     }
  //   };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePasswordMgmt = () => {
    if (isPasswordModalOpen !== null) {
      deleteBookingByBid(isPasswordModalOpen);
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
                <Link href={"/admin/block/bluwater"}>
                  <button className="h-fit">Blu Water</button>
                </Link>
                <Link href={"/admin/block/blugarden"}>
                  <button className="h-fit">Blu Garden</button>
                </Link>
                <Link href={"/admin/block/blusky"}>
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
                          onClick={() => setIsPasswordModalOpen(booking?._id)}
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
            onSubmit={handlePasswordMgmt}
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
