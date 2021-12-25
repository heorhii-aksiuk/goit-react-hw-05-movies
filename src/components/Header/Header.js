import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';
import s from './Header.module.css';

// import PropTypes from 'prop-types';

function Header() {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <NavLink exact to="/" className={s.logo}>
          <GiFilmStrip className={s.svg} />
          <span className={s.logoText}>MovieOn</span>
        </NavLink>
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
