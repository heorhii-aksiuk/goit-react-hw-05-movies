import React from 'react';
import Section from '../components/Section/Section';
import PropTypes from 'prop-types';

function MoviePage({ children }) {
  return (
    <div>
      <Section title="Search your movie">{children}</Section>
    </div>
  );
}

MoviePage.propTypes = {
  children: PropTypes.element,
};

export default MoviePage;
