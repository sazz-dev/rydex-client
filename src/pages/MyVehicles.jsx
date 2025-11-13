import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import MyVehicleCard from "../components/MyVehicleCard";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const MyVehicles = () => {
  const { user } = use(AuthContext);
  const [vehicles, setVechicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rydex-server-two.vercel.app/my-vehicles?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVechicles(data);
        setLoading(false);
      });
  }, []);

  const hanldeDelete = (vehicle) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://rydex-server-two.vercel.app/vehicles/${vehicle._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              const remaining = vehicles.filter(
                (item) => item._id !== vehicle._id
              );
              setVechicles(remaining);
            }
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="px-4 container flex flex-col gap-12 py-10 md:py-20 items-center text-center justify-center mx-auto">
      <div>
        <h4 className="md:text-5xl text-3xl dark:text-white">My Vehicles</h4>
        <p className="text-xl font-light pt-4 dark:text-[#ffffff88]">
          Your added vehicles here you can edit them
        </p>
      </div>
      {/* --------------- Cards --------------- */}
      <div className="w-full grid grid-cols-1 md:px-20 md:grid-cols-3  gap-3">
        {vehicles.map((vehicle) => (
          <MyVehicleCard
            key={vehicle._id}
            hanldeDelete={hanldeDelete}
            vehicle={vehicle}
          />
        ))}
      </div>
    </section>
  );
};

export default MyVehicles;
