import React from "react";
import errorLight from "../assets/error-light.svg";
import errorDark from "../assets/error-dark.svg";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 py-20 mx-auto">
      <img
        className="block dark:hidden w-70 md:w-2xl"
        src={errorLight}
        alt=""
      />
      <img className="hidden dark:block w-70 md:w-2xl" src={errorDark} alt="" />
      <div className="text-center">
        <h5 className="md:text-5xl text-2xl font-medium dark:text-white">
          Page not found
        </h5>
        <p className="text-xl dark:text-[#ffffff8b] text-[#0000008b] md:mt-5">
          Return to{" "}
          <Link to="/" className="dark:text-white text-black">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
