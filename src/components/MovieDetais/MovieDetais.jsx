import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../api/tmdb';
import { Link, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from './MovieDetais.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const fetchedMovie = await fetchMovieDetails(movieId);
      setMovie(fetchedMovie);
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.details}>
      <div className={styles.posterContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.posterImage}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <nav className={styles.nav}>
          <Link to="cast">Cast</Link> <Link to="reviews">Reviews</Link>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
