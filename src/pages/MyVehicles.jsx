import React from "react";
import { Link } from "react-router";
import MyVehicleCard from "../components/MyVehicleCard";

const MyVehicles = () => {
  return (

      <section className="px-4 container flex flex-col gap-12 py-10 md:py-20 items-center text-center justify-center mx-auto">
        <div>
          <h4 className="md:text-5xl text-3xl dark:text-white">
            My Vehicles
          </h4>
          <p className="text-xl font-light pt-4 dark:text-[#ffffff88]">
            Your added vehicles here you can edit them
          </p>
        </div>
        {/* --------------- Cards --------------- */}
        <div className="w-full grid grid-cols-1 md:px-20 md:grid-cols-3  gap-3">
          <MyVehicleCard/>
          <MyVehicleCard/>
          <MyVehicleCard/>
          <MyVehicleCard/>
          <MyVehicleCard/>
        </div>
      </section>

  );
};

export default MyVehicles;
