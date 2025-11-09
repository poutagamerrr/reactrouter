import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A skilled thief enters people’s dreams to steal their secrets.",
      posterURL: "https://m.media-amazon.com/images/I/51oD9gW4ZCL._AC_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A team of explorers travels through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">🎥 Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setFilter={setFilter} addMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

function MovieCard({ movie }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">      
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4"> 
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{movie.description}</p>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{movie.rating}/5</span>
        </div>
        <Link
          to={`/movie/${movie.id}`}
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}