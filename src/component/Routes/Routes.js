import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../pages/Appointments/Appointment/Appointment";
import Home from "../pages/Home/Home";
import DashBoard from "../pages/Dashboard/DashBoard/DashBoard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [],
  },
]);
