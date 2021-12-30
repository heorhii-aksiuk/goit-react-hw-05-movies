import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/Section/Section';

function MovieDetailsPage({ children }) {
  return (
    <div>
      <Section title="Movie info">{children}</Section>
    </div>
  );
}

MovieDetailsPage.propTypes = {
  children: PropTypes.any,
};

export default MovieDetailsPage;
