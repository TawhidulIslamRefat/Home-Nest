import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-24 dark:bg-[#1D232A]">
      <div className="w-[98%]  lg:w-10/12 mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white">
            About <span className="text-[#FF5A3C]">Home</span>Nest
          </h2>
          <p className="text-gray-600 dark:text-white/98 mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
            HomeNest is a next-generation real estate listing platform built to
            simplify the way people discover, buy, rent, and sell properties.
            We focus on trust, transparency, and technology-driven solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white/98 mb-6">
              Who We Are
            </h3>
            <p className="text-gray-600 dark:text-white/98 mb-6 leading-relaxed text-lg">
              At HomeNest, we bring together property buyers, sellers, and real
              estate agents on a single secure platform. Our goal is to eliminate
              confusion and make property decisions easier with verified data
              and intuitive tools.
            </p>

            <ul className="space-y-4 text-gray-700 dark:text-white/98 text-lg">
              <li>✔ Verified & trusted property listings</li>
              <li>✔ Smart search with advanced filters</li>
              <li>✔ Secure authentication & user dashboards</li>
              <li>✔ Real-time updates & saved listings</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1D232A] dark:border  shadow-xl rounded-3xl p-10">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white/98 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-white/98 text-lg leading-relaxed">
              Our mission is to empower users with accurate information and
              modern tools so they can find the right home faster and with full
              confidence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          <div className="bg-white dark:bg-[#1D232A] dark:border p-10 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white/98 mb-4">
              Our Vision
            </h4>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              To become the most trusted and user-friendly real estate platform
              in the digital property ecosystem.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1D232A] dark:border p-10 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white/98 mb-4">
              Transparency
            </h4>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              We believe in honest listings, clear pricing, and real information
              with no hidden surprises.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1D232A] dark:border p-10 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white/98 mb-4">
              Innovation
            </h4>
            <p className="text-gray-600 dark:text-white/98 leading-relaxed">
              HomeNest uses modern technologies to improve search accuracy,
              performance, and overall user experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24">
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl">
            <h4 className="text-4xl font-bold text-[#FF5A3C]">1,200+</h4>
            <p className="text-gray-600 dark:text-white/98 mt-2">Properties Listed</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl">
            <h4 className="text-4xl font-bold text-[#FF5A3C]">800+</h4>
            <p className="text-gray-600 dark:text-white/98 mt-2">Active Users</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl">
            <h4 className="text-4xl font-bold text-[#FF5A3C]">500+</h4>
            <p className="text-gray-600 dark:text-white/98 mt-2">Happy Clients</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl">
            <h4 className="text-4xl font-bold text-[#FF5A3C]">50+</h4>
            <p className="text-gray-600 dark:text-white/98 mt-2">Trusted Agents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
