import { Link } from 'react-router-dom';
import {
  MoviesListStyled,
  MovieItem,
  MovieTitle,
  MovieImage,
  RealeseDate,
} from './MoviesList.styled';
import { posterBaseUrl } from 'MoviesAPI';
import Container from 'components/Container/Container';


const MoviesList = ({ movies, location }) => {
  return (
    <MoviesListStyled>
      {movies.map(({ id, title, posterPath, release }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {posterPath ? (
              <MovieImage
                src={posterBaseUrl + posterPath}
                alt={title}
                loading="lazy"
              />
            ) : (
              <p style={{ margin: '24px', color: 'black'}}>
                There is no poster avaliable for this movie
              </p>
            )}

            <Container>
              <MovieTitle>
                {title ? title : 'Sorry, there is no title'}
              </MovieTitle>
              <RealeseDate>
                Release: {release ? new Date(release).getFullYear() : '****'}
              </RealeseDate>
            </Container>
          </Link>
        </MovieItem>
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
