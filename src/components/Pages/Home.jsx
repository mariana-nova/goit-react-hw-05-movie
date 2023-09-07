import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';
import { fetchPopularMovies } from '../api'; 

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const filteredMovies = await fetchPopularMovies();
        setPopularMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='background'>
      <h2 className='title'>Trending Today</h2>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}>
              <div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
