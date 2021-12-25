import React, { useState, useEffect } from 'react';

// import PropTypes from 'prop-types';
import Section from '../components/Section/Section';
import fetchAPI from '../services/fetchAPI';

function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState(null);

  useEffect(() => {
    fetchAPI('/trending/movie/day').then(setTrendingFilms);
  }, []);

  console.log(trendingFilms);

  return (
    <div>
      <Section>
        <h1>HomePage</h1>
      </Section>
    </div>
  );
}

// HomePage.propTypes = {};

export default HomePage;
