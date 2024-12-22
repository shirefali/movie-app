const WatchedCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      <img src={movie.Poster} alt={movie.type} type={type} />
    </div>
  );
};

export default WatchedCard;
