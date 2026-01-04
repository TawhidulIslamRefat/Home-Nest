import React from "react";
import { Link } from "react-router";

const categories = [
  {
    id: 1,
    title: "For Sale",
    count: 320,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    link: "/properties/sale",
  },
  {
    id: 2,
    title: "For Rent",
    count: 180,
    image:
      "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg",
    link: "/properties/rent",
  },
  {
    id: 3,
    title: "Commercial",
    count: 50,
    image:
      "https://www.ampquartz.com/wp-content/uploads/2025/03/Choosing-The-Perfect-Home-1024x512.jpeg.webp",
    link: "/properties/commercial",
  },
  {
    id: 4,
    title: "Land",
    count: 70,
    image:
      "https://da28rauy2a860.cloudfront.net/completehome/wp-content/uploads/2021/03/03114534/Millbrook-Homes-58series-1.jpg",
    link: "/properties/land",
  },
];

const Categories = () => {
  return (
    <section className="bg-base-100 py-22">
      <div className="w-[98%] md:w-10/12 mx-auto px-2 text-center">
      <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xm md:text-xl p-1 rounded-xl">
          Categories
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-5 font-bold mb-16 text-gray-900 dark:text-white">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to='/all-properties'
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-52 md:h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4 transition-opacity opacity-0 hover:opacity-100">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-sm md:text-base">{category.count} Properties</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
