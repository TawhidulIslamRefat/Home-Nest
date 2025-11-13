import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";

const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [property, setProperty] = useState({});
  const [rating, setRating] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetch(`http://localhost:3000/properties/${id}`).then((res)=> res.json()),
     fetch(`http://localhost:3000/ratings/${id}`).then(res => res.json())
    ])
    .then(([propertyData,ratingData])=>{
      setProperty(propertyData);
      setRating(ratingData)
    })
    .finally(()=> setLoading(false))
  }, [id]);

  const handleAddRating = (e) => {
    e.preventDefault();
    const ratingInfo = {
      propertyId:id,
      propertyName: property.propertyName,
      propertyImage: property.image,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      rating: e.target.rating.value,
      review: e.target.review.value,
      date: new Date().toISOString(),
    };
    fetch("http://localhost:3000/ratings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ratingInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setRating([...rating,ratingInfo])
        Swal.fire("Review Added ✅", "Thanks for your feedback!", "success");
        e.target.reset();
      });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-5xl mx-auto py-10 mt-10 md:mt-25">
      <img
        src={property.image}
        alt=""
        className="w-[99%] mx-auto lg:mx-0 lg:w-full h-[350px] md:h-[450px] rounded-md object-cover"
      />
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mt-6 ml-1 ">{property.propertyName}</h1>
      <p className="text-gray-600 my-5 loading-7 font-medium dark:text-gray-300 text-xs sm:text-sm mx-2">
        {property.description}
      </p>
      <div className="flex gap-10 text-sm sm:text-lg font-semibold mt-4 p-4 sm:p-2 md:p-2 lg:p-0">
        <div className="flex flex-col sm:flex-row gap-10">
          <p> 📍 {property.location}</p>
        <p className="font-bold"> 💰 ${property.price}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <p> 🏷 Category : {property.category}</p>
        <p> Posted On : {new Date(property.postedDate).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 my-5 p-4">
        <div>
          <img
            className="w-10 h-10 sm:w-15 sm:h-15 rounded-full"
            src={property.postedBy?.photo}
            alt="user photo"
          />
        </div>
        <div className="">
          <p className="text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-300">
            {property.postedBy?.name}
          </p>
          <p className= " text-xs sm:text-sm text-gray-600 dark:text-gray-300">{property.postedBy?.email}</p>
        </div>
      </div>
        <h3 className="text-xl sm:text-3xl font-bold mb-4 text-center">Ratings & Reviews</h3>

        {
          rating.length===0 ? (
            <p className="text-sm sm:text-xl text-gray-600 text-center xl:text-left">No reviews yet.</p>
          ):(
            <div className="space-y-4">
           {
            rating.slice(0,3).map((r,index)=>(
              <div key={index} className="border w-[98%] mx-auto lg:mx-0 lg:w-full p-4 rounded-lg bg-white dark:bg-[#23272B] shadow-md flex gap-4 items-start">
               <div>
                <img src={r.userPhoto} alt={r.userName} 
                 className="w-12 h-12 rounded-full"
                />
               </div>
               <div>
               <p className="font-semibold text-sm sm:text-lg">{r.userName}</p>
               <p className="text-[#FF5A3C] font-semibold text-sm sm:text-lg sm:font-bold"> ⭐ {r.rating}/5</p>
               <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                   {r.review.slice(0,70)+("...")}
               </p>
               <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                 Date :  {new Date(r.date).toLocaleDateString()}
               </p>
               </div>
              </div>
            ))
           }
            </div>
          )
        }
        
      <div className="mt-12 w-[97%] xl:w-full mx-auto sm:mx-auto bg-white rounded-lg shadow-xl border-2 dark:bg-[#23272B] border-gray-300 p-10">
        <form onSubmit={handleAddRating} className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Rate This Propert</h3>
            <label className="text-sm sm:text-xl font-semibold">Choose Rating</label>
          <select
            name="rating"
            className="select select-bordered w-full my-3 text-xs sm:text-sm"
            required
          >
            <option value="">Choose Rating</option>
            <option value="5">⭐ 5 (Excellent)</option>
            <option value="4">⭐ 4 (Good)</option>
            <option value="3">⭐ 3 (Avarage)</option>
            <option value="2">⭐ 2 (Poor)</option>
            <option value="1">⭐ 1 (Vary Bad)</option>
          </select>
          <label className="text-sm sm:text-xl font-semibold">Review Now</label>
          <textarea
            name="review"
            className="textarea textarea-bordered w-full mt-4 text-xs sm:text-sm"
            placeholder="write a short review ..."
            required
          ></textarea>

          <button className="btn bg-[#FF5A3C] hover:bg-[#e24a30] text-white w-full text-xs sm:text-sm ">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
