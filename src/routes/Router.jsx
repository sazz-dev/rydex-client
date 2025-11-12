import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgetPassword from "../pages/ForgetPassword";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import AddVehicle from "../pages/AddVehicle";
import MyBookings from "../pages/MyBookings";
import MyVehicles from "../pages/MyVehicles";
import VehiclesDetails from "../pages/VehiclesDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/all-vehicles",
        element: <AllVehicles />,
      },
      {
        path: "/add-vehicle",
        element: (
          <PrivateRoute>
            <AddVehicle />
          </PrivateRoute>
        ),
      },
      {
        path: "/vehicle-details",
        element: (
          <PrivateRoute>
            <VehiclesDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-vehicles",
        element: (
          <PrivateRoute>
            <MyVehicles />
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
      {
        path: "/auth/forget",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
