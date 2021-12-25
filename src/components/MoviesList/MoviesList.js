import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MovieList.module.css';
// import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  console.log(movies);
  return (
    movies && (
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className={s.item}>
            <NavLink to={`/movies/${movie.id}`} className={s.link}>
              {movie.original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    )
  );
}

// MoviesList.propTypes = {
//   movies:
// };

export default MoviesList;
