import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/add-book">Add Book</Link>
      </li>
      <li>
        <Link to="/add-books">All Books</Link>
      </li>
      <li>
        <Link to="/manage-books">Manage Books</Link>
      </li>
      <li className="btn rounded-md md:mr-2">
        <Link  to="/log-in">
          <i className="fa-solid fa-right-to-bracket mr-[2px]"></i> Log In
        </Link>
      </li>
      <li className="btn rounded-md mt-4 lg:mt-0" >
        <Link to="/sign-up">
          <i className="fa-solid fa-user-plus mr-[2px]"></i> Sign Up
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Books Inventory</Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal  p-0">{navLink}</ul>
       
      </div>
    </div>
  );
};

export default Navbar;
