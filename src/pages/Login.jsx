import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  useTitle("Log in");
  const { googleLogIn, setUser, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Sign in
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Loged in", user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.errorCode;
        setError(errorCode);
        alert("Something Wrong");
      });
  };

  //   Google Loin
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        alert("Google Login Successful");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="px-4 py-5 md:py-20 gap-16 flex flex-col md:flex-row justify-center items-center bg-[#F6F6F6] dark:bg-[#030712]">
      {/* Create Account */}
      <div className="lg:w-4/16 flex h-full flex-col justify-center items-center rounded-2xl bg-white dark:bg-[#11131E] md:p-8 p-4">
        {/* ------------------------------------------- Top Section ------------------------------------------- */}

        <div className="flex flex-col items-center gap-5 text-center mb-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={"/rydex-dark.svg"}
              alt="Rydex Logo"
              className="w-32 hidden dark:block   transition-all duration-300"
            />
            <img
              src={"/rydex-light.svg"}
              alt="Rydex Logo"
              className="w-32 block dark:hidden transition-all duration-300"
            />
          </Link>
          <h2 className="text-xl md:text-2xl text-black dark:text-white">
            Create an Account
          </h2>
        </div>

        {/* ------------------------------------------- Form ------------------------------------------- */}

        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col gap-4 mt-6"
        >
          <div className="relative w-full">
            <HiOutlineMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black dark:text-white pointer-events-none"
              size={20}
              aria-hidden="true"
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-2 border-[#EDEDED] dark:border-[#2D2D3E] px-12 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none focus:border-[#242424]"
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="relative w-full">
            <FiLock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black dark:text-white pointer-events-none"
              size={20}
              aria-hidden="true"
            />
            <input
              name="password"
              required
              className="w-full border-2 border-[#EDEDED] dark:border-[#2D2D3E] px-12 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none focus:border-[#242424]"
              type="password"
              placeholder="Password"
            />
          </div>

          {error && <p className="text-center text-pink-600">{error}</p>}

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <Link to="/auth/forget">
          <p className=" mt-3 dark:text-white">Forget Password?</p>
        </Link>

        {/* ------------------------------------------- Another Buttons ------------------------------------------- */}

        <div className="w-full mt-6 flex flex-col justify-end gap-3">
          <div className="text-lg font-light text-center text-[#95959C]">
            or sign up with
          </div>

          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full"
          >
            <FcGoogle size={25} />
            Sign up with Google
          </Button>
          <p className="text-lg font-light text-center text-[#95959C]">
            New here let's?
            <Link to="/auth/signup">
              <span className="dark:text-white text-black cursor-pointer font-medium pl-2">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>

      {/* ------------------------------------------- Visual Card ------------------------------------------- */}

      <div className="lg:w-6/16 md:w-fit w-full rounded-2xl bg-[url('./assets/login-img.jpg')] bg-cover bg-bottom h-100 md:h-160 text-center flex items-end justify-center">
        <h2 className="flex mb-5 gap-2 text-5xl font-bold text-white">
          Book & Ride <span className="text-red-600">.</span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Login;
