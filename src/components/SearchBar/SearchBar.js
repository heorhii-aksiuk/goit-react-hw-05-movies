import React, { useState } from 'react';

import PropTypes from 'prop-types';

function SearchBar({ onSubmitGet }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    return onSubmitGet(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} type="text" />
      <button type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmitGet: PropTypes.func.isRequired,
};

export default SearchBar;
