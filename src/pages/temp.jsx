import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoLogOut, IoLogIn } from "react-icons/io5";
import { AuthContext } from "../context/Authprovider";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // When theme changes, update <html> and localStorage
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle theme toggle
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-full md:w-8/12 mx-auto">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allmodels">Explore Artworks</NavLink></li>
            <li><NavLink to="/addarts">Add Artwork</NavLink></li>
            <li><NavLink to="/gallery">My Gallery</NavLink></li>
            <li><NavLink to="/favorits">My Favorites</NavLink></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">My App</a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/allmodels">Explore Artworks</NavLink></li>
          <li><NavLink to="/addarts">Add Artwork</NavLink></li>
          <li><NavLink to="/gallery">My Gallery</NavLink></li>
          <li><NavLink to="/favorits">My Favorites</NavLink></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-3 md:mr-5">
        {user ? (
          <div className="relative group">
            <img
              src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-pink-500 cursor-pointer"
            />
            <div
              className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg p-3 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 z-50"
            >
              <p className="text-center font-semibold text-gray-700">
                {user.displayName || "User"}
              </p>
              <button
                onClick={signOutUser}
                className="mt-2 w-full flex items-center justify-center gap-2 
                bg-gradient-to-r from-pink-500 to-green-400 text-white py-1 rounded"
              >
                <IoLogOut /> Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-sm bg-gradient-to-r from-pink-500 to-green-400 text-white"
            >
              <IoLogIn /> Login
            </Link>
            <Link
              to="/register"
              className="btn btn-sm bg-gradient-to-r from-pink-500 to-green-400 text-white"
            >
              <IoLogIn /> Register
            </Link>
          </>
        )}

        {/* Theme toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={(e) => handleTheme(e.target.checked)}
            checked={theme === "dark"} // ✅ correct boolean check
          />

          {/* sun icon (light mode) */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Z" />
          </svg>

          {/* moon icon (dark mode) */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14A8.05,8.05,0,0,1,9.08,5.49,8.59,8.59,0,0,1,9.33,3.5a1,1,0,0,0-.9-1.14A10.14,10.14,0,1,0,22,14.05a1,1,0,0,0-.36-1.05Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
