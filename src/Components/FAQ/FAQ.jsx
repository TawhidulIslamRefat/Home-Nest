import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How do I list my property on HomeNest?",
    answer:
      "Sign up or log in, navigate to 'Add Property', fill in the property details, upload photos, and submit. Our team will review and approve your listing within 24 hours.",
  },
  {
    question: "Is it free to create an account?",
    answer:
      "Yes! Creating an account is completely free. You can browse listings, save favorites, and contact sellers without any charges.",
  },
  {
    question: "Can I list properties for rent as well as sale?",
    answer:
      "Absolutely. HomeNest supports both rental and sale listings. You can choose the category while adding your property.",
  },
  {
    question: "How can I contact a property owner?",
    answer:
      "Go to the property details page and click on the 'Contact Owner' button. You can send a message directly or find the owner's contact info if provided.",
  },
  {
    question: "How do I manage my saved properties?",
    answer:
      "All saved properties are available in your dashboard under 'Saved Properties'. You can view, contact owners, or remove listings from there.",
  },
];

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <button
        className="w-full flex justify-between items-center p-6 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white">
          {faq.question}
        </span>
        <span className="text-[#FF5A3C] text-xl">
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 p-6" : "max-h-0 px-6"
        } bg-white dark:bg-[#1D232A] text-gray-700 dark:text-gray-300 text-base md:text-lg`}
      >
        {faq.answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-100 pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
         <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xm md:text-xl p-1 rounded-xl mx-auto">
          FAQ
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-5 font-bold text-center mb-12 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
