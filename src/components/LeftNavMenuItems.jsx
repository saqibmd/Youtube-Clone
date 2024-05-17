/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const LeftNavMenuItems = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        "text-sm flex text-white cursor-pointer h-10 items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]" +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItems;
