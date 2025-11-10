import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const baseStyle =
    " text-[18px] flex items-center justify-center gap-2 rounded-full cursor-pointer font-medium transition-all duration-300 focus:outline-none";

  const variants = {
    primary: "px-5 py-2 bg-[#242424]  text-white dark:bg-white dark:text-black",
    outline: "px-5 py-2 border-2 border-[#242424] text-[#242424] dark:border-white dark:text-white",
    secondary: " text-white hover:bg-gray-700 border border-gray-600",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
