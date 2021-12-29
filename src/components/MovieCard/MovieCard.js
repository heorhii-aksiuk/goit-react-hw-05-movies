import React, { useState, useEffect } from 'react';
import {
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import fetchAPI from '../../services/fetchAPI';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

function MovieCard() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [prevLocation] = useState(location?.state?.from);

  useEffect(() => {
    fetchAPI(`/movie/${movieId}`).then(setMovie);
  }, [movieId]);

  function goBack() {
    history.push(prevLocation ?? '/');
  }

  return (
    movie && (
      <div>
        <button onClick={goBack} type="button">
          Go back
        </button>
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
        <div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>

        <Route path="/movies/:movieId/cast">
          <Cast movieId={movieId} />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews movieId={movieId} />
        </Route>
      </div>
    )
  );
}

export default MovieCard;
