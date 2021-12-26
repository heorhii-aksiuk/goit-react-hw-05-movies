import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from '../../services/fetchAPI';

function MovieCard() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchAPI(`/movie/${movieId}`).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <h3>{movie.title}</h3>
        <p>tagline: {movie.tagline}</p>
        <p>release_date: {movie.release_date}</p>
        <p>vote_average: {movie.vote_average}</p>
        <p>vote_count: {movie.vote_count}</p>
        <p>runtime: {movie.runtime}</p>
        <p>discription: {movie.overview}</p>
        <ul>
          genres:
          {movie.genres.map(genre => {
            return <li>{genre.name}</li>;
          })}
        </ul>
      </div>
    )
  );
}

export default MovieCard;
