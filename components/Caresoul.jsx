import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Caresoul() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to show 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile devices
        },
      },
    ],
  };

  // Array of image paths
  const certificates = [
    '/darbanimages/dig1.jpeg',
    '/darbanimages/dig2.jpeg',
    '/darbanimages/dig3.jpeg',
    '/darbanimages/dig4.jpeg',
    '/darbanimages/dig5.jpeg',
    '/darbanimages/dig6.jpeg',
    '/darbanimages/dig7.jpeg',
    '/darbanimages/dig8.jpeg',
    '/darbanimages/dig9.jpeg',
    '/darbanimages/dig10.jpeg',
    '/darbanimages/dig11.jpeg',
    '/darbanimages/dig12.jpeg',
    '/darbanimages/dig13.jpeg',
    '/darbanimages/dig14.jpeg',
    '/darbanimages/dig15.jpeg',
    '/darbanimages/dig16.jpeg',
    '/darbanimages/dig17.jpeg',
    '/darbanimages/dig18.jpeg'
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1B4C3E] mb-8 text-center"></h2>
        <Slider {...settings}>
          {certificates.map((image, index) => (
            <div key={index} className="p-4">
              {/* Use responsive classes to adjust image size */}
              <img src={image} alt={`Certificate ${index + 1}`} className="w-full h-[500px] max-w-[500px] mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Caresoul;
