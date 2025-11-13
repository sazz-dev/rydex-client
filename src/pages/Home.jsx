import React from "react";
import Button from "../components/Button";
import carBtn from "../assets/icons/car.svg";
import rydexLogo from "../assets/icons/logo-icon.svg";
import VehicleCard from "../components/VehicleCard";
import MouseIcon from "../assets/icons/MouseIcon";
import SedanIcon from "../assets/icons/SedanIcon";
import logoIconLight from "../assets/logo-img.png";
import logoIconDark from "../assets/logo-img-dark.png";
import TopCard from "../components/TopCard";
import whiteCar from "../assets/icons/white-car.svg";
import ActionCard from "../components/ActionCard";
import SubIcon from "../assets/icons/SubIcon";
import ElectricIcon from "../components/ElectricIcon";
import VanIcon from "../assets/icons/VanIcon";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { motion } from "motion/react";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      {/* --------------- Hero Section --------------- */}
      <section className="md:h-[603px] md:rounded-4xl px-4 md:px-14 py-8 flex items-center container text-white mx-auto bg-[url('./assets/hero-car.jpg')] bg-cover bg-center">
        {/* ---------------Card --------------- */}
        <div className="relative flex flex-col mx-auto md:mx-0 gap-8 backdrop-blur-xl bg-[#0000002c] border-8 border-[#ffffff17] md:p-20 p-8 rounded-[52px] md:rounded-[92px]">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-bold  text-5xl md:text-7xl "
          >
            Find<span className="text-red-600">,</span> Book <br></br> & Ride
            <span className="text-red-600">.</span>
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-light text-lg md:text-xl"
          >
            Explore a wide range of vehicles with <br />
            Rydex your trusted trip companion.
          </motion.p>
          <Link to="/all-vehicles">
            <Button className="py-4 dark:bg-white px-6 w-fit bg-white">
              <img src={carBtn} alt="" />{" "}
              <span className=" text-black">All Vehicles</span>
            </Button>
          </Link>
          <img
            className="absolute md:bottom-8 md:right-8  bottom-4 right-2 w-20 md:w-30"
            src={rydexLogo}
            alt=""
          />
        </div>
      </section>
      <div className="container flex flex-col gap-2 py-8 items-center justify-center mx-auto">
        <MouseIcon className="w-5 text-[#00000077] dark:text-[#ffffff77]" />
        <p className="dark:text-white">Scroll to explore</p>
      </div>

      {/* --------------- Recent Vehicles --------------- */}

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="px-4 container flex flex-col gap-12 py-10 md:py-20 items-center text-center justify-center mx-auto"
      >
        <div>
          <h4 className="md:text-5xl text-3xl dark:text-white">
            Recent Vehicles
          </h4>
          <p className="text-xl font-light pt-4 dark:text-[#ffffff88]">
            Discover the latest vehicles available for your next trip
          </p>
        </div>
        {/* --------------- Cards --------------- */}
        <div className="w-full grid grid-cols-1 md:px-20 lg:grid-cols-3  md:grid-cols-2 gap-3">
          {data.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      </motion.section>
      {/* --------------- Top Categories --------------- */}

      <section className="px-4 container flex flex-col gap-12 py-10 md:py-20 items-center text-center justify-center mx-auto">
        <div>
          <h4 className="md:text-5xl text-3xl dark:text-white">
            Top Categories
          </h4>
          <p className="text-xl font-light pt-4 dark:text-[#ffffff88]">
            Our best diverse range of vehicle categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Cards */}
          <TopCard
            icon={SedanIcon}
            title="Sedan"
            description="Comfort meets style in our premium sedans"
          />
          <TopCard
            icon={SubIcon}
            title="SUV"
            description="Spacious and powerful for any adventure"
          />
          <TopCard
            icon={ElectricIcon}
            title="Electric"
            description="Eco-friendly vehicles for sustainable travel"
          />
          <TopCard
            icon={VanIcon}
            title="Van"
            description="Perfect for group trips and cargo transport"
          />
        </div>
      </section>

      {/* Rydex About */}
      <section className="md:w-8/12 px-4 container flex md:flex-row flex-col gap-12 py-10 md:py-40 items-center text-center md:text-left  md:justify-start justify-center mx-auto">
        <img
          className="w-50 block dark:hidden md:w-100"
          src={logoIconLight}
          alt=""
        />
        <img
          className="w-50 hidden dark:block md:w-100"
          src={logoIconDark}
          alt=""
        />
        <div className="items-center md:items-start flex flex-col gap-6">
          <h3 className="font-medium dark:text-white md:text-6xl text-4xl">
            Rydex Cab <br />
            Services.
          </h3>
          <p className="text-xl dark:text-[#ffffff79] font-light">
            Our Vision is to exceed our customer’s expectations by providing
            professional on-time ground transportation solutions,{" "}
          </p>
          <ul className="dark:text-[#ffffff79] text-xl font-light grid grid-cols-2">
            <li>Outstation Cabs</li>
            <li>Local Hourly Car Rental</li>
            <li>One Way Cab</li>
            <li>Airport Taxi</li>
          </ul>

          <button className="flex w-fit items-center justify-center text-white gap-3 px-8 rounded-full py-3  dark:bg-[#364154] bg-[#242424] dark:hover:bg-[#4A5565] cursor-pointer hover:bg-black ">
            <img src={whiteCar} alt="" />
            About Us
          </button>
        </div>
      </section>
      {/* Hook Action Visitor */}
      <ActionCard />
    </>
  );
};

export default Home;
