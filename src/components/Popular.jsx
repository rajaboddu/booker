import React from "react";
import Slider from "../designElements/Slider";
import { PopularCard } from "../designElements/Cards";
import { trending } from "../data/popular";

const Popular = () => {
  return (
    <Slider data={trending}>
      {trending.map((event) => (
        <PopularCard key={event.id} image={event.pic} buttonText={event.text} />
      ))}
    </Slider>
  );
};

export default Popular;
