import Image from "next/image";
import React from "react";

const overview = () => {
  return (
    <>
      <div className="max-w-6xl m-auto">
        <h2 className="text-center py-10">Overview</h2>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 p-5">
            <Image
              src={"/images/blu-hero.jpg"}
              width={7000}
              height={700}
              alt=""
              className="w-full rounded-xl border shadow-xl"
            />
          </div>

          <div className="md:w-1/2 p-5">
            
            <p>
              Welcome to Blu Water Resort, a luxury destination nestled in the
              breathtaking surroundings of Malshej Ghat. Our resort is the
              perfect escape from the hustle and bustle of city life, offering
              guests a serene and peaceful getaway surrounded by nature and a
              stunning lake view.
            </p>
            <br />
            <p>
              At Blu Water Resort, we take pride in providing our guests with an
              unforgettable experience that combines luxurious amenities with
              the tranquility of nature. Whether youre looking for a romantic
              retreat, a family vacation, or a group getaway, our resort has
              something for everyone.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 p-5">
            <p>
              Our resort features spacious and beautifully appointed rooms and
              suites, each with its own unique charm and stunning views of the
              surrounding mountains and lake. All of our accommodations are
              designed to offer the utmost comfort and convenience, with
              luxurious bedding, modern amenities, and thoughtful touches that
              will make you feel right at home.
            </p>
            <br />
            <p>
              We also offer a range of on-site amenities that are sure to
              enhance your stay, including a restaurant that serves delicious
              local plus variety of cuisine.
            </p>
            <br />
            <p>
              If you&rsquo;re looking to explore the area, our resort is ideally
              situated near many of Malshej Ghats top attractions. At Blu Water
              Resort, were committed to providing our guests with an exceptional
              experience that they will cherish for a lifetime. Whether youre
              here to relax and unwind or to explore the beauty of Malshej Ghat,
              we look forward to welcoming you to our luxurious resort.
            </p>
          </div>

          <div className="md:w-1/2 p-5">
            <Image
              src={"/images/rest.jpeg"}
              width={7000}
              height={700}
              alt=""
              className="w-full rounded-xl border shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default overview;
