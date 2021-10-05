import React, { useState, useEffect, useRef } from "react";

const Slider = ({ data, children }) => {
  const [margin, setMargin] = useState(0);
  const [count, setCount] = useState(1);
  const ref = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 640) {
      setTimeout(() => {
        setCount((count) => count + 1);
        if (count % data.length === 1) setMargin(0)
        else setMargin(ref.current.offsetWidth)
      }, 5000);
    }
  }, [count, data.length]);
  return (
    <div
      className="flex transition-all duration-1000 ease-linear overflow-hidden"
      style={{"marginLeft" : `-${margin}px`}}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Slider;
