// import Navbar from "@/components/Navbar";
// import "@/styles/globals.css";
// import axios from "axios";
// import Head from "next/head";
// import { ToastContainer } from "react-toastify";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "react-toastify/dist/ReactToastify.css";
// import NextNProgress from "nextjs-progressbar";
// import { useEffect, useState } from "react";
// import Footer from "@/sections/Footer";
// import Image from "next/image";
// import Chatbot from "@/components/Chatbot";

// // import EvModal from "@/components/EvModal";
// import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();

//   const [isEVModalOpen, setIsEVModalOpen] = useState(false);

//   axios.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         config.headers["Authorization"] = "Bearer " + token;
//       }
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );

//   useEffect(() => {
//     AOS.init({
//       duration: 500,
//     });
//   }, []);

//   useEffect(() => {
//     const currentPath = router.pathname;
//     // Check local storage to see if the modal has been shown before
//     const hasSeenEVModal = sessionStorage.getItem("hasSeenEVModal");
//     if (!hasSeenEVModal && currentPath === "/") {
//       setIsEVModalOpen(true);
//       sessionStorage.setItem("hasSeenEVModal", "true");
//     }
//   }, [router]);

//   const handleModalVisibility = () => {
//     setIsEVModalOpen(false);
//   };

//   return (
//     <>
//       <Head>
//         <title>Blu Water Resort</title>
//         <meta
//           name="description"
//           content="Blu Water Resort - Resort in Malshej"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/blu-logo.png" />
//       </Head>
//       <NextNProgress />

//       <Navbar />
//       <ToastContainer />
//       <Component {...pageProps} />
//       <Chatbot />
//       <div className="fixed hover:cursor-pointer bottom-5 right-5">
//         {/* <a href="https://wa.me/919090104545">
//           <Image
//             src={"/whatsapp.png"}
//             className={"  "}
//             width={50}
//             height={50}
//             alt={"Whatsapp"}
//             priority
//           />
//         </a> */}
//       </div>
//       <Footer />
//       {/* <EvModal isOpen={isEVModalOpen} onChange={handleModalVisibility} /> */}
//     </>
//   );
// }










import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Footer from "@/sections/Footer";
import Chatbot from "@/components/Chatbot";
import { useRouter } from "next/router";
import LoadingAtom from "@/components/LoadingAtom";
import Image from "next/image";
import "animate.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      const wow = new WOW.WOW({
        live: false,
        resetAnimation: true,
      });
      wow.init();
    }
  }, []);

  

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

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

      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <LoadingAtom type="spin" color="#32cd32" />
        </div>
      ) : (
        <>
          <Navbar />
          <ToastContainer />
          <Component {...pageProps} />
          <Chatbot />
          <div className="fixed hover:cursor-pointer bottom-5 right-5">
            <a href="https://wa.me/917741811112">
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
        </>
      )}
    </>
  );
}
