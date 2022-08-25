import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

if(loading) {
  return <Loading/>
}

console.log(user);

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
        <Link  to="/manage-books">Manage Books</Link>
      </li>
      {
        !user?.uid && <li className="btn rounded-md md:mr-2">
        <Link  to="/log-in">
          <i className="fa-solid fa-right-to-bracket mr-[2px]"></i> Log In
        </Link>
      </li>
      }
     
     {
      user?.uid &&  <li 
      onClick={() => signOut(auth)}
      className="btn rounded-md mt-4 ml-2 lg:ml-0 lg:mt-0" >
      <Link to="/log-in">
      <i className="fa-solid fa-right-from-bracket"></i> Sign Out
      </Link>
    </li>
     }
    </>
  );
  return (
    <div className="navbar bg-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Books Inventory</Link>
      </div>
      <div className="navbar-end hidden  lg:flex">
        <ul className="menu menu-horizontal  p-0">{navLink}</ul>
       
      </div>
    </div>
  );
};

export default Navbar;
