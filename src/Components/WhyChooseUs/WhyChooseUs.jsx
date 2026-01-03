import React from "react";
import { FaHome, FaShieldAlt } from "react-icons/fa";
import { FaHandshake, FaWallet } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <div className="w-10/12 mx-auto my-10 md:my-20 px-2">
      <div className="center mb-12 text-center" data-aos="fade-up">
        <span className="bg-[#FFEBE7] text-center text-[#FF5A3C] text-xs md:text-xl p-1 rounded-xl">
          Choose Us
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-5 text-center">
          Why Choose Us
        </h2>
        <p className="text-gray-600 my-2 md:my-4 max-w-xl mx-auto text-xs md:text-[17px] font-medium dark:text-gray-400 text-center">
          We focus on trust, comfort, and transparency — making your property
          journey easier and smoother.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
        <div className="card bg-base-100 dark:border shadow-sm p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" data-aos="fade-down">
         <FaHome className="text-xl md:text-4xl text-[#FF5A3C] mb-4">
         </FaHome>
         <h2 className="text-sm md:text-xl font-semibold mb-2">
          Wide Range of Properties
         </h2>
         <p className="text-gray-600 text-xs md:text-[16px] dark:text-gray-400">
          Explore thousands of properties in different locations and price ranges.
         </p>
        </div>
        <div className="card bg-base-100 dark:border shadow-sm p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" data-aos="fade-up">
          <FaHandshake className="text-xl md:text-4xl text-[#FF5A3C] mb-4"   />         
         <h2 className="text-sm md:text-xl font-semibold mb-2">
          Trusted by Users
         </h2>
         <p className="text-gray-600 text-xs md:text-[16px] dark:text-gray-400">
          Verified listings and reliable information from real owners and agents.
         </p>
        </div>
        <div className="card bg-base-100 dark:border shadow-sm p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" data-aos="fade-up">
         <FaShieldAlt className="text-xl md:text-4xl text-[#FF5A3C] mb-4">
         </FaShieldAlt>
         <h2 className="text-sm md:text-xl font-semibold mb-2">
          Secure & Transparent
         </h2>
         <p className="text-gray-600 text-xs md:text-[16px] dark:text-gray-400">
          No hidden fees, no confusion. Everything is clear and secure for you.
         </p>
        </div>
        <div className="card bg-base-100 dark:border shadow-sm p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" data-aos="fade-down">
         <FaWallet  className="text-xl md:text-4xl text-[#FF5A3C] mb-4">
         </FaWallet>
         <h2 className="text-sm md:text-xl font-semibold mb-2">
          Affordable Choices
         </h2>
         <p className="text-gray-600 text-xs md:text-[16px] dark:text-gray-400">
          From budget-friendly homes to luxury properties — we have it all.
         </p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
