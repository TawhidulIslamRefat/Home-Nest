import SecondBanner from "../../Components/SecendBanner/SecondBanner";
import AllPropertiesCard from "../../Components/AllPropertiesCard/AllPropertiesCard";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import search from "../../../public/Searching.json";
import { Link } from "react-router";
import Loading from "../../Components/Loading/Loading";
import Swal from "sweetalert2";
import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp,
  FaMapMarkerAlt,
  FaDollarSign,
  FaHome,
  FaCalendarAlt,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
} from "react-icons/fa";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    location: "",
    dateFrom: "",
    dateTo: "",
    rating: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://home-nest-server-psi.vercel.app/properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          error,
          confirmButtonColor: "#FF5A3C",
        })
      )
      .finally(() => setLoading(false));
  }, [itemsPerPage]);

  useEffect(() => {
    const applyFiltersWithDelay = () => {
      setFilterLoading(true);

      setTimeout(() => {
        let filtered = [...properties];
        if (searchText) {
          filtered = filtered.filter(
            (property) =>
              property.propertyName
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
              property.location
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
              property.description
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
          );
        }

        if (filters.category) {
          filtered = filtered.filter(
            (property) => property.category === filters.category
          );
        }

        if (filters.minPrice) {
          filtered = filtered.filter(
            (property) => property.price >= parseInt(filters.minPrice)
          );
        }

        if (filters.maxPrice) {
          filtered = filtered.filter(
            (property) => property.price <= parseInt(filters.maxPrice)
          );
        }

        if (filters.location) {
          filtered = filtered.filter((property) =>
            property.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())
          );
        }

        if (filters.dateFrom) {
          filtered = filtered.filter(
            (property) =>
              new Date(property.postedDate) >= new Date(filters.dateFrom)
          );
        }

        if (filters.dateTo) {
          filtered = filtered.filter(
            (property) =>
              new Date(property.postedDate) <= new Date(filters.dateTo)
          );
        }

        if (sort) {
          switch (sort) {
            case "price-asc":
              filtered.sort((a, b) => a.price - b.price);
              break;
            case "price-desc":
              filtered.sort((a, b) => b.price - a.price);
              break;
            case "date-desc":
              filtered.sort(
                (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
              );
              break;
            case "date-asc":
              filtered.sort(
                (a, b) => new Date(a.postedDate) - new Date(b.postedDate)
              );
              break;
            case "name-asc":
              filtered.sort((a, b) =>
                a.propertyName.localeCompare(b.propertyName)
              );
              break;
            case "name-desc":
              filtered.sort((a, b) =>
                b.propertyName.localeCompare(a.propertyName)
              );
              break;
            default:
              break;
          }
        }

        setFilteredProperties(filtered);
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
        setCurrentPage(1);
        setFilterLoading(false);
      }, 300);
    };

    if (properties.length > 0) {
      applyFiltersWithDelay();
    }
  }, [searchText, filters, sort, properties, itemsPerPage]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      location: "",
      dateFrom: "",
      dateTo: "",
      rating: "",
    });
    setSearchText("");
    setSort("");
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <title>All-Properties</title>

      <div className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 pt-20">
        <div className="w-[98%] md:w-10/12 mx-auto px-3 py-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#FFEBE7] text-center text-[#FF5A3C] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              All Properties
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Properties
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find your perfect property from our extensive collection. Use
              filters to narrow down your search.
            </p>
          </div>

          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search by property name, location, or description..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#FF5A3C] focus:ring-2 focus:ring-[#FF5A3C]/20 transition-all"
              />
              {filterLoading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <FaSpinner className="animate-spin text-[#FF5A3C]" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  showFilters
                    ? "bg-[#FF5A3C] text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <FaFilter />
                Filters
              </button>

              <div className="text-gray-600 dark:text-gray-300">
                {filterLoading ? (
                  <div className="flex items-center gap-2">
                    <FaSpinner className="animate-spin text-[#FF5A3C]" />
                    Searching...
                  </div>
                ) : (
                  `${filteredProperties.length} properties found`
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#FF5A3C] focus:ring-2 focus:ring-[#FF5A3C]/20"
              >
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {showFilters && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 mb-6 relative">
              {filterLoading && (
                <div className="filter-loading-overlay">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaHome className="text-[#FF5A3C]" />
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#FF5A3C]"
                  >
                    <option value="">All Categories</option>
                    <option value="Rent">For Rent</option>
                    <option value="Sale">For Sale</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Land">Land</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaDollarSign className="text-[#FF5A3C]" />
                    Min Price
                  </label>
                  <input
                    type="number"
                    value={filters.minPrice}
                    onChange={(e) =>
                      handleFilterChange("minPrice", e.target.value)
                    }
                    placeholder="Min Price"
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#FF5A3C]"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaDollarSign className="text-[#FF5A3C]" />
                    Max Price
                  </label>
                  <input
                    type="number"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      handleFilterChange("maxPrice", e.target.value)
                    }
                    placeholder="Max Price"
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#FF5A3C]"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaMapMarkerAlt className="text-[#FF5A3C]" />
                    Location
                  </label>
                  <input
                    type="text"
                    value={filters.location}
                    onChange={(e) =>
                      handleFilterChange("location", e.target.value)
                    }
                    placeholder="Enter location"
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#FF5A3C]"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaCalendarAlt className="text-[#FF5A3C]" />
                    Date From
                  </label>
                  <input
                    type="date"
                    value={filters.dateFrom}
                    onChange={(e) =>
                      handleFilterChange("dateFrom", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#FF5A3C]"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FaCalendarAlt className="text-[#FF5A3C]" />
                    Date To
                  </label>
                  <input
                    type="date"
                    value={filters.dateTo}
                    onChange={(e) =>
                      handleFilterChange("dateTo", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#FF5A3C]"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-[98%] md:w-10/12 mx-auto px-3 py-8 relative">
        {filterLoading && (
          <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="text-center">
              <div className="loading-spinner mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">
                Filtering properties...
              </p>
            </div>
          </div>
        )}

        {filteredProperties.length === 0 && !filterLoading ? (
          <div className="text-center py-16">
            <div className="w-[90%] sm:w-[400px] md:w-[600px] lg:w-[800px] flex flex-col justify-center items-center mx-auto">
              <Lottie animationData={search} loop={true} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No Properties Found
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search criteria or filters to find more
                properties.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={clearFilters}
                  className="bg-[#FF5A3C] text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors"
                >
                  Clear Filters
                </button>
                <Link
                  to="/"
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Properties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProperties
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((property) => (
                  <AllPropertiesCard key={property._id} property={property} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg ${
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <FaChevronLeft />
                  </button>

                  {getPageNumbers().map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        currentPage === page
                          ? "bg-[#FF5A3C] text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <FaChevronRight />
                  </button>
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(
                    currentPage * itemsPerPage,
                    filteredProperties.length
                  )}{" "}
                  of {filteredProperties.length} properties
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllProperties;
