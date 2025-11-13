import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaMoon, FaSun } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [theme,setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme:"light";
  })
  const links = (
    <>
      <li className="text-[16px] font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-[16px] font-medium">
        <NavLink to="/all-properties">All Properties</NavLink>
      </li>
      {
        user && (
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
      )
      }
     
    </>
  );

  useEffect(()=>{
    localStorage.setItem("theme",theme);
    document.documentElement.setAttribute("data-theme",theme)
  },[theme])
   
const handleTheme = () =>{
  setTheme(theme === "light"?"dark":"light")
}

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
            text: "Something went wrong! " ,error
          });
      });
  };


  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-2xl">
      <div className="navbar w-full md:w-11/12 mx-auto  mt-1">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-200  rounded-box z-1 mt-3 w-40 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="grid grid-cols-1 items-end justify-center gap-2">
            <a href="/" className="text-sm md:text-2xl font-semibold  text-black dark:text-gray-300 ">
              Home<span className="text-[#FF5A3C] ">Nest</span>{" "}
              <span className="text-[17px] font-medium text-black dark:text-gray-400 hidden 2xl:block">
                - A Real Estate Listing Portal
              </span>{" "}
            </a>
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
              <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="w-10 md:w-12 h-10 md:h-12 rounded-full"
                    src={user.photoURL}
                    alt="user avator"
                  />
                </div>
                <div
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-300 rounded-box z-1 w-65 p-2 shadow-sm mt-16"
                >
                  <div className="border-b-2 border-gray-400">
                    <h1 className="text-sm md:text-[18px] font-bold pt-2 text-center">{user.displayName}</h1>
                   <p className="text-xs md:text-sm text-black pb-2 text-center dark:text-white">{user.email}</p>
                  </div>
                  <div>
                    <button className=" btn bg-[#FF5A3C] text-white w-full text-[12px] md:text-[15px] my-1 md:my-2" onClick={handleLogOut}>Logout</button>
                  </div>
                </div>
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
