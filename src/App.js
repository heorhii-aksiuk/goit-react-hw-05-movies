import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './views/HomePage';
import MoviePage from './views/MoviePage';
import SearchBar from './components/SearchBar/SearchBar';
import MovieDetailsPage from './views/MovieDetailsPage';
import MovieCard from './components/MovieCard/MovieCard';
import NodFoundPage from './views/NodFoundPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <MoviePage>
            <SearchBar />
          </MoviePage>
        </Route>

        <Route exact path="/movies/:movieId">
          <MovieDetailsPage>
            <MovieCard />
          </MovieDetailsPage>
        </Route>

        <Route>
          <NodFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
