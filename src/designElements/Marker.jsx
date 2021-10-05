import React from "react";

const Marker = ({width, duration}) => {
  return (
    <div className="w-10 h-1 flex items-center border-[0.5px] rounded-md">
      <div
              className={`h-1 bg-white rounded-md
               ease-linear ${duration}`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default Marker;
