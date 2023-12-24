import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";


export function MoviesGrid({search}) {
 
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

 
  

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
    ? `/search/movie?query=${encodeURIComponent(search)}&page=${page}`
    : "/discover/movie?page=" + page;
  

    get(searchUrl)
      .then((data) => {
        setMovies(prevMovies => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search, page]);

if(!isLoading && movies.length === 0){
 return  <Empty />
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
