import React, { lazy, Suspense } from 'react';
import { Routes, Route,Link } from 'react-router-dom';
import '../index.css';
import './App.css';

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <div className='container'>
      <header className='app-container'>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/movies">Movie</Link>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
