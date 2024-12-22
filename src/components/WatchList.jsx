import { useMoviesContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";
import "./Watchlist.css";

const WatchList = () => {
  const MovieContext = useMoviesContext();
  return (
    <section className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1>My Watchlist</h1>
          <span className="movies-count">
            {MovieContext.watched.length}{" "}
            {MovieContext.watched.length <= "1" ? "movie" : "movies"}
          </span>
        </div>
        {MovieContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watchlist.map((movie) => {
              return (
                <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
              );
            })}
          </div>
        ) : (
          <h2 className="no-movies">No Movies In Your Watchlist!</h2>
        )}
      </div>
    </section>
  );
};

export default WatchList;
