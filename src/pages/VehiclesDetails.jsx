import whiteCar from "../assets/icons/white-car.svg";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarCheck, FaCarSide } from "react-icons/fa";
import car from "../assets/car.webp";
import { toast } from "react-toastify";

const VehiclesDetails = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const VehicleDetails = data.result;

  const {
    _id,
    name,
    categories,
    description,
    price,
    image,
    location,
    availability,
    created_by,
    created_at,
    ownerName,
    ownerImage,
  } = VehicleDetails;

  const handleBook = () => {
    fetch(`https://rydex-server-two.vercel.app/my-bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...VehicleDetails, booked_by: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Vehicle Booked");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Booked Already");
      });
  };

  return (
    <section className="px-4 lg:py-12 py-5 flex md:flex-row  flex-col lg:gap-10 md:gap-4 container mx-auto">
      {/* -------------------------- Left Section -------------------------- */}
      <div className="flex flex-col lg:w-7/10 md:w-3/5  gap-2 ">
        {/* -------------------------- Top Part -------------------------- */}

        <div className="relative rounded-4xl bg-white dark:bg-[#0f1720] p-8  border border-transparent">
          {/* optional subtle notch top-left (decorative) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
            {name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              {/* car icon (simple) */}
              <FaCarSide size={30} />

              <span>{categories}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot size={25} />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarCheck size={25} />
              <span>
                Added on
                <strong className="text-gray-900 ml-2 dark:text-white">{created_at}</strong>
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
              {description}
            </p>
          </div>

          {/* Owner */}
          <div className="mt-10">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Owner Info
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={ownerImage}
                alt={""}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow"
              />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {ownerName}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {created_by}
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
          <div className=" w-fit flex px-4 bg-[#0000000b] dark:bg-[#ffffff0b] justify-center rounded-full py-2 items-center gap-2">
            <div className="p-1.5 bg-[#000000] dark:bg-[#ffffff] w-fit h-fit rounded-full"></div>
            <p className="text-[#000000] dark:text-[#ffffff] font-medium">{availability}</p>
          </div>
          <img
            src={image || car}
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
              ${price}
            </div>
            <div className="text-gray-400 dark:text-gray-400 text-lg">/day</div>
          </div>
        </div>

        <button
          onClick={handleBook}
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
