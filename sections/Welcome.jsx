// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Welcome = () => {
//   return (
//     <>
//       <div className="flex md:flex-row flex-col max-w-6xl m-auto my-20">
//         <div data-aos="zoom-in-right" className="md:w-2/5 p-5 md:px-10">
//           <p>W E L C O M E</p>
//           <h2 className="my-5">Darban Resort, Diveagar</h2>
//           <h4>We konkanis take hosting as a pleasure and our resort gives
//                 the
//                 cozy feel of home-away from home</h4><br></br>
//           <p>
//           Our place is known for its thoughtful
//                     hospitality that gives personal attention
//                     to the guests and ensures the safety
//                     and comfort of our customers. Quality food,
//                     security and your comfort are our top priorities and your Nature Friendly beach
//                     resort welcomes you yo heaven on earth.
//           </p>
//           <br />
         
//          <Link href={'/overview'}>
//           <button>Expolre Resort</button>
//          </Link>
//         </div>

//         <div data-aos="zoom-in-left" className="md:w-3/5 p-5 md:px-10">
//           <Image
//             src={"/images/blu-hero1.jpg"}
//             className={`h-full object-cover relative -z-10`}
//             width={700}
//             height={500}
//             alt={""}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Welcome;





// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Welcome = () => {
//   return (
//     <>
//       <div className="mt-36 flex md:flex-row flex-col max-w-6xl m-auto my-20 shadow-lg rounded-lg overflow-hidden bg-white">
//         {/* Text Section */}
//         <div data-aos="fade-right" className="md:w-2/5 p-10 bg-gradient-to-b from-primary to-secondary text-white">
//           <p className="text-lg font-semibold tracking-widest text-gray-900">W E L C O M E</p>
//           <h2 className="my-5 text-3xl font-bold">Darban Resort, Diveagar</h2>
//           <h4 className="text-xl mb-4">We Konkanis take hosting as a pleasure and our resort gives the cozy feel of a home away from home.</h4>
//           <p className="mb-4 text-gray-800">
//             Our place is known for its thoughtful hospitality that gives personal attention to the guests and ensures the safety and comfort of our customers. Quality food, security, and your comfort are our top priorities, and your nature-friendly beach resort welcomes you to heaven on earth.
//           </p>
//           <Link href={'/overview'}>
//             <button className="px-6 py-2 bg-secondary hover:bg-primary text-white font-semibold rounded-md transition duration-300">
//               Explore Resort
//             </button>
//           </Link>
//         </div>

//         {/* Image Section */}
//         <div data-aos="fade-left" className="md:w-3/5 relative">
//           <Image
//             src="/darbanimages/darban-2.jpeg"
//             className="object-cover h-full w-full"
//             width={700}
//             height={500}
//             alt="Darban Resort Hero Image"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Welcome;





import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const Welcome = () => {
  const [startTypewriter, setStartTypewriter] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });

    const handleScroll = () => {
      const element = document.getElementById("typewriter-paragraph");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStartTypewriter(true);
          window.removeEventListener("scroll", handleScroll); // Remove event listener after triggering once
        }
      }
    };

    // Trigger the typewriter on page load if already visible
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mt-36 flex md:flex-row flex-col w-full m-auto my-20 shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Text Section */}
        <div data-aos="fade-right" className="md:w-2/5 p-10">
          <p className="text-2xl font-bold tracking-widest text-gray-900 font-sofiaRegular">
            {startTypewriter && (
              <Typewriter
                words={["W E L C O M E"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            )}
          </p>
          <h2 className="font-learningCurve my-5 text-5xl font-bold">
            {startTypewriter && (
              <Typewriter
                words={["Darban Resort, Diveagar"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            )}
          </h2>
          <h4
            id="typewriter-paragraph"
            className="font-lifeSugar text-4xl mb-4 text-gray-700"
          >
            
                  "We Kokanis take hosting as a pleasure and our resort gives the cozy feel of a home away from home.",
            
          </h4>

          <p className="text-3xl font-bold mb-4 text-gray-800">
            <span className="text-green-600">Our place </span> is known for its
            thoughtful <span className="text-green-600"> hospitality </span> that
            gives <span className="text-purple-800"> personal </span> attention to
            the <span className="text-green-600"> guests </span> & ensures the
            safety and comfort of our{" "}
            <span className="text-purple-800"> customers. Quality food </span>,
            security & your comfort are our top{" "}
            <span className="text-green-600"> priorities </span> Nature Friendly
            and your <span className="text-purple-800"> beach </span> resort
            welcomes you to <span className="text-green-600">heaven on earth.</span>
          </p>
          <Link href={"/overview"}>
            <button className="mt-3 px-6 py-4 text-md bg-gradient-to-r from-purple-800 to-green-600 hover:bg-primary text-white font-semibold rounded-md transition duration-300">
              Explore Resort
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="md:w-3/5 relative">
          <Image
            src="/darbanimages/darban-2.jpeg"
            className="object-cover h-full w-full"
            width={700}
            height={500}
            alt="Darban Resort Hero Image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
      </div>
    </>
  );
};

export default Welcome;





