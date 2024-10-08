import React, { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../api/tmdb';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Failed to fetch movie credits:', error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.cast_id} className={styles.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className={styles.actorImage}
            />
            <span className={styles.actorName}>{actor.name}</span>
            <span className={styles.characterName}> as {actor.character}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
