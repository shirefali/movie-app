import "./MoviesList.css";

const MoviesList = ({ Title, Year, Type, Poster }) => {
  return (
    <section className="movies-list">
      <img src={Poster} alt={Title} />
      <div>
        <h3>{Title}</h3>
        <span>{Year}</span>
        <div className="buttons">
          <button type="button" className="btn">
            Add To WatchList
          </button>
          <button type="button" className="btn">
            Add To Watched
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoviesList;
