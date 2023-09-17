import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getTrendingMovies from 'MoviesAPI';
import { trendingMapper } from 'mappers/trendingMapper';

import MoviesList from 'components/MoviesList/MoviesList';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies(1)
      .then(({ data: { results } }) => {
        const movies = trendingMapper(results);

        setTrendingMovies(movies);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <main>
      <Title>Trending movies</Title>
      {error && <ErrorMessage />}
      {trendingMovies?.length > 0 && (
        <MoviesList movies={trendingMovies} location={location} />
      )}
    </main>
  );
};

export default Home;
