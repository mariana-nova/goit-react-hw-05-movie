import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import '../MovieDetails/Details.css';

const MovieDetails = () => {
  const API= '1623f57533b97bebcbc907a2a1164d19'; 
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&append_to_response=credits,reviews`);
        const data = response.data;
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className='details'>
      <div>
        {movieDetails && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div>
              <h2>
                {movieDetails.title} (
                {new Date(movieDetails.release_date).getFullYear()})
              </h2>
              <p>User Score: {movieDetails.vote_average}</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movieDetails.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div>
        <h3>More Information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
