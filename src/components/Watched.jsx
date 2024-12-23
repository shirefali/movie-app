import { useMoviesContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";
import "./Watched.css";

const Watched = () => {
  const MovieContext = useMoviesContext();
  return (
    <section className="watched">
      <div className="container">
        <div className="main-heading">
          <h1>My Watched</h1>
          <span className="movies-count">
            {MovieContext.watched.length}{" "}
            {MovieContext.watched.length <= "1" ? "movie" : "movies"}
          </span>
        </div>
        {MovieContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies Watched Yet !</h2>
        )}
      </div>
    </section>
  );
};

export default Watched;
