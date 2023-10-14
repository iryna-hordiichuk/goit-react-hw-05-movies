import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';

import { getMovieById, posterBaseUrl } from 'MoviesAPI';
import ErrorMessage from 'components/ErrorMessage';
import BackLink from 'components/BackLink';
import Container from 'components/Container';
import {
  MainSection,
  MovieTitle,
  SecondaryTitle,
  Text,
  AdditionalSection,
  AdditionalTitle,
  LinkList,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(Number(movieId))
      .then(movie => {
        setMovie(movie);
        setError(null);
      })
      .catch(error => {
        console.log(error.status_message);
        setError(error.status_message);
        setMovie(null);
      });
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}> Go back </BackLink>
      {!movie && error && <ErrorMessage>Please reload the page.</ErrorMessage>}
      {movie && (
        <>
          <MainSection>
            <img
              src={posterBaseUrl + movie.posterPath}
              alt={movie.title}
              width={250}
            ></img>

            <Container as="div" display="flex" flexDirection="column">
              {
                <MovieTitle>
                  {movie.title} ({new Date(movie.releaseDate).getFullYear()})
                </MovieTitle>
              }
              <Text> User score: {movie.voteAverage.toFixed(1)}</Text>
              <SecondaryTitle>Overview</SecondaryTitle>
              <Text>{movie.overview}</Text>

              <SecondaryTitle>Genres: </SecondaryTitle>
              {movie.genres.map(genre => genre.name.toLowerCase()).join(', ')}
            </Container>
          </MainSection>
          <AdditionalSection>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <LinkList>
              <li>
                {' '}
                <StyledNavLink to="cast" state={{ from: backLinkHref }}>
                  Cast
                </StyledNavLink>
              </li>
              <li>
                {' '}
                <StyledNavLink to="reviews" state={{ from: backLinkHref }}>
                  Reviews
                </StyledNavLink>
              </li>
            </LinkList>
            <Suspense
              fallback={
                <BarLoader
                  loading={true}
                  color="#35495e"
                  cssOverride={{
                    display: 'block',
                    margin: '0 auto',
                  }}
                  height={150}
                  aria-label="Loading Spinner"
                />
              }
            >
              <Outlet />
            </Suspense>
          </AdditionalSection>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
