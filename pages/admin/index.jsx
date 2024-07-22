import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <>
    <AdminLayout>

    
      <div className="">
        <h2 className="text-center my-10">Admin Panel</h2>

        <Link href={"/admin/bookings"}>
          <p className="px-5 py-1 w-52 border text-center m-auto rounded border-black">
            Bookings
          </p>
        </Link>

        <Link href={"/admin/rooms"}>
          <p className="px-5 py-1 my-5 w-52 border text-center m-auto rounded border-black">
            Rooms
          </p>
        </Link>
      </div>
      </AdminLayout>
    </>
  );
};

export default Admin;
