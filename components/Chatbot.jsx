import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const theme = {
  background: "#f1f9f9",
  fontFamily: "Lato",
  headerBgColor: "#16acbd",
  headerFontColor: "#ffffff",
  headerFontSize: "15px",
  botBubbleColor: "#16acbd",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const Chatbot = () => {
  const [chat, setChat] = useState(false);

  const steps = [
    {
      id: "0",
      message: "Welcome to Blu Water Resort, Malshej. How Can I Help You",
      trigger: "1",
    },
    {
      id: "1",
      options: [
        { value: 1, label: "Rooms", trigger: "2" },
        { value: 2, label: "Facilities", trigger: "3" },
        { value: 3, label: " End", trigger: "5" },
      ],
    },
    {
      id: "2",
      message:
        "Here are the list of rooms. 1.Blu Water, 2.Blu Garden, 3.Blu Sky",
      trigger: "1",
    },
    {
      id: "3",
      message:
        "We have number of Facilities like Infinity View Swimming Pool, Lush Green Lawn, Restaurent, Wifi, Smart TV, Child Play Area, etc",
      trigger: "1",
    },
    {
      id: "5",
      message: "Bye",
      end: true,
    },
  ];
  return (
    <>
      <div className={`${chat ? "" : "hidden"} fixed bottom-40 right-5 z-50`}>
        <ThemeProvider theme={theme}>
          <ChatBot headerTitle="Gargi" steps={steps} />
        </ThemeProvider>
      </div>

      <div
        onClick={() => setChat(!chat)}
        className={` fixed bg-blue-500 rounded-full bottom-20 cursor-pointer right-5`}
      >
        <div className="p-2 flex justify-center items-center rounded-full bg-heading">
          <IoChatbubbleEllipsesOutline color={"#fff"} size={30} />
        </div>
      </div>
    </>
  );
};

export default Chatbot;
