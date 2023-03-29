import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100  font-bold text-base-content">
            <li className="hover:text-[#D0011C]">
              <a href="/">My Appointment</a>
            </li>
            <li className="hover:text-[#D0011C]">
              <a href="/">Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
