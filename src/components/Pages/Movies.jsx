import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Movies.css';
import { searchMovies } from '../api'; 

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await searchMovies(searchQuery); 
      setSearchResults(results);
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
