import React from "react";
import { FaHandshake, FaHome, FaShieldAlt, FaWallet } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto my-10 md:my-20">
      
       
        <div className="text-center mb-12">
          <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xs md:text-xl p-1 rounded-xl">
          Choose Us
        </span>
          <h2 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-5">Why Choose Us</h2>
          <p className="text-gray-600 my-2 md:my-4 max-w-xl mx-auto text-xs md:text-[17px] font-medium dark:text-gray-400">
            We focus on trust, comfort, and transparency — making your property
            journey easier and smoother.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          <div className="card bg-base-100 dark:border    shadow-sm p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <FaHome className=" text-xl md:text-4xl text-[#FF5A3C] mb-4" />
              <h2 className="text-sm md:text-xl font-semibold mb-2">Wide Range of Properties</h2>
              <p className="text-gray-600 text-xs md:text-[16px] dark:text-gray-400">
                Explore thousands of properties in different locations and price ranges.
              </p>
            </div>
          <div className="card bg-base-100 dark:border shadow-sm p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <FaHandshake className="text-xl md:text-4xl text-[#FF5A3C] mb-4" />
              <h2 className="text-sm md:text-xl font-semibold mb-2">Trusted by Users</h2>
              <p className="text-gray-600 text-xs md:text-[16px] dark:text-gray-400">
                Verified listings and reliable information from real owners and agents.
              </p>
            </div>
          <div className="card bg-base-100 dark:border shadow-sm p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <FaShieldAlt className="text-xl md:text-4xl text-[#FF5A3C] mb-4" />
              <h2 className="text-sm md:text-xl font-semibold mb-2 dark:text-gray-400">Secure & Transparent</h2>
              <p className="text-gray-600 text-xs md:text-[16px] dark:text-gray-400">
            No hidden fees, no confusion. Everything is clear and secure for you.
              </p>
            </div>
          <div className="card bg-base-100 dark:border shadow-sm p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <FaWallet className="text-xl md:text-4xl text-[#FF5A3C] mb-4" />
              <h2 className="text-sm md:text-xl font-semibold mb-2">Affordable Choices</h2>
              <p className="text-gray-600 text-xs md:text-[16px] dark:text-gray-400">
            From budget-friendly homes to luxury properties — we have it all.
              </p>
            </div>
          </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
