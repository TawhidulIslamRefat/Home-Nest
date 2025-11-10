import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const AllPropertiesCard = ({ property }) => {
  console.log(property);
  const {
    _id,
    propertyName,
    category,
    price,
    location,
    description,
    image,
    postedBy,
  } = property;
  return (
    <div className="flex">
      <div className=" rounded-lg shadow-2xl bg-white hover:shadow-2xl transition overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt={propertyName}
            className="w-full h-80 object-cover"
          />
          <span
            className={`absolute top-3 left-3 text-xs px-4 py-1.5 rounded-sm text-white text-[16px] font-medium ${
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
          <h2 className="text-2xl font-semibold text-[#1f1f1f]">
            {propertyName}
          </h2>
          <p className="text-gray-500 text-[15px] leading-6 font-medium">
            {description?.slice(0, 60)}...
          </p>
          <div className="flex items-center justify-between gap-2 text-gray-600 text-sm font-medium">
            <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
              <FaLocationDot className="text-[#FF5A3C]" />
              <span>{location}</span>
            </div>
            <div className="flex flex-col mr-4">
                <span className="font-bold">Posted By  :</span>
                <span> {postedBy.name}</span>
            </div>
          </div>
          <p className="text-lg font-bold text-[#FF5A3C]">${price}</p>
          <Link
            to={``}
            className="inline-block text-center w-full bg-[#FF5A3C] text-white font-medium py-2 rounded-md hover:bg-[#e24a39] transition"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesCard;
