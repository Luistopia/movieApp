import { MoviesGrid } from "./Components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import MoviesByGenre from "./pages/MoviesByGenre";
import MoviesByCategory from "./pages/MoviesByCategory";



export function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies-by-genre/:genreId" element={<MoviesByGenre />} />
          <Route
            path="/movies-by-nationality/:categoryId"
            element={<MoviesByCategory />}
          />
          
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
