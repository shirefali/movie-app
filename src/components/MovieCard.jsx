import MovieButtons from "./MovieButtons";
import "./Watchlist.css";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <MovieButtons movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
