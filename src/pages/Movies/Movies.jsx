import React, { useEffect } from 'react';
import getTrendingMovies from '../../MoviesAPI';

function App() {
  useEffect(() => {
    getTrendingMovies(1)
      .then(({ data: { results } }) => {
        console.log(results);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Hello everyone !</h1>
    </div>
  );
}

export default App;