import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Reviews/Reviews.css';

const Reviews = () => {
  const API= '1623f57533b97bebcbc907a2a1164d19'; 
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API}`);
        const data = response.data;
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }

    fetchReviews();
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
