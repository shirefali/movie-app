import * as actions from "../context/ActionsType";
import { useMoviesContext } from "../context/GlobalContext";
import "./MoviesList.css";

const MoviesList = ({ movie }) => {
  const MovieContext = useMoviesContext();
  const storedMovie = MovieContext.watchlist.find(
    (foundMovie) => foundMovie.imdbID === movie.imdbID
  );

  const storedMovieWatched = MovieContext.watched.find(
    (foundMovie) => foundMovie.imdbID === movie.imdbID
  );

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <section className="movies-list">
      <div className="movies-list-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
        <div>
          <h3>{movie.Title}</h3>
          <span>{movie.Year ? movie.Year : "-"}</span>
          <div className="buttons">
            <button
              type="button"
              className="btn"
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHLIST,
                  payload: movie,
                })
              }
              disabled={watchlistDisabled}
            >
              Add To WatchList
            </button>
            <button
              type="button"
              className="btn"
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHED,
                  payload: movie,
                })
              }
              disabled={watchedDisabled && watchlistDisabled}
            >
              Add To Watched
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesList;
