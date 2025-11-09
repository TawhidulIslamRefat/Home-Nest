import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const links = <>
       <li className="text-[16px] font-medium"><NavLink to='/'>Home</NavLink></li>
       <li className="text-[16px] font-medium"><NavLink to='/all-properties'>All Properties</NavLink></li>
       <li className="text-[16px] font-medium"><NavLink to='/add-property'>Add Properties</NavLink></li>
       <li className="text-[16px] font-medium"><NavLink to='/my-property'>My Properties</NavLink></li>
       <li className="text-[16px] font-medium"><NavLink to='/my-ratings'>My Ratings</NavLink></li>
    </>
  return (
    <div>
      <div className="navbar w-11/12 mx-auto mt-1">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
             
            </ul>
          </div>
          <div className="flex items-end justify-center gap-2">
            <a className="text-2xl font-semibold bg-linear-to-r to-[orange] from-[#FF5A3C] bg-clip-text text-transparent">HomeNest <span className="text-[17px] font-medium text-black">- A Real Estate Listing Portal</span> </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link to='/login' className=" bg-[#FF5A3C] text-white hover:bg-base-100 hover:text-gray-600 hover:border hover:border-[#FF5A3C]  text-[18px] font-medium px-3 py-2 rounded-sm">Login</Link>
          <Link to='/register' className=" border border-[#FF5A3C] hover:bg-[#FF5A3C] hover:text-white px-2.5 py-1.5 rounded-sm text-[18px] font-medium">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
