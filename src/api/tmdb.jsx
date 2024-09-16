// src/api/tmdb.js
const API_KEY = '8046776e81074fcf97ae4bc4ac7193a8';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return await response.json();
};

export const searchMovies = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return await response.json();
};

export const fetchMovieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return await response.json();
};

export const fetchMovieCredits = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return await response.json();
};

export const fetchMovieReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return await response.json();
};
