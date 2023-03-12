import React, { useContext, useState } from "react";
import logo from "../../Assets/DFS-Logo-Statement.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useState();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    // toast.success("Logout successfull");
    navigate("/");
  };
  const menuBar = (
    <React.Fragment>
      <li className="hover:text-[#D0011C]">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-[#D0011C]">
        <Link to="/appointment">Appointment</Link>
      </li>
      <li className="hover:text-[#D0011C]">
        <Link to="/">About</Link>
      </li>
      <li className="hover:text-[#D0011C]">
        <Link to="/">Reviews</Link>
      </li>
      {/* <li className="hover:text-[#D0011C]">
        <Link to="/">Login</Link>
      </li> */}
    </React.Fragment>
  );
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
            >
              {menuBar}
            </ul>
          </div>
          <Link
            to="/"
            className="text-emerald-400 font-bold normal-case md:text-4xl text-xl"
          >
            <img src={logo} alt="logo" className="w-20 bg-cover" />
          </Link>
        </div>

        {/* Big Screen */}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{menuBar}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <Link
              className="md:mr-4 mr-3 hover:text-[#D0011C] font-bold"
              onClick={handleLogOut}
            >
              Log Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="md:mr-4 mr-3 hover:text-[#D0011C] font-bold"
            >
              Log In
            </Link>
          )}

          {user?.uid ? (
            <div className="hidden">
              <Link
                to="/register"
                className="btn border-none bg-[#D0011C] hover:bg-[#D0011C]"
              >
                Get started
              </Link>
            </div>
          ) : (
            <Link
              to="/register"
              className="btn border-none bg-[#D0011C] hover:bg-sky-400"
            >
              Get started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
