import React from "react";
import Swal from "sweetalert2";

const Consult = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    Swal.fire({
      title:"Submitted",
      icon:"success",
      confirmButtonColor:"#FF5A3C"
      
    })
    e.target.reset();
  }
  return (
    <div className="bg-[#F2F6F7] dark:bg-[#23272b]">
      <div className=" w-[95%] lg:w-10/12 mx-auto pt-7 pb-4 flex flex-col sm:flex-row items-center">
        <div className="flex-1"> 
          <img src='https://tunatheme.com/tf/html/quarter-preview/quarter/img/slider/21.png' alt="Home" className="h-50 md:h-60 lg:h-100 "/>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
             <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-sm md:text-xl p-1 rounded-xl">
          Consult
        </span>
          <h1 className=" text-xl md:text-3xl lg:text-5xl font-semibold mt-3 lg:mt-5">you can consult here</h1>
          <p className="text-xs md:text-sm lg:text-text-xl font-medium text-gray-500 max-w-lg mt-4 md:my-2 lg:my-7 dark:text-gray-400">
            Our property advisors are always ready to guide you. Whether you are
            buying, renting, or selling — we provide clear, honest, and helpful
            assistance.
          </p>
          <div className="w-full mt-3">
            <form onSubmit={handleSubmit} className="w-full flex relative">
            <input type="email" name="email" id="email" placeholder="Enter Your Email here" className="border md:px-5 px-3 py-1.5 md:py-3 border-gray-400 outline-none rounded-sm w-full md:w-[55%]" required/>
            <button type="submit" className="md:px-5 px-3 py-1.5 md:py-3 bg-[#FF5A3C] font-medium text-white  ">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
