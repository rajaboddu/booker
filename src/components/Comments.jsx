import React from "react";
import { reviews } from "../data/reviews";
import ButtonSlider from "../designElements/ButtonSlider";
import { ReviewCard } from "../designElements/Cards";

const Comments = () => {
  return (
    <div className="mt-y">
      <h3 className="text-xl font-semibold  text-gray-800 ml-2">Buzz</h3>
      <p className="text-lg font-light ml-2">
        Discover the latest in Entertainment
      </p>

      <ButtonSlider data={reviews} width={22}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            pic={review.pic}
            days={review.days}
            review={review.review}
            likes={review.likes}
          />
        ))}
      </ButtonSlider>
    </div>
  );
};

export default Comments;
