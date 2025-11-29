import React from 'react';
import Swal from 'sweetalert2';

const Consult = () => {
const handleSubmit = (e) =>{
  e.preventDefault();
  Swal.fire({
    title:'Submitted',
    icon:"success",
    confirmButtonColor:"#FF5A3C"
  });
  e.target.reset();
}

  return (
    <div>
      <div className='bg-[#F2F6F7] dark:bg-[#23272B] py-5'>
       <div className=' w-[95%] lg:w-11/12 mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-30'>
          <div className='flex-1' data-aos="fade-down">
         <img
         className='h-50 lg:h-100 ml-0 md:ml-20'
         src="https://tunatheme.com/tf/html/quarter-preview/quarter/img/slider/21.png" alt="Home" />
          </div>
          <div className='flex-1 text-center md:text-left' data-aos="fade-up">
            <span className=" bg-[#FFEBE7]  text-[#FF5A3C] text-xm md:text-xl p-1 rounded-xl text-center md:text-left">
          consult
        </span>
        <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold my-4 text-center md:text-left'>you can consult here</h1>
        <p className='text-gray-600 text-xs sm:text-sm md:text-lg max-w-xl dark:text-gray-400 my-2 ms:my-4 lg:text-xl font-medium text-center md:text-left'>Our property advisors are always ready to guide you. Whether you are buying, renting, or selling — we provide clear, honest, and helpful assistance</p>
        <div className=' w-[85%] mx-auto md:mx-0 md:w-full mt-4'>
          <form onSubmit={handleSubmit} className='w-full flex'>
            <input type="email" name="email" id="email" required
            placeholder='Enter Your Email'
            className='border md:px-5 md:py-3 border-gray-400 outline-none rounded-md px-3 py-1.5 w-[70%] md:w-[55%]'
            />
            <button className='bg-[#FF5A3C] px-3 py-1.5 md:px-5 md:py-3 font-medium text-white rounded-md' type="submit">
              submit
            </button>
          </form>
        </div>
          </div>
       </div>
      </div>
    </div>
  );
};

export default Consult;