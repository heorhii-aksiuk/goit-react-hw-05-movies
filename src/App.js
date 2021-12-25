import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './views/HomePage';
import MoviePage from './views/MoviePage';

function App() {
  return (
    <>
      <Header></Header>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/movies">
        <MoviePage />
      </Route>
    </>
  );
}

export default App;
