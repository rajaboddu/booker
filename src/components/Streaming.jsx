import React from "react";
import Slider from "../designElements/Slider";
import { StreamingCard } from "../designElements/Cards";
import { streaming } from "../data/streaming";

const Streaming = () => {
    return (
        <div>
        <Slider data = {streaming}>
          {streaming.map((stream) => (
            <StreamingCard
              key={stream.id}
              pic={stream.pic}
              title={stream.name}
              genre={stream.genre}
            />
          ))}
        </Slider>
      </div>
    )
}

export default Streaming
