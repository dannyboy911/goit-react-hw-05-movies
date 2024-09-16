// src/components/Movies/Movies.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from '../../api/tmdb';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const history = useNavigate();
  const location = useLocation();

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearch = async e => {
    e.preventDefault();
    if (query.trim() === '') return;

    const data = await searchMovies(query);
    setMovies(data.results);

    // Update the URL with the search query
    history.push({
      pathname: location.pathname,
      search: `?query=${query}`,
    });
  };

  return (
    <div className={styles.container}>
      <h1>Search for Movies</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter movie name..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <ul className={styles.movieList}>
          {movies.map(movie => (
            <li key={movie.id}>
              <a href={`/movies/${movie.id}`}>{movie.title}</a>
            </li>
          ))}
        </ul>
      )}
      {movies.length === 0 && query && <p>No movies found for "{query}".</p>}
    </div>
  );
};

export default Movies;
