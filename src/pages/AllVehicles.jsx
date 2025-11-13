import React from "react";
import Button from "../components/Button";
import VehicleCard from "../components/VehicleCard";
import { useLoaderData } from "react-router";

const AllVehicles = () => {
  const data = useLoaderData();

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
      <div className="w-10/12 flex flex-col gap-5">
        {/* Filter */}
        <div className=" flex justify-center">
          <select
            required
            name="availability"
            className=" border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
          >
            <option>Select Availability</option>
            <option>Available</option>
            <option>Booked</option>
          </select>
        </div>

        <div className="w-full grid grid-cols-1 md:px-20 md:grid-cols-3  gap-3">
          {data.map((vechicle) => (
            <VehicleCard key={vechicle._id} vechicle={vechicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllVehicles;
