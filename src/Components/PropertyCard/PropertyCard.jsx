import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const PropertyCard = ({property}) => {
    const {_id,propertyName,category,price,location,description,image} = property;
    return (
        <div className=' rounded-lg shadow-sm bg-white dark:bg-[#1D232A] dark:border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full'>
         <div className='relative'>
            <img src={image} alt={propertyName} className='w-full rounded-t-lg h-52 sm:h-64 md:h-42 lg:h-60 object-cover' />
            <span className={`absolute top-3 left-3 text-xs sm:text-sm px-3 md:px-4 py-1.5 rounded-sm text-white text-[16px] font-medium ${category === "Sale" ? "bg-[#FF5A3C]" : category === "Rent" ? "bg-green-500" : "bg-blue-300"}`}>
             For {category}
            </span>
         </div>
         <div className='p-4 space-y-2 md:space-y-3'>
          <h2 className='text-lg md:text-2xl font-semibold text-[#1f1f1f] dark:text-white'>{propertyName}</h2>
          <p className='text-gray-500 text-xs md:text-[15px] leading-6 font-medium dark:text-gray-300'>
         {description?.slice(0,60)}...
          </p>
          <div className='flex items-center gap-2 text-gray-600 text-xs md:text-sm font-medium'>
             <FaLocationDot className='text-[#FF5A3C] ' />
             <span className='dark:text-gray-300'>{location}</span>
          </div>
          <p className='text-sm md:text-lg font-bold text-[#FF5A3C]'>${price}</p>
          <Link 
          to={`/properties/${_id}`}
          className='inline-block text-xs md:text-sm text-center w-full bg-[#FF5A3C] text-white font-medium py-1 md:py-2 rounded-md hover:bg-[#e24a39] transition'
          >
          View Details
          </Link>
         </div>
        </div>
    
  );
};

export default PropertyCard;