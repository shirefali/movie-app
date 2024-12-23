import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-text">
            Movies
          </Link>
        </div>
        <ul>
          <li>
            <NavLink to="/">Watchlist</NavLink>
          </li>
          <li>
            <NavLink to="/watched">Watched</NavLink>
          </li>
          <li>
            <NavLink to="/add" className="btn" style={{ border: "1px" }}>
              Add
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
