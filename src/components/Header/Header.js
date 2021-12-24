import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

// import PropTypes from 'prop-types';

function Header() {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
