import { data, useLoaderData } from "react-router";
import SecondBanner from "../../Components/SecendBanner/SecondBanner";
import AllPropertiesCard from "../../Components/AllPropertiesCard/AllPropertiesCard";
import { useEffect, useState } from "react";

const AllProperties = () => {
    const [properties,setProperties] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [sort,setSort] = useState("");
//   const properties = useLoaderData();
//   console.log(properties);
  useEffect(()=>{
    fetch(`http://localhost:3000/properties?search=${searchText}&sort=${sort}`)
    .then((res)=>res.json())
    .then((data)=> setProperties(data));
  },[searchText,sort])
  return (
    <div>
      <section>
        <SecondBanner
        setSearchText={setSearchText}
        setSort={setSort}
        ></SecondBanner>
      </section>
      <section>
        <div className="text-center mt-30 mb-20">
          <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xl p-1 rounded-xl">
            all properties
          </span>
          <h2 className="text-4xl font-bold mt-5 text-center">
            Explore Properties
          </h2>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-4 gap-10 my-20">
          {properties.map((property) => (
            <AllPropertiesCard
              key={property._id}
              property={property}
            ></AllPropertiesCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProperties;
