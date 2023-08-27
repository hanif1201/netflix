import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";

const base_url = `https://image.tmdb.org/t/p/original/`;

const Row = ({ tittle, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2>{tittle}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.original_title}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
