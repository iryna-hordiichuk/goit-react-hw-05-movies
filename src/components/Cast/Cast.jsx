import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById, posterBaseUrl } from 'MoviesAPI';
import ErrorMessage from 'components/ErrorMessage';

import { CastList, CastItem, CastImg, StyledContainer } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getCastById(Number(movieId)).then(setCast).catch(setError);
  }, [movieId]);

  return (
    <>
      {cast?.length > 0 && !error && (
        <CastList>
          {cast.map(({ id, name, character, profilePath }) => (
            <CastItem key={id}>
              {profilePath ? (
                <CastImg
                  src={posterBaseUrl + profilePath}
                  alt={name}
                  loading="lazy"
                />
              ) : (
                <p>
                  There is no picture <br />
                  available for this actor
                </p>
              )}
              <StyledContainer>
                Name: {name} <b />
                Character: {character}
              </StyledContainer>
            </CastItem>
          ))}
        </CastList>
      )}
      {error && (
        <ErrorMessage>
          Oops! Something went wrong, <br />
          please reload the page !
        </ErrorMessage>
      )}
    </>
  );
};

export default Cast;
