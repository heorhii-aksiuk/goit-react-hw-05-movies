import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from '../../services/fetchAPI';

function MovieCard() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchAPI(`/movie/${movieId}`).then(setMovie);
  }, [movieId]);

  console.log(movie);
  return (
    movie && (
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    )
  );
}

export default MovieCard;
