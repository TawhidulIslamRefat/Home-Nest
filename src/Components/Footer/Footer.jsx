import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#171B2A] pt-4">
      <footer className="w-full lg:w-10/12 mx-auto footer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4 md:p-5 lg:p-10">
        <nav className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
          <a href="/" className="text-lg md:text-2xl font-semibold text-base-100 dark:text-gray-300">
            Home<span className="text-[#FF5A3C]">Nest</span>
          </a>
          <p className="text-sm md:text-[17px] text-white p-0 md:p-1 leading-5 md:leading-7 mb-4">
            Your trusted companion for <br className="hidden sm:block" /> property buying, renting, and living.
          </p>
        </nav>

        <nav className="space-y-2 md:space-y-3 col-span-1">
          <h6 className="footer-title text-white text-sm md:text-xl">Contact Info</h6>
          
          <div className="flex items-start gap-3">
            <FaPhone className="text-[#FF5A3C] text-sm md:text-base mt-1 shrink-0" />
            <div>
              <p className="text-white text-xs md:text-sm font-medium">Phone</p>
              <a href="tel:+8801234567890" className="link link-hover text-gray-300 text-xs md:text-sm">
                +880 123 456 7890
              </a>
              <br />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-[#FF5A3C] text-sm md:text-base mt-1 shrink-0" />
            <div>
              <p className="text-white text-xs md:text-sm font-medium">Email</p>
              <a href="mailto:info@homenest.com" className="link link-hover text-gray-300 text-xs md:text-sm">
                info@homenest.com
              </a>
              <br />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-[#FF5A3C] text-sm md:text-base mt-1 shrink-0" />
            <div>
              <p className="text-white text-xs md:text-sm font-medium">Address</p>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                123 Real Estate Ave,<br />
                Dhaka 1000, Bangladesh
              </p>
            </div>
          </div>
        </nav>

        <nav className="space-y-1 md:space-y-2 col-span-1">
          <h6 className="footer-title text-white text-sm md:text-xl">Company</h6>
          <a href="/about" className="link link-hover text-white text-sm md:text-[16px] block">About us</a>
          <a href="/all-properties" className="link link-hover text-white text-sm md:text-[16px] block">All Properties</a>
          <a href="/contact-us" className="link link-hover text-white text-sm md:text-[16px] block">Contact us</a>
          <a href="/faq" className="link link-hover text-white text-sm md:text-[16px] block">FAQ</a>
        </nav>

        <nav className="space-y-1 md:space-y-2 col-span-1">
          <h6 className="footer-title text-white text-sm md:text-xl">Services</h6>
          <a href="/login" className="link link-hover text-white text-sm md:text-[16px] block">Login</a>
          <a href="/profile" className="link link-hover text-white text-sm md:text-[16px] block">My account</a>
          <a href="/my-ratings" className="link link-hover text-white text-sm md:text-[16px] block">My ratings</a>
          <a href="/my-property" className="link link-hover text-white text-sm md:text-[16px] block">My Property</a>
        </nav>


        <nav className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <h6 className="footer-title text-white text-sm md:text-xl">Follow Us</h6>
          <div className="flex gap-3 md:gap-4 flex-wrap">
            <a href="https://www.linkedin.com/in/tawhidul-islam-refat-developer/" className="hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-white hover:fill-[#FF5A3C] transition-colors duration-300"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
            <a href="tawhidulislamrefat11@gmail.com" className="hover:scale-110 transition-transform duration-300" aria-label="Gmail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-white hover:fill-[#FF5A3C] transition-colors duration-300"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/tawhidulislamrefat11" className="hover:scale-110 transition-transform duration-300" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-white hover:fill-[#FF5A3C] transition-colors duration-300"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      
      <div className="bg-[#282B38] py-3">
        <p className="text-center text-xs md:text-[18px] text-gray-300">© 2025 HomeNest. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;