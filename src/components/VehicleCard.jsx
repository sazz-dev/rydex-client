import React from "react";
import car from "../assets/car.webp";
import whiteCar from "../assets/icons/white-car.svg";
import Button from "./Button";
import LocationIcon from "../assets/icons/LocationIcon";
import { Link } from "react-router";
const VehicleCard = ({ vehicle }) => {
  const { _id, name, categories, price, image, location, availability } =
    vehicle;
  return (
    <Link to={`/vehicle-details/${_id}`}>
      <div
        className="w-full h-full gap-6 flex flex-col items-center rounded-3xl bg-white dark:bg-[#1D1F29] px-6 md:px-8 pt-8 pb-6
      
      hover:shadow-[0_10px_40px_rgba(0,0,0,0.03)] 
      hover:-translate-y-2 hover:scale-[1.02] 
      transition-all duration-500 ease-in-out-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer"
      >
        <div className="w-full flex  lg:gap-10 justify-between items-start">
          {/* vechile Type */}
          <div className="text-left">
            <h6 className="text-xl font-medium dark:text-white">{name}</h6>
            <p className="text-lg font-light dark:text-[#ffffff88] text-[#0000006c]">
              {categories}
            </p>
          </div>
          {/* Status */}
          <div className="flex px-4 bg-[#0000000b] dark:bg-[#ffffff0b] justify-center rounded-full py-2 items-center gap-2">
            <p className="text-[#000000] dark:text-[#ffffff] font-medium">
              {availability}
            </p>
          </div>
        </div>
        {/* Price */}
        <div className="flex gap-1 justify-center items-end">
          <span className="text-3xl dark:text-white font-semibold">
            ${price}{" "}
          </span>
          <p className="text-[#0000006c] dark:text-[#ffffff6c] text-xl">/day</p>
        </div>
        {/* Car Image */}
        <div className="relative flex justify-endh-20">
          <img className="h-60" src={image || car} alt="" />
          <div className="w-full absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent dark:from-[#1D1F29]"></div>
        </div>
        {/* Button and Loaction */}
        <div className="w-full justify-center items-center flex flex-col gap-3">
          {/* Location */}
          <div className="flex items-center gap-2">
            <LocationIcon className="w-5 h-5 text-[#141B34] dark:text-white" />
            <p className="dark:text-white text-[#141B34]">{location}</p>
          </div>

          <button className="flex w-full items-center justify-center text-white gap-3 px-8 rounded-full py-3  dark:bg-[#364154] bg-[#242424] dark:hover:bg-[#4A5565] cursor-pointer hover:bg-black ">
            <img src={whiteCar} alt="" />
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
