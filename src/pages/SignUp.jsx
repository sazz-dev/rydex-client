import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { Link, useLocation, useNavigate } from "react-router";
import { FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuLink, LuUserRound } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import { toast } from "react-toastify";

const SignUp = () => {
  useTitle("Sign Up");
  const { googleLogIn, createUser, setUser, updateUser } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const fromPath = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google Login Successful");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must include at least one uppercase, one lowercase, and be at least 6 characters long."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      setLoading(true);
      const result = await createUser(email, password);
      const user = result.user;

      // Update profile (ensure updateUser returns a promise)
      await updateUser({ displayName: name, photoURL: photo || "" });

      // set user once after update
      setUser({ ...user, displayName: name, photoURL: photo || "" });

      toast.success("Account created successfully");
      navigate(fromPath, { replace: true });
    } catch (error) {
      alert(error?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
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
          onSubmit={handleRegister}
          className="w-full flex flex-col gap-4 mt-6"
        >
          <div className="relative w-full">
            <LuUserRound
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black dark:text-white pointer-events-none"
              size={20}
              aria-hidden="true"
            />
            <input
              name="name"
              required
              className="w-full border-2 border-[#EDEDED] dark:border-[#2D2D3E] px-12 py-3 rounded-full placeholder-[#97979D] dark:text-white focus:outline-none focus:border-[#242424]"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className="relative w-full">
            <LuLink
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black dark:text-white pointer-events-none"
              size={20}
              aria-hidden="true"
            />
            <input
              name="photo"
              /* consider making optional if you want */
              className="w-full border-2 dark:border-[#2D2D3E] border-[#EDEDED]  px-12 py-3 rounded-full placeholder-[#97979D] dark:text-white focus:outline-none focus:border-[#242424]"
              type="text"
              placeholder="Photo URL (optional)"
            />
          </div>

          <div className="relative w-full">
            <HiOutlineMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black dark:text-white pointer-events-none"
              size={20}
              aria-hidden="true"
            />
            <input
              name="email"
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

          {passwordError && <p className="text-[#FF39A4]">{passwordError}</p>}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>

        {/* ------------------------------------------- Another Buttons ------------------------------------------- */}

        <div className="w-full mt-6 flex flex-col justify-end gap-3">
          <div className="text-lg font-light text-center text-[#95959C]">
            or sign up with
          </div>

          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full"
            disabled={loading}
          >
            <FcGoogle size={25} />
            Sign up with Google
          </Button>
          <p className="text-lg font-light text-center text-[#95959C]">
            Already have an account?
            <Link to="/auth/login">
              <span className="dark:text-white text-black cursor-pointer font-medium pl-2">
                Log in
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

export default SignUp;
