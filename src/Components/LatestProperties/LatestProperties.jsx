import { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const LatestProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://home-server-two.vercel.app/latest-properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className=" w-[90%] sm:w-[95%] 2xl:w-10/12 mx-auto">
      <div
        className="text-center mb-10 mt-15 md:mt-20 md:mb-20"
        data-aos="fade-up"
      >
        <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xm md:text-xl p-1 rounded-xl">
          Latest Property
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-3 md:mt-5 text-center">
          Latest Properties
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6  px-2">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProperties;
