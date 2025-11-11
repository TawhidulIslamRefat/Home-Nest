import SecondBanner from "../../Components/SecendBanner/SecondBanner";
import AllPropertiesCard from "../../Components/AllPropertiesCard/AllPropertiesCard";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import search from "../../../public/Searching.json";
import { Link } from "react-router";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/properties?search=${searchText}&sort=${sort}`)
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, [searchText, sort]);
  return (
    <div>
      <section>
        <SecondBanner
          setSearchText={setSearchText}
          setSort={setSort}
        ></SecondBanner>
      </section>
      <section>
        <div className="text-center mt-15 ">
          <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xl p-1 rounded-xl">
            all properties
          </span>
          <h2 className="text-4xl font-bold mt-5 text-center">
            Explore Properties
          </h2>
        </div>

          
        {properties.length === 0 ? (<>
        <div className="w-[800px] flex flex-col justify-center items-center mx-auto">
           <Lottie animationData={search} loop={true} />
           <Link to='/'  className="btn bg-[#FF5A3C] text-white px-10 py-5">Go Back</Link>
        </div>
        <h1 className="text-2xl font-semibold text-center mb-20 mt-10 text-gray-600">No Properties Found.Try different search keyword</h1>
          </>
        ) : (
          <div className="w-11/12 mx-auto grid grid-cols-4 gap-10 my-20">
            {properties.map((property) => (
              <AllPropertiesCard
                key={property._id}
                property={property}
              ></AllPropertiesCard>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AllProperties;
