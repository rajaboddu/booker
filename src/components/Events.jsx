import React from "react";
import ButtonSlider from "../designElements/ButtonSlider";
import { events } from "../data/events";
import { EventCard } from "../designElements/Cards";

const Events = () => {
  return (
    <div className='my-4'>
      <h3 className="text-xl font-semibold text-gray-800 m-2">
        Online Streaming Events
      </h3>
      <ButtonSlider data={events} width={11}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            pic={event.pic}
            name={event.name}
            type={event.type}
            date={event.date}
          />
        ))}
      </ButtonSlider>
    </div>
  );
};

export default Events;
