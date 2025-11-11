import React from "react";
import car from "../assets/car.webp";
import loacation from "../assets/icons/location.svg";
import whiteCar from "../assets/icons/white-car.svg";
import Button from "./Button";


const VehicleCard = () => {
  return (
    <div className="w-[388px] h-fit gap-6 flex flex-col items-center rounded-3xl bg-white dark:bg-[#1D1F29] px-8 pt-8 pb-6
      
      hover:shadow-[0_10px_40px_rgba(0,0,0,0.03)] 
      hover:-translate-y-2 hover:scale-[1.02] 
      transition-all duration-500 ease-in-out-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer"
    >
      <div className="w-full flex justify-between items-start">
        {/* vechile Type */}
        <div className="text-left">
          <h6 className="text-xl font-medium dark:text-white">Toyota Corolla</h6>
          <p className="text-lg font-light dark:text-[#ffffff88] text-[#0000006c]">Sedan</p>
        </div>
        {/* Status */}
        <div className="flex px-4 bg-[#d18b0927] justify-center rounded-full py-2 items-center gap-2">
          <div className="p-1.5 bg-[#D18B09] w-fit h-fit rounded-full"></div>
          <p className="text-[#D18B09] font-medium">Booked</p>
        </div>
      </div>
      {/* Price */}
      <div className="flex gap-1 justify-center items-end">
        <span className="text-3xl font-semibold">$29 </span>
        <p className="text-[#0000006c] text-xl">/day</p>
      </div>
      {/* Car Image */}
      <div className="relative flex justify-endh-20">
        <img className="h-35" src={car} alt="" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent dark:from-[#1D1F29] to-transparent"></div>
      </div>
      {/* Button and Loaction */}
      <div className="w-full justify-center items-center flex flex-col gap-3">
        {/* Location */}
        <div className="flex items-center gap-2">
            <img src={loacation} alt="" />
            <p>Dhaka, Bangladesh</p>
        </div>
        <button className="flex items-center justify-center text-white gap-3 rounded-full py-3 w-full dark:bg-[#364154] bg-[#242424] dark:hover:bg-[#4A5565]"><img src={whiteCar} alt="" />View Details</button>
      </div>
    </div>
  );
};

export default VehicleCard;
