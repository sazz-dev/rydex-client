import React, { useState } from "react";
import Button from "../components/Button";
import VehicleCard from "../components/VehicleCard";
import { useLoaderData } from "react-router";
import Loading from "../components/Loading";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const AllVehicles = () => {
  const data = useLoaderData();
  const [vehicles, setVehicles] = useState(data);
  const [loading, setLoading] = useState(false);
  const [category, setcategory] = useState("");

  // search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setLoading(true);

    fetch(`https://rydex-server-two.vercel.app/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      });
  };

  // Sort Category
  const handleCategory = (e) => {
    e.preventDefault();
    const categoryValue = e.target.value;
    setLoading(true);
    setcategory(categoryValue);

    fetch(
      `https://rydex-server-two.vercel.app/category?category=${categoryValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      });
  };

  // Sort Price
  const handleSort = (e) => {
    const sortValue = e.target.value;
    setLoading(true);

    fetch(`https://rydex-server-two.vercel.app/sort?sort=${sortValue}`)
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      });
  };
  if (loading) {
    return <Loading />;
  }

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
      <div className="w-full  items-center lg:w-10/12 flex flex-col gap-5">
        {/* Filter */}
        <div className="w-full flex flex-col gap-5 md:flex-row justify-between">
          <form className="relative" onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search by vehicle's name"
              className="pl-11 w-full md:w-80 border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full font-light placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
            />
            <FiSearch size={20} className="top-4 left-5 absolute to-0%" />
          </form>
          <div className="flex gap-3">
            {/* Sort by category */}
            <div className="relative">
              <select
                onChange={handleCategory}
                value={category}
                name="categories"
                className="border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] 
               px-4 py-3 rounded-full placeholder-[#97979D] dark:text-white 
               focus:outline-none dark:focus:border-[#4A5565] cursor-pointer focus:border-[#2f0e0e] appearance-none pr-10 w-full"
              >
                <option value="">All Categories</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Electric">Electric</option>
                <option value="Van">Van</option>
              </select>

              <MdKeyboardArrowDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl 
               text-[#555] dark:text-white pointer-events-none"
              />
            </div>
            {/* Sort by price */}
            <div className="relative">
              <select
                onChange={handleSort}
                name="sort"
                className="border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565] cursor-pointer focus:border-[#2f0e0e] appearance-none pr-10 w-full"
              >
                <option value="">Sort By Price</option>
                <option value="price_low">Price (Low → High)</option>
                <option value="price_high">Price (High → Low)</option>
              </select>

              <MdKeyboardArrowDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl 
    text-[#555] dark:text-white pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllVehicles;
