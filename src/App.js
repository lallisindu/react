import React, { useState, useEffect, useCallback, useMemo } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError('Something went wrong...Retrying');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const cancelRetryHandler = useCallback(() => {
    setIsLoading(false);
    setError(null);
  }, []);

  const moviesList = useMemo(() => <MoviesList movies={movies} />, [movies]);

  return (
    <React.Fragment>
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <div>
            <p>{error}</p>
            <button onClick={cancelRetryHandler}>Cancel Retry</button>
          </div>
        ) : (
          moviesList
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
