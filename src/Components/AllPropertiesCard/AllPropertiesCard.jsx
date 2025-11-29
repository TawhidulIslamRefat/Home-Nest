import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const AllPropertiesCard = ({ property }) => {
  // console.log(property);
  const {
    _id,
    propertyName,
    category,
    price,
    location,
    image,
    postedBy,
  } = property;
  return (
    <div className="flex">
      <div className=" rounded-lg shadow-sm bg-white dark:bg-[#1D232A] dark:border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between" data-aos="fade-up">
        <div className="relative">
          <img
            src={image}
            alt={propertyName}
            className="w-100 h-70 object-cover"
          />
          <span
            className={`absolute top-3 left-3 text-xs px-2 md:px-4 py-1.5 rounded-sm text-white md:text-[16px] font-medium ${
              category === "Sale"
                ? "bg-[#FF5A3C]"
                : category === "Rent"
                ? "bg-green-500"
                : "bg-blue-600"
            }`}
          >
            For {category}
          </span>
        </div>
        <div className="p-4 space-y-3">
          <h2 className="text-lg md:text-2xl font-semibold text-[#1f1f1f] dark:text-white">
            {propertyName}
          </h2>
          <div className="flex items-center justify-between gap-2 text-gray-600 text-sm font-medium">
            <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm font-medium">
              <FaLocationDot className="text-[#FF5A3C]" />
              <span className="dark:text-gray-300">{location}</span>
            </div>
            <div className="flex flex-col mr-4 dark:text-gray-300 text-xs sm:text-sm">
                <span className="font-bold">Posted By  :</span>
                <span> {postedBy.name}</span>
            </div>
          </div>
          <p className="text-sm sm:text-lg font-bold text-[#FF5A3C]">${price}</p>
          <Link
           to={`/properties/${_id}`}
            className="inline-block text-center w-full bg-[#FF5A3C] text-white font-medium text-xs sm:text-sm py-1 md:py-2 rounded-md hover:bg-[#e24a39] transition"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesCard;
