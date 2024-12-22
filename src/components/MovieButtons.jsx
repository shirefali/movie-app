import { useMoviesContext } from "../context/GlobalContext";
import "./WatchList.css";
import * as actions from "../context/ActionsType";

const MovieButtons = ({ movie, type }) => {
  const MovieContext = useMoviesContext();
  return (
    <div className="inner-card-buttons">
      {type === "watchlist" && (
        <>
          <button
            type="button"
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye" />
          </button>
          <button
            type="button"
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            type="button"
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye-slash" />
          </button>
          <button
            type="button"
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
          >
            <i
              className="fa-fw fa fa-times"
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.REMOVE_MOVIE_FROM_WATCHED,
                  payload: movie.imdbID,
                })
              }
            />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieButtons;
