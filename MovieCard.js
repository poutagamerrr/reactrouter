import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
      <img src={movie.posterURL} alt={movie.title} className="w-full h-72 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <p className="text-gray-500">⭐ {movie.rating}/5</p>
      </div>
    </div>
  );
};

export default MovieCard;
