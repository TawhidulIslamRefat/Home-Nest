import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";

const UpdateProperty = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`https://home-nest-server-psi.vercel.app/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, [id]);

  const hanldeUpdate = (e) => {
    e.preventDefault();

    const updatedProperty = {
      propertyName: e.target.propertyName.value,
      description: e.target.description.value,
      category: e.target.category.value,
      price: parseFloat(e.target.price.value),
      location: e.target.location.value,
      image: e.target.image.value,
    };

    fetch(`https://home-nest-server-psi.vercel.app/properties/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProperty),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Updated Successfully!",
          icon: "success",
          confirmButtonColor: "#FF5A3C",
        });
        navigate(`/properties/${id}`);
      });
  };

  if (!property) {
    return <Loading></Loading>;
  }
  return (
    <div className=" dark:bg-[#1D232A] py-14 min-h-screen mt-20">
      <title>Update-Property</title>
      <div className=" w-[97%] lg:w-3xl mx-auto bg-white shadow-xl dark:bg-[#23272B] rounded-xl p-5 md:p-10 border border-white">
        <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-8">
          Update <span className="text-[#FF5A3C]">Property</span>
        </h1>

        <form onSubmit={hanldeUpdate}>
          <div>
            <label className="block font-semibold mb-1 text-sm">
              {" "}
              Property Name
            </label>
            <input
              type="text"
              name="propertyName"
              defaultValue={property.propertyName}
              className="input input-bordered w-full"
              placeholder="Enter property name"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-5">
            <div>
              <label className="block font-semibold mb-1 text-sm">
                {" "}
                Category
              </label>
              <select
                name="category"
                defaultValue={property.category}
                className="select select-bordered w-full"
                required
              >
                <option disabled selected>
                  Select Category
                </option>
                <option>Rent</option>
                <option>Sale</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-sm">
                {" "}
                Price (USD)
              </label>
              <input
                type="number"
                name="price"
                defaultValue={property.price}
                className="input input-bordered w-full"
                placeholder="e.g 15000"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1"> Location</label>
            <input
              type="text"
              name="location"
              defaultValue={property.location}
              className="input input-bordered w-full"
              placeholder="City / Area / Address"
              required
            />
          </div>
          <div>
            <label className="block font-semibold my-5 text-sm">
              Description{" "}
            </label>
            <textarea
              name="description"
              defaultValue={property.description}
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="White details about the property..."
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold mb-1 mt-4 text-sm">
              {" "}
              Image URL
            </label>
            <input
              type="text"
              name="image"
              defaultValue={property.image}
              className="input input-bordered w-full"
              placeholder="Enter image url"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <input
              type="text"
              value={user?.displayName}
              className="input input-bordered w-full bg-gray-100 dark:bg-[#1D232A]"
              readOnly
            />
            <input
              type="email"
              value={user?.email}
              className="input input-bordered w-full bg-gray-100 dark:bg-[#1D232A]"
              readOnly
            />
          </div>
          <button
            type="submit"
            className="btn w-full bg-[#FF5A3C] hover:bg-[#e24a30] text-white text-sm sm:text-lg py-1.5 md:py-3"
          >
            Update Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
