import React, { useState } from "react";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaSearch,
} from "react-icons/fa";
import image1 from "../../assets/Image 11.png";
import image2 from "../../assets/Image 123.png";
import image3 from "../../assets/Image 44.png";
const SecondBanner = ({setSearchText,setSort}) => {
    const [inputText,setInputText] = useState("");

    const handleSearch =()=>{
        setSearchText(inputText);
        setInputText("")
    }
  return (
    <div className="bg-[#F8F7F7] dark:bg-[#23272b] relative py-10 sm:py-15 md:py-20"
    >
      <div className="w-10/12 mx-auto grid lg:grid-cols-2 items-center gap-10 py-15">
        <div className="space-y-6">
          <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-right" >
            Easy way to find <br /> a perfect{" "}
            <span className="text-[#FF5A3C]">Property</span>
          </h1>
          <p className="text-gray-600 max-w-lg font-medium dark:text-gray-300 text-xs sm:text-sm md:text-lg" data-aos="fade-right">
            Discover the perfect place that matches your lifestyle and comfort.
            Every property is chosen with care to bring you peace and happiness.
          </p>

          <div className="shadow-lg p-5 rounded-xl bg-white space-y-3 z-100" data-aos="fade-left">
            <div className="flex items-center gap-3 flex-col md:flex-row">
              <input
                type="text"
                value={inputText}
                onChange={(e)=> setInputText(e.target.value)}
                placeholder="Search property"
                className="input input-borderland w-full"
              />
              <select
              onChange={(e)=>setSort(e.target.value)}
              className="select select-bordered w-full">
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option  value="date-desc">Newest First</option>
                <option  value="date-asc">Oldest First</option>
              </select>
              <button
              onClick={handleSearch}
              className="bg-[#FF5A3C] hover:bg-gray-700 text-white px-4 md:px-6 py-1.5 md:py-3 rounded-md flex items-center gap-2">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center ">
          <img
            src={image1}
            alt=""
            className="w-80 h-56 rounded-xl object-cover shadow-md lg:absolute 2xl:relative top-0 lg:-top-4"
           data-aos="fade-left"/>
          <img
            src={image2}
            alt=""
            className="w-72 h-48 rounded-xl object-cover shadow-xl absolute -top-5 -right-5 border-4 border-white hidden sm:flex lg:hidden 2xl:flex 2xl:-top-25"
           data-aos="fade-right"/>
          <img
            src={image3}
            alt=""
            className="w-72 h-48 rounded-xl object-cover shadow-xl absolute md:-bottom-5 -bottom-25 -left-5 border-4 border-white "
          data-aos="fade-up" />
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
