import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../pages/Appointments/Appointment/Appointment";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/DashBoard/DashBoard";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyAppintment from "../pages/Dashboard/MyDashBoardAppo/MyAppintment";

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
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppintment />,
      },
    ],
  },
]);
