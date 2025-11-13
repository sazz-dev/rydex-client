import React, { use } from "react";
import { MdCamera, MdEventAvailable, MdTipsAndUpdates } from "react-icons/md";
import TipsItem from "../components/TipsItem";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../components/Button";
import { CgProfile } from "react-icons/cg";
import whiteCar from "../assets/icons/white-car.svg";
import { FaDollarSign, FaEdit } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddVehicle = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      image: e.target.image.value,
      location: e.target.location.value,
      price: e.target.price.value,
      availability: e.target.availability.value,
      categories: e.target.categories.value,
      description: e.target.description.value,
      ownerName: e.target.ownerName.value,
      ownerImage: user.photoURL,
      created_by: user.email,
      created_at: new Date(),
    };

    fetch("https://rydex-server-two.vercel.app/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Vehicle Added");
        navigate("/add-vehicle");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="px-4 container flex flex-col gap-12 py-10 md:py-20 items-center text-center justify-center mx-auto">
      <div>
        <h4 className="md:text-5xl text-3xl dark:text-white">
          Add Your Vehicle
        </h4>
        <p className="text-xl font-light pt-4 dark:text-[#ffffff88]">
          Share your ride with travelers.
        </p>
      </div>

      <div className="lg:w-10/12 flex flex-col md:flex-row gap-6 items-start justify-between">
        {/* ------------------------ Form ------------------------ */}
        <div className="w-full bg-white p-8 px-8 dark:bg-[#1D1F29] rounded-4xl ">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {/* ------------------------------ Vehicle Data Field  ------------------------------ */}

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="flex  flex-col items-start gap-2">
                <label className="dark:text-white text-lg">Vehicle Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Vehicle Name"
                  required
                  className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                />
              </div>

              <div className="flex  flex-col items-start gap-2">
                <label className="dark:text-white text-lg">Image URL</label>
                <input
                  type="text"
                  name="image"
                  placeholder="Vehicle Image"
                  required
                  className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                />
              </div>

              <div className="flex  flex-col items-start gap-2">
                <p className="dark:text-white text-lg">Location</p>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location"
                  required
                  className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                />
              </div>
              <div className="flex  flex-col items-start gap-2">
                <label className="dark:text-white text-lg">Price/day</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  required
                  className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                />
              </div>
              {/* Select Items */}
              <div className="flex  flex-col items-start gap-2">
                <label className="dark:text-white text-lg">Availability</label>
                <select
                  required
                  name="availability"
                  className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                >
                  <option>Select Availability</option>
                  <option>Available</option>
                  <option>Booked</option>
                </select>
              </div>

              <div className="flex  flex-col items-start gap-2">
                <label className="dark:text-white text-lg">Categories</label>
                <select
                  required
                  name="categories"
                  className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                >
                  <option value="">Select Category</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Electric">Electric</option>
                  <option value="Van">Van</option>
                </select>
              </div>
            </div>
            {/* ------------------------------ Description  ------------------------------ */}
            <div className="flex  flex-col items-start gap-2">
              <label className="dark:text-white text-lg">Description</label>
              <textarea
                className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E] px-4 py-3 rounded-2xl  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                name="description"
                type="text"
                placeholder="Describe your vehicle's features, condition, and any special amenities..."
                rows={5}
                required
              ></textarea>
            </div>

            {/* ------------------------------ User/Owner Field  ------------------------------ */}
            <div className="p-5 rounded-2xl flex flex-col gap-4 bg-[#F6F6F6] dark:bg-[#11131E]">
              <div className="flex md:flex-row flex-col gap-4">
                {/* ------------------------------ Email & Name ------------------------------ */}
                <div className="relative w-full">
                  <CgProfile
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black dark:text-white pointer-events-none"
                    size={25}
                    aria-hidden="true"
                  />
                  <input
                    name="ownerName"
                    defaultValue={user.displayName}
                    type="text"
                    placeholder="Owner Name"
                    required
                    className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E]  px-12 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                  />
                </div>
                {/* Email */}
                <div className="relative w-full">
                  <HiOutlineMail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black dark:text-white pointer-events-none"
                    size={25}
                    aria-hidden="true"
                  />
                  <input
                    name="created_by"
                    disabled
                    value={user.email}
                    type="email"
                    placeholder="User Email"
                    required
                    className="w-full border-2 bg-white dark:bg-[#1D1F29] border-[#EDEDED] dark:border-[#2D2D3E]  px-12 py-3 rounded-full  placeholder-[#97979D] dark:text-white focus:outline-none dark:focus:border-[#4A5565]  focus:border-[#2f0e0e]"
                  />
                </div>
              </div>

              <p className="dark:text-[#ffffff5a] text-[#00000088]">
                Auto-filled, you can change the name
              </p>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center text-white gap-3 px-8 rounded-full py-3  dark:bg-[#364154] bg-[#242424] dark:hover:bg-[#4A5565] cursor-pointer hover:bg-black "
            >
              <img src={whiteCar} alt="" />
              Add Vehicle
            </button>
          </form>
        </div>
        {/* ------------------------ Tips for listing ------------------------ */}
        <aside className="lg:w-10/12 lg:block hidden bg-white dark:bg-[#1D1F29] p-8 flex flex-col gap-12 rounded-4xl">
          <div className="flex flex-col gap-3 justify-center items-center">
            <MdTipsAndUpdates className="dark:text-white" size={100} />
            <p className="text-3xl mb-8 dark:text-white">
              Tips for Better Listings
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <TipsItem
              icon={MdCamera}
              title="Use High-Quality Images"
              description="Well-lit photos attract more bookings"
            />
            <TipsItem
              icon={FaEdit}
              title="Write Accurate Descriptions"
              description="Be honest about your vehicle's condition"
            />
            <TipsItem
              icon={MdEventAvailable}
              title="Keep Availability Updated"
              description="Regular updates improve booking"
            />
            <TipsItem
              icon={FaDollarSign}
              title="Competitive Pricing"
              description="Research similar vehicles in your area"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AddVehicle;
