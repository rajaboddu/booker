import React, { useState, useEffect, useRef } from "react";
import Marker from "./Marker";

const Slider = ({ data, children }) => {
  const timer = 3000;
  const [margin, setMargin] = useState(0);
  const [count, setCount] = useState(1);
  const ref = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 640) {
      setTimeout(() => {
        if (count === data.length) {
          setCount(1);
          setMargin(0);
        } else {
          setCount((count) => count + 1);
          setMargin(ref.current.offsetWidth);
        }
      }, timer);
    }
  }, [count, data.length]);

  //getting markers
  const getMarkers = () => {
    let markers = [];
    for (let i = 0; i < data.length; i++) {
      const markerObj = { id: i, width: 0, transition: false };
      i === 0 ? (markerObj.width = 100) : (markerObj.width = 0);
      markers.push(markerObj);
    }
    return markers;
  };
  const [widths, setWidths] = useState(getMarkers());

  //updating the width of markers
  useEffect(() => {
    let updateWidths = widths;
    for (let i = 0; i < data.length; i++) {
      if (i === count - 1) {
        updateWidths[i].width = 100;
        updateWidths[i].transition = true;
      } else {
        updateWidths[i].width = 0;
        updateWidths[i].transition = false;
      }
    }
    setWidths(updateWidths);
  }, [widths, count, timer]);

  return (
    <div className="relative">
      <div
        className="flex transition-all duration-1000 ease-linear overflow-hidden"
        style={{ marginLeft: `-${margin}px` }}
        ref={ref}
      >
        {children}
      </div>
      <div className="absolute bottom-2 flex w-full justify-center">
        <Marker widths={widths} />
      </div>
    </div>
  );
};

export default Slider;
