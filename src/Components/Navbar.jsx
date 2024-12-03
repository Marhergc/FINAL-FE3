import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}>
        {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
