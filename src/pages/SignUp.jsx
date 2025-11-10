import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { Link, useLocation, useNavigate } from "react-router";
import { FiImage, FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuUserRound } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../components/useTitle";
import useTheme from "../Hooks/useTheme";
import { div } from "motion/react-client";

const SignUp = () => {
  const { isDark } = useTheme();
  useTitle("Register");
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
        alert("Google Login Successful");
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

      alert("Account created successfully");
      navigate(fromPath, { replace: true });
    } catch (error) {
      alert(error?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" lg:h-screen lg:py-12  relative">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={isDark ? "/rydex-dark.svg" : "/rydex-light.svg"}
            alt="Rydex Logo"
            className="w-32 transition-all duration-300"
          />
        </Link>
      </div>
      <div className=" lg:h-screen lg:py-12 bg-[url('./assets/light-bg.png')] relative bg-cover bg-center">
        <div className="flex gap-8 lg:gap-0 flex-col lg:flex-row justify-between items-center lg:items-start container mx-auto px-4 lg:px-4">
          {/* Register Card */}
          <div className="lg:mt-20 md:w-md border-2 border-[#222235] hover:border-[#31314a] rounded-2xl bg-[#16162957] md:p-8 p-4">
            <div className="text-center mb-4">
              <h2 className="text-2xl md:text-3xl font-medium text-white">
                Create an Account
              </h2>
              <p className="mt-2 text-sm md:text-base text-[#888891]">
                Join gameov to explore and support indie games
              </p>
            </div>

            {/* Field Section */}
            <form
              onSubmit={handleRegister}
              className="w-full  flex flex-col gap-4 mt-6"
            >
              <div className="relative w-full">
                <LuUserRound
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9D9D9] pointer-events-none"
                  size={20}
                  aria-hidden="true"
                />
                <input
                  name="name"
                  required
                  className="w-full border-2 border-[#2D2D3E] px-12 py-3 rounded-xl bg-[#1D1D2F] placeholder-[#97979D] text-white focus:outline-none focus:border-[#8E5CF2]"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div className="relative w-full">
                <FiImage
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9D9D9] pointer-events-none"
                  size={20}
                  aria-hidden="true"
                />
                <input
                  name="photo"
                  /* consider making optional if you want */
                  className="w-full border-2 border-[#2D2D3E] px-12 py-3 rounded-xl bg-[#1D1D2F] placeholder-[#97979D] text-white focus:outline-none focus:border-[#8E5CF2]"
                  type="text"
                  placeholder="Photo URL (optional)"
                />
              </div>

              <div className="relative w-full">
                <HiOutlineMail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9D9D9] pointer-events-none"
                  size={20}
                  aria-hidden="true"
                />
                <input
                  name="email"
                  required
                  className="w-full border-2 border-[#2D2D3E] px-12 py-3 rounded-xl bg-[#1D1D2F] placeholder-[#97979D] text-white focus:outline-none focus:border-[#8E5CF2]"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="relative w-full">
                <FiLock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D9D9D9] pointer-events-none"
                  size={20}
                  aria-hidden="true"
                />
                <input
                  name="password"
                  required
                  className="w-full border-2 border-[#2D2D3E] px-12 py-3 rounded-xl bg-[#1D1D2F] placeholder-[#97979D] text-white focus:outline-none focus:border-[#8E5CF2]"
                  type="password"
                  placeholder="Password"
                />
              </div>

              {passwordError && (
                <p className="text-[#FF39A4]">{passwordError}</p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating..." : "Create Account"}
              </Button>
            </form>

            {/* Actions */}
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
                  <span className="text-[#8B5CF6] cursor-pointer font-medium pl-2">
                    Log in
                  </span>
                </Link>
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="flex flex-col md:flex-row items-start">
            <Link to="/"></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
