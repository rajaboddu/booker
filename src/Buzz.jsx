import React from "react";
import Trending from "./components/Trending";
import { reviews } from "./data/reviews";
import { ReviewCard } from "./designElements/Cards";

const Buzz = () => {
  return (
    <div>
      {/*Top Heading bar */}
      <div className="flex flex-col p-1 justify-center bg-gray-800">
        <h2 className="text-white font-semibold text-2xl">BUZZ</h2>
        <p className="text-white font-light text-base">
          Discover what's trending in entertainment &gt;
        </p>
      </div>
      {/*Trending Events */}
      <Trending />
      {/* Reviews */}
        <h3 className="text-xl font-semibold text-gray-800 ml-5">Reviews</h3>
        <div className="flex flex-col items-center space-y-3 my-2">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              pic={review.pic}
              days={review.days}
              likes={review.likes}
              review={review.review}
            />
          ))}
        </div>
    </div>
  );
};

export default Buzz;
