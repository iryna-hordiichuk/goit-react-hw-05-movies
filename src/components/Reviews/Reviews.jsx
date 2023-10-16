import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'MoviesAPI';
import ErrorMessage from 'components/ErrorMessage';
import { ReviewsList, ReviewAuthor, ReviewText } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(reviews);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews).catch(setError);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 && !error && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <ReviewAuthor>Author: {author}</ReviewAuthor>
              <ReviewText>{content}</ReviewText>
            </li>
          ))}
        </ReviewsList>
      )}
      {reviews.length === 0 && !error && (
        <p>There are no reviews for this movie</p>
      )}
      {error && (
        <ErrorMessage>
          Somethig went wrong, please reload the page.
        </ErrorMessage>
      )}
    </>
  );
};

export default Reviews;

//! Question: do I need state isLoading here ?