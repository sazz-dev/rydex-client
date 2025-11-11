        <div
          className={`fixed inset-0 z-50 lg:hidden  transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          ></div>

          {/* Slider Panel */}
          <div
            className="absolute right-0 top-0  h-full w-72 sm:w-80 bg-white  dark:bg-[#0F0F23] shadow-xl 
               flex flex-col p-6 transition-transform duration-300"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={isDark ? "/rydex-dark.svg" : "/rydex-light.svg"}
                  alt="Rydex Logo"
                  className="w-32 transition-all duration-300"
                />
              </Link>

              <IoClose
                onClick={() => setOpen(false)}
                size={40}
                className=" p-2 bg-[#242424]  dark:bg-[#11131E] rounded-xl text-white hover:text-[#ED1E24] transition-colors duration-200 cursor-pointer  dark:text-white"
              />
            </div>

            {/* Slider Content */}




          </div>
        </div>