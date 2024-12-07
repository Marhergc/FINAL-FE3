import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {}
      <div className="ms-auto">
        <button className="theme-toggle" onClick={toggleTheme}>
          Cambiar tema
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
