import { Link, NavLink } from "react-router";
import Button from "./Button";
import { MdLightMode, MdNightlight } from "react-icons/md";
import useTheme from "../Hooks/useTheme";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  console.log(user);

  const baseLink = "font-normal text-lg transition-colors duration-200";
  const linkActive = "text-red-500 dark:text-red-400";
  const linkInactive =
    "text-gray-800 hover:text-red-500 dark:text-gray-200 dark:hover:text-red-400";

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/all-vehicles", label: "All Vehicles" },
    { to: "/add-vehicle", label: "Add Vehicle" },
    { to: "/my-bookings", label: "My Bookings" },
    { to: "/my-vehicles", label: "My Vehicles" },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header>
      <div className="lg:flex hidden lg:block container mx-auto items-center justify-between px-8 py-4 ">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={isDark ? "/rydex-dark.svg" : "/rydex-light.svg"}
            alt="Rydex Logo"
            className="w-32 transition-all duration-300"
          />
        </Link>

        {/* Sign Up Form */}

        {/* Menu Section */}
        <nav className="flex  gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? linkActive : linkInactive}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Buttons Section */}
        {user ? (
          <div
            onClick={() => setOpen(!open)}
            className="relative w-fit p-0.5 rounded-full bg-linear-to-r from-[#E6499E] to-[#8E5CF2]"
          >
            <div className="rounded-full p-1 bg-[#0F0F23]">
              <img
                className="rounded-full w-10 h-10 object-cover"
                src={user.photoURL}
                referrerPolicy="no-referrer"
                alt="user"
              />
            </div>
            {open && (
              <div className=" absolute z-10 top-full left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 / rounded-2xl p-2 mx-auto mt-2 w-56 bg-linear-to-r from-[#E6499E] to-[#8E5CF2]">
                <Link to="/profile">
                  <p className="hover:bg-[#ffffff21] cursor-pointer rounded-lg text-white flex gap-2 items-center  p-3">
                    <CgProfile size={25} />
                    Profile
                  </p>
                </Link>
                <p
                  onClick={handleLogOut}
                  className="hover:bg-[#ffffff21] cursor-pointer rounded-lg text-white flex gap-2 items-center  p-3"
                >
                  <FiLogOut size={25} /> Log Out
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {/* Switch button */}
            <button onClick={toggleTheme}>
              {isDark ? (
                <MdNightlight
                  className="h-full p-2 border-2 border-[#242424] hover:border-[#ED1E24] rounded-full text-[#242424] hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer  dark:border-white dark:text-white"
                  size={40}
                />
              ) : (
                <MdLightMode
                  className="h-full p-2 border-2 border-[#242424] hover:border-[#ED1E24] rounded-full text-[#242424] hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer dark:border-white dark:text-white"
                  size={40}
                />
              )}
            </button>

            <Link to="/auth/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link to="/auth/signup">
              <Button variant="primary">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>

      {/* Responsive for mobile/tablet */}

      <div className="lg:hidden py-3 px-4 container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={isDark ? "/rydex-dark.svg" : "/rydex-light.svg"}
            alt="Rydex Logo"
            className="w-32 transition-all duration-300"
          />
        </Link>
        {/* Hamburger Menu */}
        <div className="flex gap-2">
          <button onClick={toggleTheme}>
            {isDark ? (
              <MdNightlight
                className=" p-2 border-2 border-[#242424] hover:border-[#ED1E24] rounded-full text-[#242424] hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer  dark:border-white dark:text-white"
                size={40}
              />
            ) : (
              <MdLightMode
                className=" p-2 border-2 border-[#242424] hover:border-[#ED1E24] rounded-full text-[#242424] hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer dark:border-white dark:text-white"
                size={40}
              />
            )}
          </button>

          <GiHamburgerMenu
            onClick={() => setOpen(!open)}
            size={40}
            className=" p-2 bg-[#242424]  dark:bg-[#11131E] rounded-xl text-white hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer  dark:text-white"
          />
        </div>
        {/* Mobile  (Slider) */}
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          ></div>

          {/* Slider Panel */}
          <div
            className="absolute right-0 top-0 h-full w-72 sm:w-80 bg-white dark:bg-[#0F0F23] shadow-xl 
               flex flex-col p-6 transition-transform duration-300"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={isDark ? "/rydex-dark.svg" : "/rydex-light.svg"}
                  alt="Rydex Logo"
                  className="w-32 transition-all duration-300"
                />
              </Link>

              <IoClose
                onClick={() => setOpen(false)}
                size={40}
                className=" p-2 bg-[#242424]  dark:bg-[#11131E] rounded-xl text-white hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer  dark:text-white"
              />
            </div>

            {/* Slider Content */}

            <nav className="flex flex-col gap-4 text-lg font-medium">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "text-red-500 dark:text-red-400"
                        : "text-gray-800 hover:text-red-500 dark:text-gray-200 dark:hover:text-red-400"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-300 dark:border-gray-700">
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
                >
                  Log Out
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/auth/login">
                    <Button variant="outline" className="w-full">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/auth/login">
                    <Button variant="primary" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
