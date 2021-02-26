import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/movie/${movie.id}`);
  };

  return (
    <div className='movie-card' onClick={handleClick}>
      <img
        className='movie-card__img'
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className='movie-card__average'>{movie.vote_average}</div>
      <div className='movie-card__content'>
        <h2 className='movie-card__title'>{movie.title}</h2>
        <p>Lanzamiento: {movie.release_date}</p>
        <p>cantidad de votos: {movie.vote_count}</p>
      </div>
    </div>
  );
};

export default MovieCard;
