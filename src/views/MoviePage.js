import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Section from '../components/Section/Section';

// import PropTypes from 'prop-types';

function MoviePage() {
  const [inputValue, setInputValue] = useState('');

  function getSubmitValue(value) {
    setInputValue(value);
  }

  console.log(inputValue);

  return (
    <div>
      <Section title="Search your movie">
        <SearchBar onSubmitGet={getSubmitValue} />
      </Section>
    </div>
  );
}

// MoviePage.propTypes = {
//   children: PropTypes.element,
// };

export default MoviePage;
