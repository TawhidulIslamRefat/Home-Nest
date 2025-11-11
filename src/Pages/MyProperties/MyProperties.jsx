import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaLocationArrow } from "react-icons/fa6";

const MyProperties = () => {
  const { user } = use(AuthContext);
  const [myProperties, setMyProperties] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/properties?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyProperties(data));
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
        fetch(`http://localhost:3000/properties/${id}`, {
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

  return (
    <div className="w-10/12 mx-auto my-16">
      <h1 className="text-4xl font-bold text-center mb-10">My Properties</h1>

      {myProperties.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">
          You haven't added any property yet
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {myProperties.map((property) => (
            <div
              key={property._id}
              className="border rounded-lg shadow-md p-5 bg-white"
            >
              <img
                src={property.image}
                alt={property.propertyName}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-bold mt-3">
                {property.propertyName}
              </h2>
              <p className="text-gray-600 text-[16px] my-1"> <span className="font-semibold">Category:</span> {property.category}</p>
              <p className="text-gray-600 flex items-center gap-2 text-[16px]"><span><FaLocationArrow className="text-[#FF5A3C] text-xl"></FaLocationArrow></span> {property.location}</p>
              <p className="text-[#FF5A3C] font-bold text-lg my-1">Price: ${property.price}</p>
              <p className="text-gray-500"> <span className="font-semibold">Posted :</span> {new Date(property.postedDate).toLocaleDateString()}</p>
              <div className=" flex gap-3 mt-5 mb-2">
                <Link 
                to={`/properties/${property._id}`}
                className="btn btn-sm bg-blue-500 text-white flex-1"
                > View Details
                </Link>
                <Link 
                to={`/properties/${property._id}`}
                className="btn btn-sm bg-yellow-500 text-white flex-1"
                > Update
                </Link>
              </div>
                    <button 
                    onClick={()=> handleDelete(property._id)}
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
