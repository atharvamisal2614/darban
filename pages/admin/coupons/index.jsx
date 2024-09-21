import AdminLayout from "@/components/AdminLayout";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Coupons = () => {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(10);
  const [coupons, setCoupons] = useState([]);

  const getCoupons = async () => {
    try {
      const url = `${BASE_URL}/api/coupon`;
      const res = await axios.get(url);
      setCoupons(res.data.coupons);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch coupons");
    }
  };

  const addCoupon = async () => {
    try {
      const url = `${BASE_URL}/api/coupon`;
      const data = {
        code,
        discount,
      };
      await axios.post(url, data);
      void getCoupons();
    } catch (error) {
      console.log(error);
      toast.error("Failed to add coupon");
    }
  };

  const deleteCoupon = async (couponCode) => {
    try {
      const url = `${BASE_URL}/api/coupon/${couponCode}`;
      await axios.delete(url);
      void getCoupons();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete coupon");
    }
  };

  useEffect(() => {
    void getCoupons();
  }, []);

  return (
    <>
      <AdminLayout>
        <div className="p-5">
          <div className="border-2 p-5">
            <h3>Add Coupon</h3>
            <div className="flex gap-5 pt-6">
              <input
                type="text"
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                }}
                value={code}
                placeholder="Coupon Code"
                className="inp"
              />
              <input
                type="number"
                onChange={(e) => {
                  setDiscount(parseInt(e.target.value));
                }}
                value={discount}
                placeholder="Discount %"
                className="inp"
              />
              <button
                onClick={() => {
                  void addCoupon();
                }}
                disabled={code.length < 3}
                className="disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Add Coupon
              </button>
            </div>
          </div>

          <div className="">
            <h2 className="my-5">All Coupons</h2>
            <div className="flex max-w-3xl justify-between bg-primary p-2">
              <p className="text-white">Coupon Code</p>
              <p className="text-white">Discount</p>
              <p className="text-white">Action</p>
            </div>

            {coupons.map((coupon) => (
              <div
                key={coupon._id}
                className="flex max-w-3xl justify-between p-2"
              >
                <p className="">{coupon.code}</p>
                <p className="">{coupon.discount}%</p>
                <p
                  onClick={() => {
                    void deleteCoupon(coupon.code);
                  }}
                  className="cursor-pointer text-red-500"
                >
                  Delete
                </p>
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Coupons;


// import AdminLayout from "@/components/AdminLayout";
// import { BASE_URL } from "@/utils/config";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const Coupons = () => {
//   const [code, setCode] = useState("");
//   const [discount, setDiscount] = useState(0); // Default discount is 0
//   const [amount, setAmount] = useState(10000); // Example amount
//   const [coupons, setCoupons] = useState([]);
//   const [discountedAmount, setDiscountedAmount] = useState(amount); // Updated amount after discount

//   const getCoupons = async () => {
//     try {
//       const url = `${BASE_URL}/api/coupon`;
//       const res = await axios.get(url);
//       setCoupons(res.data.coupons);
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to fetch coupons");
//     }
//   };

//   const applyCoupon = async () => {
//     try {
//       const url = `${BASE_URL}/api/coupon/${code}`;
//       const res = await axios.get(url);
      
//       if (res.status === 200 && res.data.validDay) {
//         const discountValue = (res.data.discountApplied / 100) * amount;
//         const newAmount = amount - discountValue;

//         setDiscount(res.data.discountApplied);
//         setDiscountedAmount(newAmount);
//         toast.success(`Coupon applied: ${res.data.discountApplied}% discount`);
//       } else {
//         toast.error("Coupon not valid today");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to apply coupon");
//     }
//   };

//   useEffect(() => {
//     void getCoupons();
//   }, []);

//   return (
//     <>
//       <AdminLayout>
//         <div className="p-5">
//           <div className="border-2 p-5">
//             <h3>Add Coupon</h3>
//             <div className="flex gap-5 pt-6">
//               <input
//                 type="text"
//                 onChange={(e) => {
//                   setCode(e.target.value.toUpperCase());
//                 }}
//                 value={code}
//                 placeholder="Coupon Code"
//                 className="inp"
//               />
//               <button
//                 onClick={() => {
//                   void applyCoupon();
//                 }}
//                 disabled={code.length < 3}
//                 className="disabled:bg-gray-600 disabled:cursor-not-allowed"
//               >
//                 Apply Coupon
//               </button>
//             </div>

//             <div className="mt-5">
//               <p>
//                 Original Amount: <strong>Rs. {amount} /-</strong>
//               </p>
//               <p>
//                 Discount Applied: <strong>{discount}%</strong>
//               </p>
//               <p>
//                 Final Amount: <strong>Rs. {discountedAmount} /-</strong>
//               </p>
//             </div>
//           </div>
//         </div>
//       </AdminLayout>
//     </>
//   );
// };

// export default Coupons;
