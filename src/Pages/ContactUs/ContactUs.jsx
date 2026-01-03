import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaUsers, FaHeadset } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: 'Please fill in all fields before submitting.',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will get back to you within 24 hours.',
      timer: 3000,
      showConfirmButton: false
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-base-100 min-h-screen">
      <section className="relative bg-linear-to-br from-[#FF5A3C] via-[#ff6b4a] to-[#ff7a5c] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Get in Touch With Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed px-4">
              Have questions about properties, pricing, or partnerships?  
              Our team is here to help you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <FaUsers className="text-2xl sm:text-3xl mx-auto mb-2" />
              <h3 className="font-semibold text-sm sm:text-base">24/7 Support</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <FaClock className="text-2xl sm:text-3xl mx-auto mb-2" />
              <h3 className="font-semibold text-sm sm:text-base">Quick Response</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <FaHeadset className="text-2xl sm:text-3xl mx-auto mb-2" />
              <h3 className="font-semibold text-sm sm:text-base">Expert Team</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600 dark:text-white/98 max-w-2xl mx-auto text-sm sm:text-base">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 sm:p-8">
              <div className="text-[#FF5A3C] text-3xl sm:text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center">Call Us</h3>
              <div className="space-y-2 text-center">
                <p className="text-gray-600 dark:text-white/98 hover:text-[#FF5A3C] transition-colors cursor-pointer text-sm sm:text-base">
                  +880 1234 567 890
                </p>
                <p className="text-gray-600 dark:text-white/98 hover:text-[#FF5A3C] transition-colors cursor-pointer text-sm sm:text-base">
                  +880 9876 543 210
                </p>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Available 24/7
                </span>
              </div>
            </div>

            <div className="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 sm:p-8">
              <div className="text-[#FF5A3C] text-3xl sm:text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center">Email Us</h3>
              <div className="space-y-2 text-center">
                <p className="text-gray-600 dark:text-white/98 hover:text-[#FF5A3C] transition-colors cursor-pointer text-sm sm:text-base">
                  support@homenest.com
                </p>
                <p className="text-gray-600 dark:text-white/98  hover:text-[#FF5A3C] transition-colors cursor-pointer text-sm sm:text-base">
                  info@homenest.com
                </p>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Response within 24hrs
                </span>
              </div>
            </div>
            <div className="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
              <div className="text-[#FF5A3C] text-3xl sm:text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center">Visit Us</h3>
              <div className="space-y-1 text-center">
                <p className="text-gray-600 dark:text-white/98 text-sm sm:text-base">
                  House 12, Road 5, Dhanmondi  
                </p>
                <p className="text-gray-600 dark:text-white/98 text-sm sm:text-base">Dhaka, Bangladesh</p>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Mon - Fri, 9AM - 6PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-white/98 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left text-sm sm:text-base">
                  Whether you are looking for your dream home, want to list a
                  property, or have general inquiries — feel free to reach out.
                  Our support team usually responds within 24 hours.
                </p>

                <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-white/98 mb-8">
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-[#FF5A3C] mr-3 text-lg">✔</span>
                    Professional real estate support
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-[#FF5A3C] mr-3 text-lg">✔</span>
                    Trusted property listings
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <span className="text-[#FF5A3C] mr-3 text-lg">✔</span>
                    Quick response & friendly service
                  </li>
                </ul>

                <div className="hidden lg:block bg-linear-to-r from-[#FF5A3C]/10 to-[#ff7a5c]/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-gray-800 dark:text-white/98">Need Immediate Help?</h4>
                  <p className="text-sm text-gray-600 dark:text-white/98 mb-3">
                    For urgent inquiries, call us directly or visit our office during business hours.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center text-[#FF5A3C]">
                      <FaClock className="mr-2" />
                      Mon-Fri: 9AM-6PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="card bg-base-200 shadow-2xl p-6 sm:p-8 max-w-lg mx-auto lg:max-w-none">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name *"
                        className="input input-bordered w-full focus:border-[#FF5A3C] focus:outline-none text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email *"
                        className="input input-bordered w-full focus:border-[#FF5A3C] focus:outline-none text-white text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject *"
                      className="input input-bordered w-full focus:border-[#FF5A3C] focus:outline-none text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="textarea textarea-bordered w-full h-32 sm:h-36 focus:border-[#FF5A3C] focus:outline-none resize-none text-sm sm:text-base"
                      placeholder="Your Message *"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-[#FF5A3C] text-white hover:bg-[#e14b30] w-full text-base sm:text-lg py-3 sm:py-4 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>

                  <p className="text-xs sm:text-sm text-gray-500 dark:text-white/98 text-center mt-4">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
