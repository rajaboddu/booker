import React from "react";
import { movies } from "../data/movies";
import ButtonSlider from "../designElements/ButtonSlider";
import { MovieCard } from "../designElements/Cards";

const Movies = () => {
  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold text-gray-800 m-2">
        Recommended Movies
      </h3>
      <ButtonSlider data={movies} width={11}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            name={movie.name}
            rating={movie.rating}
            pic={movie.pic}
          />
        ))}
      </ButtonSlider>
    </div>
  );
};

export default Movies;
