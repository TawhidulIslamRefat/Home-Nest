import React, { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Home Buyer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    message: "HomeNest helped me find my dream home quickly. The listings are accurate, and the support team is amazing!"
  },
  {
    id: 2,
    name: "Rafiq Ahmed",
    role: "Property Seller",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    message: "Listing my property was super easy. I got multiple inquiries within a week. Highly recommended!"
  },
  {
    id: 3,
    name: "Sara Khan",
    role: "Renter",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
    message: "I found a perfect rental apartment through HomeNest. The platform is user-friendly and trustworthy."
  },
  {
    id: 4,
    name: "Tanvir Hossain",
    role: "Home Buyer",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    rating: 5,
    message: "Amazing experience! Found a beautiful apartment within my budget in no time."
  },
  {
    id: 5,
    name: "Nabila Sultana",
    role: "Renter",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 4,
    message: "Smooth platform, very easy to browse properties and contact owners."
  },
  {
    id: 6,
    name: "Imran Khan",
    role: "Property Seller",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    message: "Got inquiries almost immediately after listing my property. Very reliable."
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
      <div className="flex justify-center mb-6">
        <div className="bg-[#FF5A3C] text-white p-3 rounded-full">
          <FaQuoteLeft className="text-lg" />
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-center text-lg leading-relaxed mb-8 italic">
        "{testimonial.message}"
      </p>

      <div className="flex justify-center gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <FaStar 
            key={idx} 
            className={`text-lg ${idx < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};
const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className=" dark:bg-[#1D232A] pt-3">
      <div className="w-[98%] md:w-10/12 mx-auto px-6">
        <div className="text-center mb-16">
           <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xm md:text-xl p-1 rounded-xl">
          Testimonials
        </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-3 md:mt-5 text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real experiences from our satisfied customers who found their perfect properties
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="bg-white dark:bg-gray-800 text-[#FF5A3C] p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => swiperRef?.slideNext()}
            className="bg-white dark:bg-gray-800 text-[#FF5A3C] p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <FaChevronRight />
          </button>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ 
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet testimonial-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active'
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
