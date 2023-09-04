import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Cast/Cast.css';

const Cast = () => {
  const API= '1623f57533b97bebcbc907a2a1164d19';
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API}`);
        const data = response.data;
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <div className='cast-color'>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
            />
            <strong>{actor.name}</strong> as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
