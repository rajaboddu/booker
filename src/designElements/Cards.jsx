import React from "react";
import image from "../assests/event1.jpg";
import image2 from "../assests/event2.jpg";
import { Bookmark } from "../components/Icons";
import { Like } from "../components/Icons";
import { Share } from "../components/Icons";
import movie from "../assests/godzilla.webp";

export const StreamingCard = ({ pic, genre, title }) => {
  return (
    <div className="flex flex-col w-screen bg-gray-800 flex-none sm:flex-auto">
      <div className="flex justify-center m-2">
        <div className="flex-none mx-2">
          <img
            className="w-36 h-52 object-cover rounded-lg"
            src={pic}
            alt="alternate"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-lg">{title}</h1>
          <p className="text-white">1hr 32m {genre}, 18+</p>
          <p className="text-white">English</p>
          <p className="line-clamp-3 text-white text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
            quam perferendis provident facere consequuntur iusto molestiae
            laborum dolorem sapiente ipsam eius, rem vero maxime repudiandae
            quaerat, voluptas quasi. Fuga, molestias!
          </p>
        </div>
      </div>
      <button
        className="bg-red-500 text-lg text-white my-2
       mx-4 rounded-sm py-1 font-normal"
      >
        Buy or Rent
      </button>
    </div>
  );
};

export const ReviewCard = () => {
  return (
    <div className="flex m-5 border-gray-400 border px-1">
      <div className="p-1.5 flex-none">
        <img
          className="object-cover w-24 h-24 rounded-xl"
          src={image}
          alt="notfound"
        />
      </div>
      <div className="flex flex-col justify-around">
        <div>
          <Bookmark />

          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptas possimus quasi explicabo nulla fugit modi, consequatur quas
            ipsa velit magni, vel perferendis sunt in tenetur, et nobis id.
            Aspernatur!
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center justify-around">
            <img className="rounded-full w-8 h-8" src={image2} alt="notfound" />
            <p>8 days ago</p>
          </div>
          <div className="flex items-center justify-around">
            <Like />
            <p>168</p>
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MovieCard = () => {
  return (
    <div className="w-40 h-[17rem] rounded-lg overflow-hidden bg-green-500">
      <img src={movie} className="h-[15.5rem] object-full" alt="movie" />
      <div className="flex justify-center items-center bg-gray-900">
        <Like />
        <p className="text-white">75%</p>
      </div>
    </div>
  );
};

export const PopularCard = ({ image, buttonText, classValue }) => {
  return (
    <div className="relative w-screen h-52 bg-yellow-400 flex-none sm:flex-auto">
      <img
        className="object-full w-full h-full"
        src={image}
        alt="popular-event"
      />
      <button
        className="bg-red-500 text-lg text-white my-2
       mx-4 rounded-sm py-1 font-normal absolute bottom-3 right-0"
      >
        Book Now
      </button>
    </div>
  );
};
