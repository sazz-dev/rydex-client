const TopCard = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <div
      className={`relative group w-[301px] gap-2 rounded-4xl p-8 flex flex-col items-start bg-white dark:bg-[#1D1F29] hover:bg-[#11131E] hover:text-white transition-all duration-500 cursor-pointer overflow-hidden ${className}`}
    >
      {/* Icon container */}
      <div className=" bg-[#0000000a] dark:bg-white border border-[#00000012]  rounded-full p-4 transition-all duration-300 group-hover:bg-white">

        {/* icon} */}

        {Icon ? (
          <>
            <Icon className="w-7 flex text-black dark:text-[#1D1F29] group-hover:text-black transition-colors duration-300" />
            <Icon className="absolute right-5 top-5 w-16 text-[#00000023] dark:text-[#ffffff23] group-hover:text-white/20 transition-colors duration-300" />
          </>
        ) : null}
      </div>

      {/* Text content */}
      <h6 className="text-2xl font-medium text-left text-black dark:text-white group-hover:text-white transition-colors duration-300">
        {title}
      </h6>
      <p className="text-left text-[#0000008a] dark:text-[#ffffff66] group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default TopCard;
