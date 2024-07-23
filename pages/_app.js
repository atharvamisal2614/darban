import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import axios from "axios";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import Footer from "@/sections/Footer";
import Image from "next/image";
import Chatbot from "@/components/Chatbot";
import EvModal from "@/components/EvModal";

export default function App({ Component, pageProps }) {
  const [isEVModalOpen, setIsEVModalOpen] = useState(false);

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    // Check local storage to see if the modal has been shown before
    const hasSeenEVModal = sessionStorage.getItem("hasSeenEVModal");
    if (!hasSeenEVModal) {
      setIsEVModalOpen(true);
      sessionStorage.setItem("hasSeenEVModal", "true");
    }
  }, []);

  const handleModalVisibility = () => {
    setIsEVModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Blu Water Resort</title>
        <meta
          name="description"
          content="Blu Water Resort - Resort in Malshej"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/blu-logo.png" />
      </Head>
      <NextNProgress />
      <Navbar />
      <ToastContainer />
      <Component {...pageProps} />
      <Chatbot />
      <div className="fixed hover:cursor-pointer bottom-5 right-5">
        <a href="https://wa.me/919090104545">
          <Image
            src={"/whatsapp.png"}
            className={"  "}
            width={50}
            height={50}
            alt={"Whatsapp"}
            priority
          />
        </a>
      </div>
      <Footer />
      <EvModal isOpen={isEVModalOpen} onChange={handleModalVisibility} />
    </>
  );
}
