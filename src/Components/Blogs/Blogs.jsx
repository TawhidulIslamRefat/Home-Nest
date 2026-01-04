import React from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const homeBlogs = [
  {
    id: 3,
    title: "Increase Property Value Before Selling",
    excerpt:
      "Smart upgrades and renovations that can significantly increase your selling price.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    date: "Jan 2, 2026",
  },
  {
    id: 4,
    title: "Best Cities for Real Estate Investment in 2026",
    excerpt:
      "Explore fast-growing cities offering high ROI and long-term investment potential.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    date: "Dec 28, 2025",
  },
  {
    id: 5,
    title: "First-Time Home Buyer Mistakes to Avoid",
    excerpt:
      "Avoid common mistakes that first-time buyers make when purchasing their dream home.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    date: "Jan 6, 2026",
  },
  {
    id: 6,
    title: "Modern Home Design Trends Buyers Love",
    excerpt:
      "Discover the most popular home design trends that attract buyers and boost resale value.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    date: "Jan 8, 2026",
  },
];

const Blogs = () => {
  return (
    <section className="pt-20 pb-5">
      <div className="w-[98%] md:w-10/12 mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="text-[#FF5A3C]">Blogs & Insights</span>
          </h2>
          <p className="text-gray-600 dark:text-white/98 max-w-2xl mx-auto">
            Get expert real estate advice, market trends, and buying guides to
            help you make smarter property decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {homeBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/98 mb-3">
                  <FaCalendarAlt />
                  {blog.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white/98  mb-3 group-hover:text-[#FF5A3C] transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-white/98 mb-5 text-sm">{blog.excerpt}</p>

                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 text-[#FF5A3C] font-semibold hover:underline"
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/blog"
            className="inline-block bg-[#FF5A3C] text-white px-8 py-3 rounded-xl hover:bg-red-600 transition font-semibold"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
