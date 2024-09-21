import React from "react";
import { DateRange } from "react-date-range";
import { BiArea, BiBed } from "react-icons/bi";

const CheckAvailability = ({
  room,
  state,
  setState,
  setReqRooms,
  reqRooms,
  nights,
  checkAvailability,
}) => {
  return (
    <>
      <div className="max-w-6xl  m-auto p-5">
        <h2>Check Availability</h2>

        <div className="flex md:flex-row flex-col gap-10 my-14 ">
          <div className="md:w-1/3">
            <h3 className="p-5">{room?.title}</h3>
            <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded p-5 ">
              <h3>Rs. {room?.price}/-</h3>
              <p>Per Night</p>
            </div>
            {/* <div className="info flex gap-5 my-5">
              <div className="w-1/2 p-3 bg-slate-100  flex flex-col items-center ">
                <BiBed size={50} className={"text-primary"} />
                <p>1 King</p>
              </div>
              <div className="w-1/2 p-3 bg-slate-100  flex flex-col items-center ">
                <BiArea size={50} className={"text-primary"} />
                <p>313 sq ft</p>
              </div>
            </div> */}
            <div className="p-5 my-5 bg-gradient-to-r from-purple-100 to-green-100">
              <p className="font-semibold text-center">
                Check in 12:30 PM <br /> Check out 11:00 AM
              </p>
            </div>
          </div>
          <div className="md:w-1/3 flex border">
            <DateRange
              className="m-auto"
              editableDateInputs={true}
              minDate={new Date()}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </div>

          <div className="md:w-1/3">
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
                className="disabled:bg-slate-300 disabled:cursor-not-allowed  bg-gray-200 text-black font-bold text-sm"
                disabled={reqRooms <= 1}
                onClick={() => {
                  setReqRooms(reqRooms - 1);
                }}
              >
                -
              </button>
              <p className="border px-5">{reqRooms}</p>
              <button
                className="disabled:bg-slate-300 disabled:cursor-not-allowed bg-gray-200 text-black font-bold text-sm"
                disabled={reqRooms >= room?.currCapacity}
                onClick={() => {
                  setReqRooms(reqRooms + 1);
                }}
              >
                +
              </button>
            </div>

            <button onClick={checkAvailability} className="my-5 w-full bg-gradient-to-r from-purple-800 to-green-600 text-sm">
              {" "}
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckAvailability;





// import React, { useState, useEffect } from "react";
// import { DateRange } from "react-date-range";
// import { BiArea, BiBed } from "react-icons/bi";
// import moment from "moment"; // For handling dates

// const CheckAvailability = ({
//   room,
//   state,
//   setState,
//   setReqRooms,
//   reqRooms,
//   nights,
//   checkAvailability,
//   applyCoupon,
// }) => {
//   const [isWeekendSelected, setIsWeekendSelected] = useState(false);

//   // Helper function to check if any selected day is a weekend
//   const isWeekendInRange = (startDate, endDate) => {
//     const start = moment(startDate);
//     const end = moment(endDate);
//     let currentDate = start.clone();

//     while (currentDate.isSameOrBefore(end)) {
//       const dayOfWeek = currentDate.day(); // 0: Sunday, 6: Saturday
//       if (dayOfWeek === 0 || dayOfWeek === 6) {
//         return true; // A weekend is found
//       }
//       currentDate.add(1, 'day'); // Move to the next day
//     }
//     return false; // No weekends found
//   };

//   // Check if the selected range includes a weekend whenever the dates change
//   useEffect(() => {
//     const { startDate, endDate } = state[0];
//     const hasWeekend = isWeekendInRange(startDate, endDate);
//     setIsWeekendSelected(hasWeekend);
//   }, [state]);

//   return (
//     <>
//       <div className="max-w-6xl  m-auto p-5">
//         <h2>Check Availability</h2>

//         <div className="flex md:flex-row flex-col gap-10 my-14 ">
//           <div className="md:w-1/3">
//             <h3 className="p-5">{room?.title}</h3>
//             <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded p-5 ">
//               <h3>Rs. {room?.price}/-</h3>
//               <p>Per Night</p>
//             </div>

//             <div className="p-5 my-5 bg-gradient-to-r from-purple-100 to-green-100">
//               <p className="font-semibold text-center">
//                 Check in 12:30 PM <br /> Check out 11:00 AM
//               </p>
//             </div>
//           </div>
//           <div className="md:w-1/3 flex border">
//             <DateRange
//               className="m-auto"
//               editableDateInputs={true}
//               minDate={new Date()}
//               onChange={(item) => setState([item.selection])}
//               moveRangeOnFirstSelection={false}
//               ranges={state}
//             />
//           </div>

//           <div className="md:w-1/3">
//             <p>
//               <span className="font-semibold"> Check In: </span>{" "}
//               {state[0].startDate.getDate()}-{state[0].startDate.getMonth() + 1}-
//               {state[0].startDate.getFullYear()}
//             </p>
//             <p>
//               <span className="font-semibold"> Check Out: </span>{" "}
//               {state[0].endDate.getDate()}-{state[0].endDate.getMonth() + 1}-
//               {state[0].endDate.getFullYear()}
//             </p>

//             <br />

//             <p>
//               <span className="font-semibold">Total Nights: </span> {nights}
//             </p>

//             <br />
//             <h4>Number Of Rooms Required</h4>
//             <div className="flex gap-2 mt-5">
//               <button
//                 className="disabled:bg-slate-300 disabled:cursor-not-allowed  bg-gray-200 text-black font-bold text-sm"
//                 disabled={reqRooms <= 1}
//                 onClick={() => {
//                   setReqRooms(reqRooms - 1);
//                 }}
//               >
//                 -
//               </button>
//               <p className="border px-5">{reqRooms}</p>
//               <button
//                 className="disabled:bg-slate-300 disabled:cursor-not-allowed bg-gray-200 text-black font-bold text-sm"
//                 disabled={reqRooms >= room?.currCapacity}
//                 onClick={() => {
//                   setReqRooms(reqRooms + 1);
//                 }}
//               >
//                 +
//               </button>
//             </div>

//             <button
//               onClick={checkAvailability}
//               className="my-5 w-full bg-gradient-to-r from-purple-800 to-green-600 text-sm"
//             >
//               Check Availability
//             </button>

//             {/* Apply Coupon button, disabled if weekends are selected */}
//             <button
//               onClick={applyCoupon}
//               disabled={isWeekendSelected} // Disable button if weekends are selected
//               className={`my-5 w-full ${
//                 isWeekendSelected
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-purple-800 to-green-600"
//               } text-sm`}
//             >
//               {isWeekendSelected ? "Coupon Not Available on Weekends" : "Apply Coupon"}
//             </button>

//             {/* Show a message if weekends are selected */}
//             {isWeekendSelected && (
//               <p className="text-red-500 mt-3">
//                 Coupons cannot be applied as the selected dates include weekends.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckAvailability;
