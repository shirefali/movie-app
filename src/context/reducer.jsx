import WatchList from "../components/WatchList";
import * as actions from "./ActionsType";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        WatchList: [action.payload, ...state.WatchList],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        WatchList: state.WatchList.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        WatchList: [action.payload, ...state.WatchList],
      };
  }
};
