import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Movie App</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
