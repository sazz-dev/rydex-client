import React from "react";
import Button from "../components/Button";
import carBtn from "../assets/icons/car.svg";
import rydexLogo from "../assets/icons/logo-icon.svg";
import mouse from "../assets/icons/mouse.svg";
import VehicleCard from "../components/VehicleCard";

const Home = () => {
  return (
    <>
      {/* --------------- Hero Section --------------- */}
      <section className="md:h-[603px] md:rounded-4xl px-4 md:px-14 py-8 flex items-center container text-white mx-auto bg-[url('./assets/hero-car.jpg')] bg-cover bg-center">
      {/* ---------------Card --------------- */}
        <div className="relative flex flex-col mx-auto md:mx-0 gap-8 backdrop-blur-xl bg-[#0000002c] border-8 border-[#ffffff17] md:p-20 p-8 rounded-[52px] md:rounded-[92px]">
          <h2 className="font-bold  text-5xl md:text-7xl ">
            Find<span className="text-red-600">,</span> Book <br></br> & Ride<span className="text-red-600">.</span>
          </h2>
          <p className="font-light text-lg md:text-xl">
            Explore a wide range of vehicles with <br />
            Rydex your trusted trip companion.
          </p>
          <Button className="py-4 px-6 w-fit bg-white">
            <img src={carBtn} alt="" />{" "}
            <span className=" text-black">All Vehicles</span>
          </Button>
          <img className="absolute md:bottom-8 md:right-8  bottom-4 right-2 w-20 md:w-30" src={rydexLogo} alt="" />
        </div>
      </section>
      <div className="container flex flex-col gap-2 py-8 items-center justify-center mx-auto">
        <img src={mouse} alt="" />
        <p>Scroll to explore</p>
      </div>

      {/* --------------- Recent Vehicles --------------- */}

      <section className="container flex flex-col gap-12 py-20 items-center text-center justify-center mx-auto">
        <div>
            <h4 className="text-5xl dark:text-white">Recent Vehicles</h4>
            <p className="text-xl font-light pt-4 dark:text-[#ffffff88]">Discover the latest vehicles available for your next trip</p>
        </div>
        {/* --------------- Cards --------------- */}
        <div>
            <VehicleCard/>
        </div>

      </section>
    </>
  );
};

export default Home;
