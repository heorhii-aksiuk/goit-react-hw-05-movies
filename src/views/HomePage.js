import React, { useState, useEffect } from 'react';
import Section from '../components/Section/Section';
import MoviesList from '../components/MoviesList/MoviesList';
import fetchAPI from '../services/fetchAPI';
import { IDLE, PENDING, RESOLVED, REJECTED } from '../services/stateMachine';

function HomePage() {
  const [status, setStatus] = useState(IDLE);
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(PENDING);
    fetchAPI('/trending/movie/day')
      .then(response => {
        setStatus(RESOLVED);
        setTrendingMovies(response);
      })
      .catch(error => {
        setStatus(REJECTED);
        setError(error);
      });
  }, []);

  return (
    <>
      <Section title="Trending today">
        {status === IDLE && <p>IDLE</p>}
        {status === PENDING && <p>PENDING</p>}
        {status === RESOLVED && <MoviesList movies={trendingMovies} />}
        {status === REJECTED && <p>{error.message}</p>}
      </Section>
    </>
  );
}

export default HomePage;
