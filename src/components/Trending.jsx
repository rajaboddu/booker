import React from "react";
import { trending } from "../data/trending";
import ButtonSlider from "../designElements/ButtonSlider";

const Trending = () => {
  return (
    <div className='my-2'>
      <ButtonSlider data={trending} width={5.5}>
        {trending.map((item) => (
          <div key={item.id} className="flex-none flex flex-col items-center">
            <div
              className="w-[5.5rem] h-[5.5rem] border border-gray-800
             flex justify-center items-center rounded-full"
            >
              <img
                src={item.pic}
                alt={item.name}
                className="object-cover w-20 h-20 rounded-full"
              />
            </div>
            <p className="text-gray-800 text-base">{item.name}</p>
          </div>
        ))}
      </ButtonSlider>
    </div>
  );
};

export default Trending;
