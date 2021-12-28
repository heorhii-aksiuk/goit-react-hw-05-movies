import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Section from '../components/Section/Section';
import MoviesList from '../components/MoviesList/MoviesList';
import fetchAPI from '../services/fetchAPI';

function MoviePage() {
  const [inputValue, setInputValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState(null);

  function getSubmitValue(value) {
    setInputValue(value);
  }

  useEffect(() => {
    if (!inputValue) return;
    fetchAPI('/search/movie', `${inputValue}`).then(setSearchedMovies);
  }, [inputValue]);

  return (
    <div>
      <Section title="Search your movie">
        <SearchBar onSubmitGet={getSubmitValue} />
        <MoviesList movies={searchedMovies} />
      </Section>
    </div>
  );
}

export default MoviePage;
