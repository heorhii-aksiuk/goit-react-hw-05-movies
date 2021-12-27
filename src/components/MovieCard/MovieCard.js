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
        <div>
          <img
            src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        </div>
        <div>
          <h3>{movie.title}</h3>
          <h4>{movie.tagline}</h4>
          <ul>
            <li>Vote: {movie.vote_average}/10</li>
            <li>Votes: {movie.vote_count}</li>
            <li>Release date: {movie.release_date}</li>
            <li>
              Runtime: {Math.floor(movie.runtime / 60)}:{movie.runtime % 60}
            </li>
          </ul>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <ul>
            Genres
            {movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </div>
      </div>
    )
  );
}

export default MovieCard;
