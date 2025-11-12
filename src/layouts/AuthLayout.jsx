import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
