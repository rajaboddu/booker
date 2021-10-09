import React, { useState } from "react";
import { cities } from "./data/cities";

const Location = () => {
  const [city, setCity] = useState("");
  const [displayCities, setdisplayCities] = useState(cities);

  const handleChange = (e) => {
    setCity(e.target.value);
    if (city.length <= 1) {
      setdisplayCities(cities);
    } else if (city.length > 0) {
      let updateCities = displayCities.filter((cityName) =>
        cityName.name.toLowerCase().includes(city.toLowerCase())
      );
      setdisplayCities(updateCities);
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto bg-blue-500 min-h-screen">
      <div className="max-w-lg mx-auto flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          className="bg-red-400"
          onChange={handleChange}
          value={city}
        />
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-2">
        {displayCities.map((town) => (
          <div key={town.id} className="border-2 text-center">
            <p className="text-lg font-medium">{town.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
