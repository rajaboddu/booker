import React, {useState } from "react";

const ButtonSlider = ({ children, data, width }) => {
    const [margin, setMargin] = useState(0)
    // const [disable, setDisable] = useState({left : false, right: false})
    const handleMargin = (direction) => {
        if (direction === "right" && margin<((data.length-2) * width)) {
            setMargin(margin => margin + width)
        } else if (direction === "left" && margin > 0) {
            setMargin(margin => margin - width)
        }
  };
  return (
    <div className="relative">
      <button
        className="absolute top-[35%] left-0 bg-gray-800 text-white
        text-xl text-center font-semibold w-12 h-12 rounded-full opacity-75
        transistion duration-200 hover:opacity-100"
        onClick={() => handleMargin("left")}
      >
        &#60;
      </button>
          <div className="flex space-x-4 overflow-hidden transition-all duration-500 ease-linear"
          style={{"marginLeft" : `-${margin}rem`}}>
        {children}
      </div>
      <button
        className="absolute top-[35%] right-0 bg-gray-800 text-white
        text-xl text-center font-semibold w-12 h-12 rounded-full opacity-75
        transistion duration-200 hover:opacity-100"
        onClick={() => handleMargin("right")}
      >
        &#62;
      </button>
    </div>
  );
};

export default ButtonSlider;
