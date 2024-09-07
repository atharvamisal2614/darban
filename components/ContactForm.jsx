// components/ContactForm.js

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="bg-white py-8 md:py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="flex-1" style={{ height: '400px' }}>
          {/* Google Maps Embed Link */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.66974209886!2d72.9855027!3d18.1791215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84f25af914a67%3A0x41534214a41d0b58!2sDarban%20Resort!5e0!3m2!1sen!2sin!4v1725289075529!5m2!1sen!2sin"
            width="100%"
            height="100%"  
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
          {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-5xl font-bold font-lifeSugar mb-4 md:mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 md:p-3 border border-gray-300 rounded"
              aria-label="Name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 md:p-3 border border-gray-300 rounded"
              aria-label="Email"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 md:p-3 border border-gray-300 rounded"
              aria-label="Phone"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 md:p-3 border border-gray-300 rounded resize-none"
              rows="4"
              aria-label="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 md:py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 mx-6 md:mx-14">
        <div className="flex justify-center gap-4 md:gap-6 text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-600 transition-colors duration-300" />
          </a>
          <a href="mailto:info@darbanresorts.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:text-red-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 md:mt-8 text-gray-600 dark:text-gray-300">
      </div>
    </div>
  );
};

export default ContactForm;
