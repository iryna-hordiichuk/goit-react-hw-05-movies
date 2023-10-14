import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'MoviesAPI';
import { trendingMapper } from 'mappers';

import MoviesList from 'components/MoviesList/MoviesList';
import ErrorMessage from 'components/ErrorMessage';
import { Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(({ data: { results } }) => {
        const movies = trendingMapper(results);

        setTrendingMovies(movies);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <main>
      <Title>Trending movies</Title>
      {trendingMovies?.length > 0 && !error && (
        <MoviesList movies={trendingMovies} location={location} />
      )}
      {error && (
        <ErrorMessage>
          Something went wrong, please reload the page.
        </ErrorMessage>
      )}
    </main>
  );
};

export default Home;
