import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error al cargar la película:", error));
  }, [movieId]);

  if (!movie) {
    return <p>Cargando información...</p>;
  }

  return (
    <main>
      <img
        src={getMovieImg(movie.poster_path, 500)}
        alt={movie.title}
      />

      <h2>{movie.title}</h2>

      <h3>Géneros</h3>
      <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>

      <h3>Sinopsis</h3>
      <p>{movie.overview}</p>
    </main>
  );
}

export default MovieDetails;