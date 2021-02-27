import React from 'react';
import { useHistory } from 'react-router-dom';
import { smallBackdropImageUrl } from '../api/movieApi';
import ImageNotFound from '../assets/images/image-not-found.jpg';

const MovieCard = ({ movie }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/movie/${movie.id}`);
  };

  return (
    <div className='movie-card' onClick={handleClick}>
      {movie.backdrop_path ? (
        <img
          className='movie-card__img'
          src={`${smallBackdropImageUrl}${movie.backdrop_path}`}
          alt={movie.title}
        />
      ) : (
        <img src={ImageNotFound} alt='nose' className='movie-card__img' />
      )}
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
