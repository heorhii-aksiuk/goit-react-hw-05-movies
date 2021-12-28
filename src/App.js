import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './views/HomePage';
import MoviePage from './views/MoviePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MovieCard from './components/MovieCard/MovieCard';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
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
          <MoviePage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage>
            <MovieCard />
            <Route path="/movies/:movieId/cast">
              <Cast />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews />
            </Route>
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
