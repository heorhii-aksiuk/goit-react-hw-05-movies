import React, { useState, useEffect } from 'react';

// import PropTypes from 'prop-types';
import Section from '../components/Section/Section';
import MoviesList from '../components/MoviesList/MoviesList';

import fetchAPI from '../services/fetchAPI';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    fetchAPI('/trending/movie/day').then(setTrendingMovies);
  }, []);

  console.log(trendingMovies);

  return (
    <div>
      <Section>
        <h1>HomePage</h1>
        <MoviesList movies={trendingMovies} />
      </Section>
    </div>
  );
}

// HomePage.propTypes = {};

export default HomePage;
