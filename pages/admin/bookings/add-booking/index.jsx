import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";
import React from "react";

const AddBooking = () => {
  return (
    <>
    <AdminLayout>

    
      <div className="max-w-6xl m-auto p-10 text-center">
        <h2 className="mb-10">Select Room Type</h2>

        <Link href="/admin/bookings/add-booking/bluwater">
          <p className="w-40 border-2 border-gray-500 rounded my-4 text-xl p-2 mx-auto">
            Blu Water
          </p>
        </Link>
        <Link href="/admin/bookings/add-booking/blusky">
          <p className="w-40 border-2 border-gray-500 rounded my-4 text-xl p-2 mx-auto">
            Blu Sky
          </p>
        </Link>
        <Link href="/admin/bookings/add-booking/blugarden">
          <p className="w-40 border-2 border-gray-500 rounded my-4 text-xl p-2 mx-auto">
            Blu Garden
          </p>
        </Link>
      </div>
      
      </AdminLayout>
    </>
  );
};

export default AddBooking;
