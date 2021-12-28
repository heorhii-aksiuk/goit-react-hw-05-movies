import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MovieCard from './components/MovieCard/MovieCard';
const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviePage = lazy(() =>
  import('./views/MoviePage' /* webpackChunkName: "MoviePage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const NodFoundPage = lazy(() =>
  import('./views/NodFoundPage' /* webpackChunkName: "NodFoundPage" */),
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
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
            </MovieDetailsPage>
          </Route>

          <Route>
            <NodFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
