import React, { use, useEffect, useState } from "react";
import MyBookedCard from "../components/MyBookedCard";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [vehicles, setVechicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVechicles(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="px-4 container flex flex-col gap-12 py-10 md:py-20 items-center text-center justify-center mx-auto">
      <div>
        <h4 className="md:text-5xl text-3xl dark:text-white">
          My Booked Vehicles
        </h4>
        <p className="text-xl font-light pt-4 dark:text-[#ffffff88]">
          All of your booked vehicles here.
        </p>
      </div>
      {/* --------------- Cards --------------- */}
      <div className="w-full grid grid-cols-1 md:px-20 md:grid-cols-2 lg:grid-cols-4  gap-3">
        {vehicles.map((vehicle) => (
          <MyBookedCard key={vehicle._id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
};

export default MyBookings;
