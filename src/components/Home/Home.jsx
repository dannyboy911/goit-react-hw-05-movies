// src/components/Home/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies, searchMovies } from '../../api/tmdb'; // Import searchMovies function
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (isSearching) {
        const data = await searchMovies(searchQuery);
        setMovies(data.results);
      } else {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      }
    };

    fetchMovies();
  }, [searchQuery, isSearching]);

  const handleSearch = e => {
    e.preventDefault();
    setIsSearching(true);
  };

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.moviePoster}
              />
              <span className={styles.movieTitle}>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
