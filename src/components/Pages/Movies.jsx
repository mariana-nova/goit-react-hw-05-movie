import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Pages/Movies.css';

const Movies = () => {
  const API = '1623f57533b97bebcbc907a2a1164d19'; 
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${searchQuery}`);
      const data = response.data;
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className='background'>
      <h2 className='title'>Seeker</h2>
      <div>
        <input
          type="text"
          placeholder="LOOK FOR YOUR MOVIE"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
