import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <div className="flex justify-center items-center w-full py-20">
      <PuffLoader
        color={isDark ? "#FFFFFF" : "#242424"} // white in dark mode, black in light mode
        size={80}
      />
    </div>
  );
};

export default Loading;
