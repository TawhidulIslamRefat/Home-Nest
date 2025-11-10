import React, { use } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const LatestProperties = ({ latestPropertiesPromise }) => {
  const properties = use(latestPropertiesPromise);
  console.log(properties);
  return (
    <div className="w-9/12 mx-auto">
      <div className="text-center my-20">
        <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xl p-1 rounded-xl">
          Latest Property
        </span>
        <h2 className="text-4xl font-bold mt-5 text-center">
          Latest Properties
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-16">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProperties;
