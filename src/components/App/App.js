import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
          <Route />
        </Route>
      </Route>

      {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  );
};

export default App;
