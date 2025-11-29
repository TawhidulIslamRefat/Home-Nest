import React from "react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import houseAnimation from "../../../public/Home.json";
import houseAnimation1 from "../../../public/City Building Construction.json";
import houseAnimation2 from "../../../public/City Skyline Building.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router";
import { GiDuration } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="relative mt-6 mx-7">
      <div className=" w-[98%]  lg:w-11/12 mx-auto">
        <Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay:3000,
            disableOnInteraction:false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="rounded-xl"
        >

          <SwiperSlide>
            <div className="flex flex-col sm:flex-row w-full items-center justify-around">
              <div className="mb-4">
                <p className="flex items-center gap-1 text-sm md:text-xl font-semibold" data-aos="fade-right">
                  <span className="text-[#FF5A3C] text-lg md:text-2xl">
                    <AiFillHome />
                  </span>{" "}
                  Real <span className="text-[#FF5A3C]"> Estate{" "}</span>
                </p>
                <h1 className="font-bold text-xl  md:text-5xl lg:text-7xl mt-1 md:mt-2 mb-2 md:mb-5 leading-6 md:leading-13 lg:leading-20">
                  Find Your Dream  <br /> House <span className="text-[#FF5A3C]">By Us</span>
                </h1>
                <p className="text-xs md:text-xl font-medium border-l border-gray-400 pl-4 text-gray-700 mb-5 leading-5 md:leading-9 dark:text-gray-300" data-aos="fade-right">
                  Browse thousands of trusted properties, compare prices, <br />{" "}
                  and choose the one that fits your lifestyle.
                </p>
                <Link to='/all-properties' className="bg-[#FF5A3C] text-white text-sm md:text-[18px] font-normal md:py-3 md:px-5 py-1.5 px-3 rounded-sm">
                  FIND NOW
                </Link>
              </div>
              <div className=" w-full md:w-[600] lg:w-[1000px] xl:w-[800px] h-40 2xl:h-90 ">
                <Lottie animationData={houseAnimation} loop={true} />
              </div>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col sm:flex-row-reverse items-center justify-around">
              <div className="text-right mr-5 mb-4">
                <p className="flex  items-center justify-end mr-3 gap-1 text-sm md:text-xl font-semibold text-right" data-aos="fade-right">
                  <span className="text-[#FF5A3C] text-lg md:text-2xl">
                    <AiFillHome />
                  </span>{" "}
                  Real
                  <span className="text-[#FF5A3C]"> Estate{" "}</span>
                </p>
                <h1 className="font-bold text-xl  md:text-5xl lg:text-7xl mt-1 md:mt-2 mb-2 md:mb-5 md:leading-13 lg:leading-20 leading-6">
                  Step into a world where comfort <span className="text-[#FF5A3C]">meets style</span>
                </h1>
                <p className="text-xs md:text-xl font-medium border-r pr-4 border-gray-400 pl-4 text-gray-700 mb-5 leading-5 md:leading-9 dark:text-gray-300" data-aos="fade-right">
                  Explore premium homes built for better living — modern spaces,{" "}
                  <br /> smart layouts, and the warmth you deserve
                </p>
                <Link to='/all-properties' className="bg-[#FF5A3C] text-white text-sm md:text-[18px] font-normal md:py-3 md:px-5 py-1.5 px-3 rounded-sm ">
                  Explore
                </Link>
                <Link to='/all-properties' className="border-[#FF5A3C] border text-sm md:text-[18px] font-normal md:py-3 md:px-5 py-1.5 px-3 rounded-sm mr-10 ml-6 hover:bg-orange-600 transition transform scale-110 duration-300">
                  Buy Now
                </Link>
              </div>
              <div className="w-[300px] md:w-[600px] lg:w-[1000px] h-40 2xl:h-90">
                <Lottie animationData={houseAnimation1} loop={true} />
              </div>
            </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="flex flex-col sm:flex-row items-center justify-around">
              <div className="ml-0 lg:ml-10 mb-6">
                <p className="flex  items-center  gap-1 text-lg md:text-xl font-semibold text-right">
                  <span className="text-[#FF5A3C] text-lg md:text-2xl">
                    <AiFillHome />
                  </span>{" "}
                  Real <span className="text-[#FF5A3C]">Estate{" "}</span>
                </p>
                <h1 className="font-bold text-xl  md:text-5xl lg:text-7xl mt-1 md:mt-2 mb-1 md:mb-5  md:leading-13 lg:leading-20 leading-6">
                  Safe, secure, and verified <span className="text-[#FF5A3C]">properties.</span>
                </h1>
                <p className="text-xs md:text-xl font-medium border-l border-gray-400 pl-4 text-gray-700 mb-5 leading-5 md:leading-9 dark:text-gray-300">
                  Create a warm space where your family grows, smiles, and stays{" "}
                  <br />
                  close. Let’s find that place together.
                </p>
                <Link to='/all-properties' className="bg-[#FF5A3C] text-white text-sm md:text-[18px] font-normal md:py-3 md:px-5 py-1.5 px-3 rounded-sm ">
                  FIND NOW
                </Link>
                <Link to='/all-properties' className="border-[#FF5A3C] border text-sm md:text-[18px] font-normal md:py-3 md:px-5 py-1.5 px-3 rounded-sm mr-10 ml-6 hover:fill-orange-600 hover:bg-orange-600 transition transform scale-110 duration-300">
                  RENT
                </Link>
              </div>
              <div className="w-full sm:w-[350px]  md:w-[800px] lg:w-[1000px]">
                <Lottie animationData={houseAnimation2} loop={true} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
