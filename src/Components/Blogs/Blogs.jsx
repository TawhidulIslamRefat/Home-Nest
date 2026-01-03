import React from "react";
import { Link } from "react-router";

const blogs = [
  {
    id: 1,
    title: "Top 10 Tips for First-Time Home Buyers",
    description:
      "Buying your first home can be overwhelming. Here are 10 essential tips to help you navigate the process smoothly...",
    image:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg",
    date: "Jan 2, 2026",
  },
  {
    id: 2,
    title: "How to Price Your Property Correctly",
    description:
      "Pricing your property correctly can make all the difference. Learn the key strategies to attract buyers quickly...",
    image:
      "https://www.shutterstock.com/image-photo/american-home-sunset-600nw-2313189101.jpg",
    date: "Dec 28, 2025",
  },
  {
    id: 3,
    title: "Benefits of Renting vs Buying in 2026",
    description:
      "Are you wondering whether to rent or buy? This guide will help you weigh the pros and cons for smarter decisions...",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240612/pngtree-luxurious-house-night-view-with-sufficient-light-image_15867502.jpg",
    date: "Dec 15, 2025",
  },
  {
    id: 4,
    title: "How to Stage Your Home for a Quick Sale",
    description:
      "Staging your home can increase interest and help sell faster. Learn the key steps to make your property irresistible...",
    image:
      "https://media.istockphoto.com/id/2175973016/photo/modern-luxury-home-exterior-at-sunset.jpg?s=612x612&w=0&k=20&c=6D40lfnRxmyM3kW3BOIK45fEA7K2p9uvOOcCTufwJvw=",
    date: "Jan 5, 2026",
  },
];

const Blogs = () => {
  return (
    <section className="bg-base-100 pt-24 pb-3">
      <div className="w-[98%] md:w-10/12 mx-auto px-6 text-center">
       <span className=" bg-[#FFEBE7] text-center text-[#FF5A3C] text-xm md:text-xl p-1 rounded-xl">
          Blogs
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-5 font-bold mb-12 text-gray-900 dark:text-white">
          Latest Blogs & Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-[#1D232A] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col dark:border"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 md:h-60 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-500 dark:text-gray-300 text-sm mb-2">
                  {blog.date}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-1 mb-4">
                  {blog.description.slice(0, 100)}...
                </p>
                <Link to="#"
                  className="mt-auto inline-block text-center w-full bg-[#FF5A3C] text-white py-2 rounded-md hover:bg-[#e24a39] transition font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
