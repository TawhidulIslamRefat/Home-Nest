import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaLocationArrow } from "react-icons/fa6";
import Loading from "../../Components/Loading/Loading";

const MyProperties = () => {
  const { user } = use(AuthContext);
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://home-nest-server-psi.vercel.app/properties?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyProperties(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This property will be permanently remove !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF5A3C",
      cancelButtonColor: "#555",
      confirmButtonText: "Yes,Delete !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://home-nest-server-psi.vercel.app/properties/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setMyProperties(myProperties.filter((p) => p._id !== id));
            Swal.fire("Deleted!", "Property has been removed.", "success");
          });
      }
    });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-[90%] lg:w-[95%] 2xl:w-10/12 px-0 md:px-3 mx-auto my-10">
      <title>My-Properties</title>
      <h1
        className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        My <span className="text-[#FF5A3C]">Properties</span>
      </h1>

      {myProperties.length === 0 ? (
        <>
          <div
            className=" flex flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <p className="text-center text-gray-500 text-sm sm:text-lg md:text-xl">
              You haven't added any property yet
            </p>
            <div>
              <Link
                to="/dashboard/add-property"
                className="btn px-10 py-5 mt-10 text-white  bg-[#FF5A3C]"
              >
                Add Property
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-4 md:gap-8">
          {myProperties.map((property) => (
            <div
              key={property._id}
              className="border rounded-lg shadow-md p-5 bg-white dark:bg-[#23272B] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              data-aos="fade-down"
              data-aos-easing="linear"
            >
              <img
                src={property.image}
                alt={property.propertyName}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className=" text-lg sm:text-xl md:text-2xl font-bold mt-3">
                {property.propertyName}
              </h2>
              <p className="text-gray-600 text-sm sm:text-[16px] my-1 dark:text-gray-300">
                {" "}
                <span className="font-semibold dark:text-gray-300">
                  Category:
                </span>{" "}
                {property.category}
              </p>
              <p className="text-gray-600 flex items-center gap-2 text-sm sm:text-[16px]dark:text-gray-300">
                <span>
                  <FaLocationArrow className="text-[#FF5A3C] text-xl"></FaLocationArrow>
                </span>{" "}
                {property.location}
              </p>
              <p className="text-[#FF5A3C] font-bold text-sm sm:text-lg my-1">
                Price: ${property.price}
              </p>
              <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-lg">
                {" "}
                <span className="font-semibold">Posted :</span>{" "}
                {new Date(property.postedDate).toLocaleDateString()}
              </p>
              <div className=" flex gap-3  mt-2 mb-2">
                <Link
                  to={`/properties/${property._id}`}
                  className="btn btn-sm bg-blue-500 text-white flex-1"
                >
                  {" "}
                  View Details
                </Link>
                <Link
                  to={`/properties/${property._id}/edit`}
                  className="btn btn-sm bg-yellow-500 text-white flex-1"
                >
                  {" "}
                  Update
                </Link>
              </div>
              <button
                onClick={() => handleDelete(property._id)}
                className="btn btn-sm bg-rose-500 text-white w-full"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProperties;
