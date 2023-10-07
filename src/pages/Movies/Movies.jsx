import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

import { getMovieByQuery } from 'MoviesAPI';

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();


  useEffect(() => {
    getMovieByQuery(query)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, [query]);

  const onChange = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

return (
<>
<SearchForm onChange={onChange} value={query} />
{/* <MoviesList movies={queryMovies} location={location}/> */}


</>



)



};

export default Movies;
