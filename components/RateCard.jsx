import React from "react";

const RateCard = ({ room }) => {
  return (
    <div className="p-5 my-5 bg-gradient-to-b from-purple-100 to-green-100">
      <p className="lowercase">TAX APPLICABLE ON THE RATE CARD</p> <br />
      <p>The above Packages is Valid till {room?.validTill}</p>
      <br />
      <ul className="list-disc p-5">
        <li>
          Extra person 10 N Above : {room?.adultWeekdays} [ Monday to Thursday ]
        </li>
        <li>
          Extra person 10 N Above : {room?.adultWeekend} [ Friday, Saturday &
          Sunday]
        </li>
        <li>
          Child Rate 7 N above : {room?.child7Weekdays} [ Monday to Thursday ]
        </li>
        <li>
          Child Rate 7 N above : {room?.child7Weekend} [ Friday, Saturday &
          Sunday]
        </li>

        <li>
          Child Rate 10 N above : {room?.child10Weekdays} [ Monday to Thursday ]
        </li>
        <li>
          Child Rate 10 N above : {room?.child10Weekend} [ Friday, Saturday &
          Sunday]
        </li>
      </ul>
    </div>
  );
};

export default RateCard;
