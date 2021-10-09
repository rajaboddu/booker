import React from "react";

const Marker = ({ widths }) => {
  return (
    <div className="flex space-x-2">
      {widths.map((width) => (
        <div
          key={width.id}
          className="w-10 h-1 flex items-center border-[0.5px] rounded-full overflow-hidden"
        >
          <div
            className={`h-1 bg-white rounded-full ${
              width.transition
                ? "ease-linear duration-[3000ms]"
                : "ease-linear duration-150"
            }
            `}
            style={{ width: `${width.width}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Marker;
