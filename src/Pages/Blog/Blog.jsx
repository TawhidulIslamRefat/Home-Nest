import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Tips for First-Time Home Buyers",
    excerpt:
      "Buying your first home can be overwhelming. Here are the most important tips to help you make the right decision.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    date: "Jan 5, 2026",
    category: "Buying Guide",
  },
  {
    id: 2,
    title: "How to Increase Your Property Value Before Selling",
    excerpt:
      "Simple renovations and smart upgrades can significantly boost your property’s market value.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    date: "Jan 2, 2026",
    category: "Selling Tips",
  },
  {
    id: 3,
    title: "Best Locations to Invest in Real Estate in 2026",
    excerpt:
      "Discover the fastest-growing areas and cities that promise high returns on real estate investment.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    date: "Dec 28, 2025",
    category: "Investment",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#1D232A] dark:bg-[] min-h-screen">
      <div className="bg-linear-to-br from-[#FF5A3C] via-[#ff6b4a] to-[#ff7a5c] text-white py-20">
        <div className="w-[98%] md:w-10/12 mx-auto px-6 text-center">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real Estate Insights & Blogs
          </h1>
          <p className="text-blue-100 text-sm md:text-lg max-w-3xl mx-auto">
            Stay updated with the latest property trends, buying guides,
            investment tips, and real estate news from HomeNest.
          </p>
        </div>
      </div>

      <div className="w-[98%] md:w-10/12 mx-auto px-2 md:px-6 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden md:flex">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Featured Blog"
            className="md:w-1/2 h-72 md:h-auto object-cover"
          />
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[#FF5A3C] font-semibold mb-2">
              Featured Article
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Ultimate Guide to Buying Your Dream Home
            </h2>
            <p className="text-gray-600 dark:text-white/98 mb-6">
              From budgeting to final paperwork, this complete guide walks you
              through every step of purchasing your perfect home.
            </p>
            <button className=" btn border-none self-start bg-[#FF5A3C] text-white px-6 py-3 rounded-full  transition">
              Read Full Article
            </button>
          </div>
        </div>
      </div>

      <div className="w-[98%] md:w-10/12 mx-auto px-2 md:px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-white/98 mb-2">
                  <span>{blog.date}</span>
                  <span className="text-[#FF5A3C] font-medium">
                    {blog.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-white/98 mb-4">
                  {blog.excerpt}
                </p>
                <button className="text-[#FF5A3C] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
