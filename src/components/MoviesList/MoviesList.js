import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    movies && (
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className={s.item}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
              className={s.link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }),
  ),
};

export default MoviesList;
