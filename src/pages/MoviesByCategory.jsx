// Nuevo componente MoviesByCategory.jsx
import React, { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "../Components/MovieCard";
import styles from "../Components/MovieGrid.module.css";
import { Spinner } from "../Components/spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../Components/Empty";
import { useParams } from "react-router-dom";

function MoviesByCategory() {
  const { categoryId } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    get(`/discover/movie?with_origin_country=${categoryId}&page=${page}`)
      .then((data) => { console.log("This is category result:" + data);
        setMovies((prevMovies) => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

export default MoviesByCategory;
