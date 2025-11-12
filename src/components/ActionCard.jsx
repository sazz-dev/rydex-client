import React from "react";
import whiteCar from "../assets/icons/white-car.svg";
import carAction from "../assets/car-action.png";
import { Link } from "react-router";

const ActionCard = () => {
  return (
    <section className="overflow-hidden relative bg-white dark:bg-[#1D1F29] pb-10 pt-20 ">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start container mx-auto">
        <div className="absolute md:w-xl  top-0 left-30 right-0 h-10 rounded-b-4xl bg-[#F6F6F6] dark:bg-[#030712]"></div>
        <img
          className="md:absolute mt-6 lg:right-0 md:-right-20 bottom-0 w-md md:w-md lg:w-2xl"
          src={carAction}
          alt=""
        />
        <div>
          {" "}
          <div className="lg:col-span-6 px-6">
            <h1 className="dark:text-white text-[40px] sm:text-5xl lg:text-[68px] leading-[1.05] font-semibold text-black">
              Why Daley to book?
              <br />
              Let’s Talk!
            </h1>

            <ul className="mt-6 dark:text-white flex flex-wrap gap-x-10 gap-y-3 text-[18px] sm:text-[20px] text-[#111]">
              <li className=" flex items-center gap-2">
                <span>✓</span>
                <span>Free Quotes</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>100% Commitment-Free</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link to="/all-vehicles">
                <button className="flex w-fit items-center justify-center text-white gap-3 px-8 rounded-full py-3  dark:bg-[#364154] bg-[#242424] dark:hover:bg-[#4A5565] cursor-pointer hover:bg-black ">
                  <img src={whiteCar} alt="" />
                  Explore Vehicles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionCard;
