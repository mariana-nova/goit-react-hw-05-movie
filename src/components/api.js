import axios from 'axios';

const API_KEY = '1623f57533b97bebcbc907a2a1164d19';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
    const data = response.data;
    const filteredMovies = data.results.filter(movie => movie.title);
    return filteredMovies;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const searchMovies = async (searchQuery) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchCastData = async (movieId) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};



