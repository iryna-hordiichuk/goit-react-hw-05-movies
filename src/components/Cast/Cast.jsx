import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById, posterBaseUrl } from 'MoviesAPI';

import { CastList, CastItem, CastImg} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(cast);

  useEffect(() => {
    getCastById(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast?.length > 0 && (
        <CastList>
          {cast.map(({ id, name, character, profilePath }) => (
            <CastItem key={id}>
              <CastImg
                src={
                  profilePath ? (
                    posterBaseUrl + profilePath
                  ) : (
                    <p>There is no picture available for this actor</p>
                  )
                }
               
              />
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;
