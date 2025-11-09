import React, { useState } from "react";

const Filter = ({ setFilter, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailer: ""
  });

  const handleAdd = () => {
    if (!newMovie.title) return alert("Please add a title!");
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0, trailer: "" });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Filter by title"
          className="border rounded-md p-2"
          onChange={(e) => setFilter((f) => ({ ...f, title: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          className="border rounded-md p-2"
          onChange={(e) => setFilter((f) => ({ ...f, rating: Number(e.target.value) }))}
        />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Movie title"
          className="border rounded-md p-2"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          className="border rounded-md p-2"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="text"
          placeholder="Trailer Link (embed URL)"
          className="border rounded-md p-2"
          value={newMovie.trailer}
          onChange={(e) => setNewMovie({ ...newMovie, trailer: e.target.value })}
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default Filter;
