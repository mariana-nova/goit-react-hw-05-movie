import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Reviews/Reviews.css';
import { fetchMovieReviews } from '../api'; 

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviewsData() {
      try {
        const reviewsData = await fetchMovieReviews(movieId); 
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }

    fetchReviewsData();
  }, [movieId]);

  return (
    <div className='reviews-color'>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>{review.author}</strong>: {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

