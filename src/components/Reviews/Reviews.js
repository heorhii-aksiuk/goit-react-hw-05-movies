import React, { useState, useEffect } from 'react';
import fetchAPI from '../../services/fetchAPI';
import PropTypes from 'prop-types';

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchAPI(`/movie/${movieId}/reviews`).then(setReviews);
  }, [movieId]);

  return reviews ? (
    <div>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.author}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <h4>There aren't any reviews yet</h4>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
