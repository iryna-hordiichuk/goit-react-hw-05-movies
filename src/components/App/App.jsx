import {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

const Home = lazy(()=>import('pages/Home'));
const Movies = lazy(()=>import('pages/Movies'));
const MovieDetails = lazy(()=>import('pages/MovieDetails'));
const Cast = lazy(()=> import('components/Cast'));
const Reviews = lazy(()=>import('components/Reviews'));
const NotFound = lazy(()=>import('pages/Not-Found'));

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from '../Cast';
// import Reviews from 'components/Reviews/Reviews';
// import NotFound from 'pages/Not-Found';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route />
        </Route>
      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default App;
