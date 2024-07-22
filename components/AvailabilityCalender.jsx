import { getDateNoFromNumber, getIndianDate } from "@/helpers/dateOps";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import { da } from "date-fns/locale";
import { useUrlState } from "dumbhooks";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AvailabilityCalender = ({ room }) => {
  const thisMonth = new Date(Date.now()).getMonth() + 1;

  const [month, setMonth] = useUrlState("month", thisMonth);
  const [year, setYear] = useState(2024);
  const [availability, setAvailability] = useState([]);
  const [days, setDays] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [newPrice, setNewPrice] = useState(0);

  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  async function loadAvailability(newDates) {
    try {
      const url = `${BASE_URL}/api/room/availability`;
      const data = {
        dates: newDates,
        room: room._id,
      };
      const res = await axios.post(url, data);
      setAvailability(res.data.roomAvailability);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  function getAvailability(d) {
    const aval = availability.find((aval) => {
      return aval.date == d;
    });
    if (aval) {
      return aval.remainingCapacity;
    } else {
      return room.currCapacity;
    }
  }

  function getPrice(d) {
    const aval = availability.find((aval) => {
      return aval.date == d;
    });
    if (aval && aval.price) {
      return { change: true, price: aval.price };
    } else {
      const day = new Date(d).getDay();
      if (day === 5 || day === 6 || day === 0) {
        return { change: false, price: room.weekendRates };
      }
      return { change: false, price: room.price };
    }
  }

  const selectDate = (date) => {
    if (date === "empty") return;

    if (selectedDates.indexOf(date) === -1) {
      // not present
      setSelectedDates((prev) => [...prev, date]);
    } else {
      // present
      const newArr = [...selectedDates];
      const index = newArr.indexOf(date);
      if (index > -1) {
        newArr.splice(index, 1);
      }
      setSelectedDates(newArr);
    }
  };

  const updatePrices = async () => {
    if (selectedDates.length === 0) {
      return toast.error("No Dates are Selected");
    }

    // if (newPrice < 500) {
    //   return toast.error("New Price Is less than 500");
    // }
    try {
      const url = `${BASE_URL}/api/room/updatePrices`;
      const data = {
        dates: selectedDates,
        room: room._id,
        price: newPrice,
      };
      const res = await axios.post(url, data);
      toast.success("Prices Updated Sucessfully");
    } catch (error) {
      console.log(error);
    }

    // clear data
    const days = getDaysInMonth(month - 1, year);
    loadAvailability(days);
    setSelectedDates([]);
  };

  useEffect(() => {
    const days = getDaysInMonth(month - 1, year);
    // console.log();
    const firstDay = new Date(parseInt(days[0])).getDay();
    // console.log(firstDay);
    const newArr = [];
    for (let index = 0; index < firstDay; index++) {
      newArr.push("empty");
    }

    const finaldays = [...newArr, ...days];

    loadAvailability(days);

    setDays(finaldays);
  }, [month, year]);

  useEffect(() => {
    console.log(selectedDates);
  }, [selectedDates]);

  return (
    <>
      <h2 className="mt-10 p-5">Availability Calender</h2>
      <div className="flex gap-5 p-5">
        <select
          value={month}
          className="inp"
          onChange={(e) => setMonth(parseInt(e.target.value))}
        >
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>

        <select
          value={year}
          className="inp"
          onChange={(e) => setYear(parseInt(e.target.value))}
        >
          {Array.from({ length: 7 }, (_, i) => (
            <option key={i} value={2024 + i}>
              {2024 + i}
            </option>
          ))}
        </select>
      </div>
      <div className="flex p-5 ">
        <div className="flex flex-col h-[70vh] w-2/3 flex-wrap py-5">
          <div className="border p-2 h-[14.20%] text-red-500">Sunday</div>
          <div className="border p-2 h-[14.20%]">Monday</div>
          <div className="border p-2 h-[14.20%]">Tuesday</div>
          <div className="border p-2 h-[14.20%]">Wednesday</div>
          <div className="border p-2 h-[14.20%]">Thursday</div>
          <div className="border text-primary p-2 h-[14.20%]">Friday</div>
          <div className="border text-primary p-2 h-[14.20%]">Saturday</div>

          {availability &&
            days.map((day, i) => (
              <div
                onClick={() => {
                  selectDate(day);
                }}
                key={`${day} ${i}`}
                className={` ${
                  selectedDates.includes(day) ? "bg-blue-100" : ""
                } border rounded-md flex flex-col justify-between cursor-pointer  px-2 p-1 h-[14.20%]`}
              >
                <div className="flex justify-between">
                  <p className="font-semibold text-lg">
                    {getDateNoFromNumber(day)}
                  </p>
                  {day !== "empty" && (
                    <p className="text-primary">avl: {getAvailability(day)}</p>
                  )}
                </div>
                {day !== "empty" && (
                  <p
                    className={`text-right text-sm ${
                      getPrice(day).change === true
                        ? "font-bold !text-black"
                        : "font-semibold "
                    }`}
                  >
                    Rs. {getPrice(day).price}/-
                  </p>
                )}
              </div>
            ))}
        </div>
        <div className="w-1/3 p-5 pl-10">
          <h3>Update Prices</h3>
          <input
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            type="number"
            className="inp my-2 "
          />
          <br />

          <button onClick={updatePrices}>Update Price</button>
        </div>
      </div>
    </>
  );
};

export default AvailabilityCalender;
