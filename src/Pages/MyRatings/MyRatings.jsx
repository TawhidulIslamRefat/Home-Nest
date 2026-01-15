import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaStar } from "react-icons/fa6";
import Loading from "../../Components/Loading/Loading";

const MyRatings = () => {
  const { user } = use(AuthContext);
  const [myRatings, setMyRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://home-server-two.vercel.app/my-ratings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyRatings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" w-[95%] md:w-10/12 px-0 md:px-3 mx-auto py-10 overflow-x-hidden">
      <title>My-Rating</title>
      <h1
        className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-10"
        data-aos="fade-down"
        data-aos-easing="linear"
      >
        My <span className="text-[#FF5A3C]">Ratings & Reviews</span>
      </h1>
      {myRatings.length === 0 && (
        <p
          className="text-center text-gray-500 text-sm sm:text-lg md:text-xl"
          data-aos="fade-left"
        >
          You haven't rated any property yet.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {myRatings.map((r, index) => (
          <div
            key={index}
            className="bg-white shadow-xl border border-gray-100 dark:bg-[#23272B] rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            data-aos="fade-up"
          >
            <div className="w-full h-44 rounded-lg overflow-hidden mb-4">
              <img
                src={r.propertyImage}
                alt="image"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1f1f1f] dark:text-white">
              {r.propertyName}
            </h2>
            <div className="flex items-center gap-2 mt-2 text-yellow-500">
              {[...Array(parseInt(r.rating))].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-black font-medium text-sm sm:text-[16px] dark:text-[#FF5A3C]">
                {r.rating}/5
              </span>
            </div>
            <p className="text-gray-700 mt-3 italic dark:text-gray-300 text-sm sm:text-[16px]">
              "{r.review.slice(0, 100) + "..."}"
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={r.userPhoto}
                className="w-10 h-10 rounded-full border"
              />
              <div>
                <p className="font-medium text-sm sm:text-lg">{r.userName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  {new Date(r.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <span className="inline-block mt-4 px-2 py-0.5 sm:px-4 sm:py-1 font-medium rounded-full bg-[#FF5A3C]/10 text-[#FF5A3C] text-xs sm:text-sm">
              Reviewed Property
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRatings;
