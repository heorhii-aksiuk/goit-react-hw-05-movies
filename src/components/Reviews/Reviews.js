import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import fetchAPI from '../../services/fetchAPI';
import { IDLE, PENDING, RESOLVED, REJECTED } from '../../services/stateMachine';

function Reviews({ movieId }) {
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    setStatus(PENDING);
    fetchAPI(`/movie/${movieId}/reviews`)
      .then(response => {
        setReviews(response);
        setStatus(RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(REJECTED);
      });
  }, [movieId]);

  return (
    <div>
      {status === RESOLVED &&
        (reviews ? (
          <ul>
            {reviews.map(review => {
              return (
                <li key={review.id}>
                  <h4>{review.author}</h4>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h4>There aren't anyreviews yet</h4>
        ))}
      {status === IDLE && <p>IDLE</p>}
      {status === PENDING && <Loader />}
      {status === REJECTED && <p>{error.message}</p>}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;

// reviews ? () : (
//     <h4>There aren't anyreviews yet</h4>)
