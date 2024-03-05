import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  const handleDeleteClick = (id) => {
    props.onDeleteMovie(id);
  };

  return (
    <ul className={classes['movies-list']}>
      {props.movies && props.movies.map((movie) => (
        <div key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            onDelete={() => handleDeleteClick(movie.id)}
          />
          <button onClick={() => handleDeleteClick(movie.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default MovieList;
