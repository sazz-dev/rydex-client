import React from "react";
import Button from "../components/Button";
import VehicleCard from "../components/VehicleCard";


const AllVehicles = () => {
  return (
    <section className="px-4 container flex flex-col gap-12 py-10 md:py-20 items-center text-center justify-center mx-auto">
      <div>
        <h4 className="md:text-5xl text-3xl dark:text-white">
          All Available Vehicles
        </h4>
        <p className="text-xl font-light pt-4 dark:text-[#ffffff88]">
          Explore cars, vans, and EVs for your next trip.
        </p>
      </div>
      {/* --------------- Cards --------------- */}
      <div className="w-full grid grid-cols-1 md:px-20 md:grid-cols-3  gap-3">
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </div>
    </section>
  );
};

export default AllVehicles;
