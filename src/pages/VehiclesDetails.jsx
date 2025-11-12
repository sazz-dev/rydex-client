import React from "react";
import CarImg from "../assets/car.webp";
import whiteCar from "../assets/icons/white-car.svg";
import { Link } from "react-router";

const VehiclesDetails = () => {
  const onBook = () => {
    window.alert("Book clicked");
  };

  return (
    <section className="px-4 lg:py-12 py-5 flex md:flex-row  flex-col lg:gap-10 md:gap-4 container mx-auto">
      {/* -------------------------- Left Section -------------------------- */}
      <div className="flex flex-col lg:w-7/10 md:w-3/5  gap-2 ">
        {/* -------------------------- Top Part -------------------------- */}

        <div className="relative rounded-4xl bg-white dark:bg-[#0f1720] p-8  border border-transparent">
          {/* optional subtle notch top-left (decorative) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
            Toyota Corolla Hybrid 2024
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              {/* car icon (simple) */}
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 13h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 10a3 3 0 100-6 3 3 0 000 6zM17 10a3 3 0 100-6 3 3 0 000 6z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Sedan</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2" fill="currentColor" />
              </svg>
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 8v4l3 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <span>
                Added on{" "}
                <strong className="text-gray-900 dark:text-white">
                  Nov 8, 2025
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* -------------------------- Bottom Section -------------------------- */}

        <div className="h-full rounded-4xl bg-white dark:bg-[#0f1720] p-8 flex flex-col justify-between border border-transparent">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Vehicle Details
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {" "}
              This premium hybrid offers comfort, advanced GPS, and eco-friendly
              performance perfect for long trips or daily commutes. Experience
              smooth driving with hybrid efficiency and modern amenities.,
            </p>
          </div>

          {/* Owner */}
          <div className="mt-10">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Owner Info
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={"Hi"}
                alt={""}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow"
              />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Alex Carly
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  alex@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------- Right Section -------------------------- */}

      <aside className=" lg:w-3/10 md:w-2/5 rounded-4xl bg-white dark:bg-[#0f1720] p-6 flex flex-col justify-between gap-6">
        {/* image area */}

        <div className="flex flex-col items-end gap-8">
          <div className=" w-fit flex px-4 bg-[#d18b0927] justify-center rounded-full py-2 items-center gap-2">
            <div className="p-1.5 bg-[#D18B09] w-fit h-fit rounded-full"></div>
            <p className="text-[#D18B09] font-medium">Booked</p>
          </div>
          <img
            src={CarImg}
            alt={""}
            className="w-full object-contain rounded-md max-h-60 mx-auto"
          />
        </div>

        <div className="">
          <h4 className="text-2xl font-medium text-gray-900 dark:text-white">
            Book This Vehicle
          </h4>
          <div className="mt-2 flex items-baseline gap-3">
            <div className="text-3xl font-medium text-gray-900 dark:text-white">
              $54
            </div>
            <div className="text-gray-400 dark:text-gray-400 text-lg">/day</div>
          </div>
        </div>

        <button
          onClick={onBook}
          className="flex w-full items-center justify-center text-white gap-3 px-8 rounded-full py-3  dark:bg-[#364154] bg-[#242424] dark:hover:bg-[#4A5565] cursor-pointer hover:bg-black "
        >
          <img src={whiteCar} alt="" />
          Book Now
        </button>

        <p className="text-center font-light text-gray-400 dark:text-gray-400 text-lg">
          You'll be able to view your bookings in <br />
          <Link to="/my-bookings">
            <span className="text-gray-900 dark:text-white font-medium">
              My Bookings
            </span>{" "}
          </Link>
          page.
        </p>
      </aside>
    </section>
  );
};

export default VehiclesDetails;
