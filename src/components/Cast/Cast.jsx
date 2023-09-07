import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Cast/Cast.css';
import { fetchCastData } from '../api'; 

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const castData = await fetchCastData(movieId); 
        setCast(castData);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    }

    fetchData();
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

