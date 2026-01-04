import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { FaHome, FaMapMarkerAlt, FaDollarSign, FaImage, FaUser, FaEnvelope, FaPlus } from "react-icons/fa";

const AddProperty = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddProperty = (e) => {
    e.preventDefault();

    const newProperty = {
      propertyName: e.target.propertyName.value,
      description: e.target.description.value,
      category: e.target.category.value,
      price: parseFloat(e.target.price.value),
      location: e.target.location.value,
      image: e.target.image.value,
      postedBy: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
      postedDate: new Date().toISOString(),
    };
    fetch("https://home-nest-server-psi.vercel.app/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Property Added !",
          text: "Your property listing has been successfully posted",
          icon: "success",
          confirmButtonColor: "#FF5A3C",
        });
        navigate("/all-properties");
      });
  };
  return (
    <div className="bg-linear-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 min-h-screen ">
      <title>Add-Product</title>
      <div className="w-[97%] lg:w-3xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-5 md:p-10 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#FF5A3C]/10 to-red-500/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-orange-400/10 to-[#FF5A3C]/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="text-center mb-8 relative">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#FF5A3C] to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaPlus />
            New Listing
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold bg-linear-to-r from-gray-900 via-[#FF5A3C] to-red-600 bg-clip-text text-transparent dark:from-white dark:via-orange-400 dark:to-red-400">
            Add New <span className="text-[#FF5A3C]">Property</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Fill in the details to list your property</p>
        </div>

        <form onSubmit={handleAddProperty} className="w-full space-y-6">
          <div className="relative">
            <label className="flex items-center gap-2 font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
              <FaHome className="text-[#FF5A3C]" />
              Property Name
            </label>
            <input
              type="text"
              name="propertyName"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#FF5A3C] focus:ring-2 focus:ring-[#FF5A3C]/20 transition-all duration-300"
              placeholder="Enter property name"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="flex items-center gap-2 font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-4 h-4 bg-linear-to-r from-[#FF5A3C] to-red-500 rounded"></div>
                Category
              </label>
              <select
                name="category"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#FF5A3C] focus:ring-2 focus:ring-[#FF5A3C]/20 transition-all duration-300"
                required
              >
                <option disabled selected className="text-gray-500">
                  Select Category
                </option>
                <option value="Rent">🏠 For Rent</option>
                <option value="Sale">🏡 For Sale</option>
                <option value="Commercial">🏢 Commercial</option>
                <option value="Land">🌍 Land</option>
              </select>
            </div>
            <div className="relative">
              <label className="flex items-center gap-2 font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
                <FaDollarSign className="text-[#FF5A3C]" />
                Price (USD)
              </label>
              <input
                type="number"
                name="price"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#FF5A3C] focus:ring-2 focus:ring-[#FF5A3C]/20 transition-all duration-300"
                placeholder="e.g 15000"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="flex items-center gap-2 font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
              <FaMapMarkerAlt className="text-[#FF5A3C]" />
              Location
            </label>
            <input
              type="text"
              name="location"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#FF5A3C] focus:ring-2 focus:ring-[#FF5A3C]/20 transition-all duration-300"
              placeholder="City / Area / Address"
              required
            />
          </div>

          <div className="relative">
            <label className="flex items-center gap-2 font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="w-4 h-4 bg-linear-to-r from-blue-500 to-purple-500 rounded"></div>
              Description
            </label>
            <textarea
              name="description"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#FF5A3C] focus:ring-2 focus:ring-[#FF5A3C]/20 transition-all duration-300 resize-none"
              rows="4"
              placeholder="Write details about the property..."
              required
            ></textarea>
          </div>

          <div className="relative">
            <label className="flex items-center gap-2 font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
              <FaImage className="text-[#FF5A3C]" />
              Image URL
            </label>
            <input
              type="text"
              name="image"
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#FF5A3C] focus:ring-2 focus:ring-[#FF5A3C]/20 transition-all duration-300"
              placeholder="Enter image url"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="flex items-center gap-2 font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
                <FaUser className="text-[#FF5A3C]" />
                Your Name
              </label>
              <input
                type="text"
                value={user?.displayName}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-not-allowed"
                readOnly
              />
            </div>
            <div className="relative">
              <label className="flex items-center gap-2 font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
                <FaEnvelope className="text-[#FF5A3C]" />
                Your Email
              </label>
              <input
                type="email"
                value={user?.email}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-not-allowed"
                readOnly
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-[#FF5A3C] to-red-500 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl text-sm sm:text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
            >
              <FaPlus />
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
