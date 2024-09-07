import Caresoul from "@/components/Caresoul";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import TopSlider from "@/components/TopSlider";
import BluDeckIntro from "@/sections/BluDeckIntro";
import BluOasisIntro from "@/sections/BluOasisIntro";
import CoreServices from "@/sections/CoreServices";
import CustomerReviews from "@/sections/CustomerReviews";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import RoomsList from "@/sections/RoomsList";
import Services from "@/sections/Services";
import ThingsToDo from "@/sections/ThingsToDo";
import TopSection from "@/sections/TopSection";
import Welcome from "@/sections/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopSlider />
      {/* <TopSection title={'Blu Water Resort'} subtitle={'Malshej Ghat'} /> */}
      <Welcome />
      <Hero />
      <RoomsList />
      <Services />
      {/* <CoreServices /> */}
      {/* <BluOasisIntro explore={true} /> */}
      {/* <BluDeckIntro explore={true} /> */}
      <Caresoul />
      <ThingsToDo />
      <CustomerReviews />
      <Gallery />
      <ContactForm />


    </>
  );
}
