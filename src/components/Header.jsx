import { Link, NavLink } from "react-router";
import Button from "./Button";
import { MdLightMode, MdNightlight } from "react-icons/md";
import useTheme from "../Hooks/useTheme";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const baseLink = "font-normal text-lg transition-colors duration-200";
  const linkActive = "text-red-500 dark:text-red-400";
  const linkInactive =
    "text-gray-800 hover:text-red-500 dark:text-gray-200 dark:hover:text-red-400";

  // Scrolling Effects

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent slider scroll

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", open);
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Navigation
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/all-vehicles", label: "All Vehicles" },
    { to: "/add-vehicle", label: "Add Vehicle" },
    { to: "/my-bookings", label: "My Bookings" },
    { to: "/my-vehicles", label: "My Vehicles" },
  ];

  // Mobile Slider

  const toggleMenu = () => {
    setOpen(!open);
  };

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
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 
      ${
        scrolled
          ? "bg-white/90 dark:bg-[#030712]/90"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="hidden lg:flex container mx-auto items-center justify-between px-8 py-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={isDark ? "/rydex-dark.svg" : "/rydex-light.svg"}
            alt="Rydex Logo"
            className="w-32 transition-all duration-300"
          />
        </Link>

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

        {/* ---------------------------------- Buttons Section ---------------------------------- */}
        <div className="flex gap-2">
          {/* Switch button */}
          <button onClick={toggleTheme}>
            {isDark ? (
              <MdNightlight
                className="h-fit p-2 border-2 border-[#242424] hover:border-[#ED1E24] rounded-full text-[#242424] hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer  dark:border-white dark:text-white"
                size={40}
              />
            ) : (
              <MdLightMode
                className="h-fit p-2 border-2 border-[#242424] hover:border-[#ED1E24] rounded-full text-[#242424] hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer dark:border-white dark:text-white"
                size={40}
              />
            )}
          </button>
          {user ? (
            <div
              onClick={() => setOpen(!open)}
              className="relative w-fit p-0.5 rounded-full"
            >
              <div className="rounded-full">
                <img
                  className="rounded-full w-10 h-10 object-cover"
                  src={user.photoURL}
                  referrerPolicy="no-referrer"
                  alt="user"
                />
              </div>

              {open && (
                <div className=" absolute z-10 top-full left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 / rounded-2xl p-2 mx-auto mt-2 w-56 bg-[#1D1F29]">
                  <Link>
                    <p className="hover:bg-[#ffffff21] cursor-pointer rounded-lg text-white   flex gap-2 items-center  p-3">
                      <CgProfile size={25} />
                      {user.displayName}
                    </p>
                  </Link>
                  <p
                    onClick={handleLogOut}
                    className="hover:bg-[#ffffff21] cursor-pointer rounded-lg text-white  flex gap-2 items-center  p-3"
                  >
                    <FiLogOut size={25} /> Log Out
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/auth/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/auth/signup">
                <Button variant="primary">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* ---------------------- Responsive for mobile/tablet ------------------- */}

      <div className="lg:hidden py-4 px-4 container mx-auto flex items-center justify-between">
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

          {/* Mobile Slider */}

          {!open && (
            <GiHamburgerMenu
              onClick={toggleMenu}
              size={40}
              className=" p-2 bg-[#242424]  dark:bg-[#11131E] rounded-xl text-white hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer  dark:text-white"
            />
          )}
          {open && (
            <div className="w-full z-20 flex justify-between gap-2 items-center transition-colors duration-200">
              <IoClose
                onClick={toggleMenu}
                size={40}
                className=" p-2 bg-[#242424]  dark:bg-[#11131E] rounded-xl text-white hover:text-[#ED1E24]  cursor-pointer dark:text-white"
              />
            </div>
          )}

          {open ? (
            <div className=" bg-white overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen flex justify-between items-center p-5 flex-col gap-10 duration-100 ease-in">
              <div className="w-full">
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
              </div>

              {/* Contents */}

              <nav className="flex flex-col bg-w gap-6 items-center justify-center text-4xl font-semibold">
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
              {/* Login */}
              <div className="w-full  pt-6 border-t border-gray-300 dark:border-gray-700">
                {user ? (
                  <div className="flex gap-4 flex-col items-center">
                    <img className="rounded-full" src={user.photoURL} alt="" />
                    <p className="text-2xl dark:text-white">
                      {user.displayName}
                    </p>
                    <button
                      onClick={handleLogOut}
                      className="flex gap-3 text-xl items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md"
                    >
                      <FiLogOut size={25} />
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link to="/auth/login">
                      <Button variant="outline" className="w-full">
                        Log In
                      </Button>
                    </Link>
                    <Link to="/auth/signup">
                      <Button variant="primary" className="w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-100 ease-in"></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
