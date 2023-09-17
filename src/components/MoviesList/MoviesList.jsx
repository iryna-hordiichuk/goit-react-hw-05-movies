import { Link } from 'react-router-dom';
import {MoviesListStyled, MovieItem, MovieTitle, MovieImage, RealeseDate } from './MoviesList.styled';
import { posterBaseUrl } from 'MoviesAPI';
import Container from 'components/Container/Container';


const MoviesList = ({movies, location}) => {
  
  return (
    <MoviesListStyled>
      {movies.map(({id, title, posterPath, release}) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
           <MovieImage src={posterBaseUrl + posterPath} alt={title} loading= 'lazy' width={250}/>
           <Container>
            <MovieTitle>{title}</MovieTitle>
            <RealeseDate>Release: {release}</RealeseDate>
           </Container>
          </Link>
        </MovieItem>
        
      ))}
      </MoviesListStyled>
  );
};

export default MoviesList;
