import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error al cargar películas:", error));
  }, []);

  return (
    <ul className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          movieId={movie.id}
        />
      ))}
    </ul>
  );
}

export default MovieGrid;