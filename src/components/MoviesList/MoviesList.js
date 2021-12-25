import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  console.log(movies);
  return (
    movies && (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.original_title}</NavLink>
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
