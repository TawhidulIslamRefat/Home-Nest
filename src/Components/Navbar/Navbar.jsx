import React, { use, useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaMoon, FaSun, FaUser, FaTachometerAlt, FaSignOutAlt, FaCog, FaBell, FaChevronDown } from "react-icons/fa";
import Swal from "sweetalert2";
import image from "../../assets/icons8-home-48.png";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });
  const links = (
    <>
      <li className="text-[16px] font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-[16px] font-medium">
        <NavLink to="/all-properties">All Properties</NavLink>
      </li>
      {user && (
        <>
          <li className="text-[16px] font-medium">
            <NavLink to="/add-property">Add Properties</NavLink>
          </li>
          <li className="text-[16px] font-medium">
            <NavLink to="/my-property">My Properties</NavLink>
          </li>
          <li className="text-[16px] font-medium">
            <NavLink to="/my-ratings">My Ratings</NavLink>
          </li>
        </>
      )}
      <li className="text-[16px] font-medium">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-[16px] font-medium">
        <NavLink to="/contact-us">Contact US</NavLink>
      </li>
    </>
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! ",
          error,
        });
      });
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const closeProfileDropdown = () => {
    setProfileDropdownOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-2xl">
      <div className="navbar w-full md:w-10/12 mx-auto  mt-1">
        <div className="navbar-start">
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            className={`fixed top-0 left-0 w-full bg-base-200 shadow-xl p-4 transition-transform duration-500 z-50 lg:hidden
    ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
          >
            <button
              onClick={toggleMobileMenu}
              className="text-2xl font-bold mb-4 float-right hover:text-red-500"
            >
              &times;
            </button>

            <ul className="flex flex-col gap-4 mt-3">{links}</ul>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div>
              <img src={image} className="md:w-10 w-7 h-7 md:h-10" alt="Logo" />
            </div>
            <div>
              <a
                href="/"
                className="text-sm md:text-xl font-semibold  text-black dark:text-gray-300 "
              >
                Home<span className="text-[#FF5A3C] ">Nest</span>{" "}
                <span className="text-sm font-medium text-black dark:text-gray-400 hidden 2xl:block">
                  - A Real Estate Listing Portal
                </span>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-1 md:gap-4">
          <div>
            <button
              onClick={handleTheme}
              className="text-lg md:text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
          {user && user.photoURL ? (
            <>
              <div className="relative" ref={dropdownRef}>
                {/* Profile Button */}
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 dark:border-gray-600 group-hover:border-[#FF5A3C] transition-colors duration-300"
                      src={user.photoURL}
                      alt="Profile"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                  </div>
                  <FaChevronDown 
                    className={`text-gray-500 dark:text-gray-400 text-sm transition-transform duration-300 hidden md:block ${
                      profileDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
                    <div className="bg-linear-to-r from-[#FF5A3C] to-red-500 p-6 text-white">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            className="w-20 h-10 rounded-full border-4 border-white/20"
                            src={user.photoURL}
                            alt="Profile"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold truncate">
                            {user.displayName || 'User'}
                          </h3>
                          <p className="text-white/80 text-sm truncate">
                            {user.email}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-white/80">Online</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      <Link
                        to="/profile"
                        onClick={closeProfileDropdown}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaUser className="text-sm" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white">Profile</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">View and edit profile</div>
                        </div>
                      </Link>

                      <Link
                        to="/dashboard"
                        onClick={closeProfileDropdown}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaTachometerAlt className="text-sm" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white">Dashboard</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Manage your properties</div>
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          closeProfileDropdown();
                          handleLogOut();
                        }}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaSignOutAlt className="text-sm" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-red-600 dark:text-red-400">Sign Out</div>
                          <div className="text-xs text-red-500 dark:text-red-500">Logout from account</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className=" bg-[#FF5A3C] text-white hover:bg-base-100 hover:text-gray-600 hover:border hover:border-[#FF5A3C]  text-[18px] text-sm font-normal md:font-medium px-1 py-0.5 md:px-4 md:py-2 rounded-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className=" border border-[#FF5A3C] hover:bg-[#FF5A3C] hover:text-white px-1 py-0.5 rounded-sm text-[18px] text-xs font-normal md:font-medium  md:px-2.5 md:py-1.5"
              >
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
