import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className="text-center max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
      <p className="text-gray-600 mb-6">{movie.description}</p>

      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          className="w-full h-96 rounded-xl shadow-lg"
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <Link
        to="/"
        className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default MovieDescription;
