import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Pages/Home.css';
const Home = () => {
  const API = '1623f57533b97bebcbc907a2a1164d19'; 
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API}`);
        const data = response.data;
        const filteredMovies = data.results.filter(movie => movie.title);
        setPopularMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchPopularMovies();
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
