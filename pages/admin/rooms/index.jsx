import { BASE_URL } from "@/utils/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import AdminLayout from "@/components/AdminLayout";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    try {
      const url = `${BASE_URL}/api/room`;

      const res = await axios.get(url);
      setRooms(res.data.rooms);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Unknown Error Occured");
      }
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <AdminLayout>
        <div className="max-w-6xl m-auto p-10 text-center">
          <h2 className="mb-10">Our Rooms</h2>
          <div className="flex justify-center gap-5">
            {rooms.map((room) => (
              <div
                key={room._id}
                className="border p-5 my-5 rounded flex  w-1/4 gap-10 justify-between"
              >
                <div className="text-left">
                  <Link href={`/admin/rooms/${room.slug}`}>
                    <h4>{room.title}</h4>
                    <p>Price: {room.price}</p>
                    <p>Weekend Rates: {room.weekendRates}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Rooms;
