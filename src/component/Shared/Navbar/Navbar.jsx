import React from "react";
import logo from "../../Assets/DFS-Logo-Statement.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuBar = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Appointment</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Reviews</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content hover:border-b-2 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuBar}
            </ul>
          </div>
          <Link to="/" className="">
            <img src={logo} alt="logo" className="w-20 bg-cover" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuBar}</ul>
        </div>
        <div className="navbar-end">
          <a href="/" className="btn">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
