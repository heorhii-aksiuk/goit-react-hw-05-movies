import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/Section/Section';
import MovieCard from '../components/MovieCard/MovieCard';

function MovieDetailsPage() {
  return (
    <div>
      <Section title="Movie info">
        <MovieCard />
      </Section>
    </div>
  );
}

MovieDetailsPage.propTypes = {
  children: PropTypes.any,
};

export default MovieDetailsPage;
