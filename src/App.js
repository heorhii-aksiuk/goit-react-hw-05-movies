import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './views/HomePage';
import MoviePage from './views/MoviePage';
import NodFoundPage from './views/NodFoundPage';

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoviePage />
        </Route>
        <Route>
          <NodFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
