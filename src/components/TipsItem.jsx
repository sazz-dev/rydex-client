import React from "react";

const TipsItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 flex-shrink-0 text-black dark:text-white rounded-xl">
        {/* dynamically render passed icon */}
        {Icon && <Icon size={32} />}
      </div>

      <div className="text-left">
        <h6 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h6>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TipsItem;
