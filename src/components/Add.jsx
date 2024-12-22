import { useState, useEffect } from "react";
import "./Add.css";
import axios from "axios";
import MoviesList from "./MoviesList";

const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=a6491b2c`)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      })
      .catch((error) => console.log(error.message));
  }, [searchValue]);

  return (
    <section className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              name="search-movie"
            />
          </div>
          <ul className="results">
            {movies.length ? (
              movies.map((movie) => {
                return (
                  <li key={movie.imdbID}>{<MoviesList movie={movie} />}</li>
                );
              })
            ) : (
              <h3>No Movies You Search Yet</h3>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Add;
