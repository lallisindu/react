import React, { useState, useEffect, useCallback, useMemo } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    openingText: '',
    releaseDate: '',
  });

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

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleAddMovie = useCallback(() => {
    console.log(formData);
  }, [formData]);

  const moviesList = useMemo(() => <MoviesList movies={movies} />, [movies]);

  return (
    <React.Fragment>
      <section className="add-movie">
        <form>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="openingText">Opening Text</label>
            <textarea
              id="openingText"
              name="openingText"
              value={formData.openingText}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="releaseDate">Release Date</label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleAddMovie}>
            Add Movie
          </button>
        </form>
      </section>
      <section>
        <button onClick={fetchMoviesHandler} disabled={isLoading}>
          {isLoading ? 'Fetching...' : 'Fetch Movies'}
        </button>
        {isLoading && <p>Loading...</p>}
        {error && (
          <div>
            <p>{error}</p>
            <button onClick={cancelRetryHandler}>Cancel Retry</button>
          </div>
        )}
      </section>
      <section>
        {moviesList}
      </section>
    </React.Fragment>
  );
}

export default App;
