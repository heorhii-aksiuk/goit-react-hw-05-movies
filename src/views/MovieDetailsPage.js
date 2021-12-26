import React from 'react';
import Section from '../components/Section/Section';
import PropTypes from 'prop-types';

function MovieDetailsPage({ children }) {
  return (
    <div>
      <Section>{children}</Section>
    </div>
  );
}

MovieDetailsPage.propTypes = {
  children: PropTypes.element,
};

export default MovieDetailsPage;
