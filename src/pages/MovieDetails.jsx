import { useEffect, useState } from "react";
import styles from "./MovieDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { get } from "../utils/httpClient";
import { Spinner } from "../Components/spinner";
import { getDefaultImg } from "../utils/getDefaultImg";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);

      // console.log("Movie Info:", data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = getDefaultImg(movie.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}></p>
        <p>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <strong>Nationality:</strong>{" "}
          <a
            href={`/movies-by-nationality/${movie.production_countries[0].iso_3166_1}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(
                `/movies-by-nationality/${movie.production_countries[0].iso_3166_1}`
              );
            }}
          >
            {movie.production_countries[0].name}
          </a>
        </p>
        <p>
          <strong>Rating:</strong> {parseFloat(movie.vote_average).toFixed(0)}
          /10
        </p>

        <p>
          <strong>Running Time: </strong>
          {movie.runtime} min
        </p>

        <p>
          <strong>Genre: </strong>
          {movie.genres
            .map((genre) => (
              <a key={genre.id} href={`/movies-by-genre/${genre.id}`}>
                {genre.name}
              </a>
            ))
            .reduce((prev, curr) => [prev, ", ", curr])}
        </p>
      </div>
    </div>
  );
}
