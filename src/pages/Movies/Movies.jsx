import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import ErrorMessage from 'components/ErrorMessage';
import { trendingMapper } from 'mappers';

import { getMovieByQuery } from 'MoviesAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovieByQuery(query)
      .then(results => {
        const movies = trendingMapper(results);
        setMovies(movies);
        if (movies.length === 0) {
          toast.error('Sorry, no movies was found');
        }
      })

      .catch(error => {
        console.log(error.message);
        setError(error);

      });
  }, [query]);

  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget; // this is equivalent to event.target
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {error && <ErrorMessage/>}
      {movies.lenght !== 0 && (
        <MoviesList movies={movies} location={location} />
      )}
    </>
  );
};

export default Movies;

// So, in this specific case, using either event.target or event.currentTarget 
// to reference the form element doesn't make any practical difference 
// because they point to the same element – the form element that triggered the submit event.