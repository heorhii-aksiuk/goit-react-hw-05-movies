import React, { useState, useEffect } from 'react';
import Section from '../components/Section/Section';
import MoviesList from '../components/MoviesList/MoviesList';
import fetchAPI from '../services/fetchAPI';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    fetchAPI('/trending/movie/day').then(setTrendingMovies);
  }, []);

  return (
    <>
      <Section title="Trending today">
        <MoviesList movies={trendingMovies} />
      </Section>
    </>
  );
}

export default HomePage;
