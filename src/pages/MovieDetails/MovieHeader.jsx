import React from 'react';
import { originalBackdropImageUrl } from '../../api/movieApi';

const MovieHeader = ({ movie }) => {
  return (
    <header
      className='movie-header'
      style={{
        backgroundImage: `url('${originalBackdropImageUrl}${movie.backdrop_path}')`,
      }}
    >
      <div className='movie-info'>
        <h1 className='movie-info__title'>{movie.title}</h1>
        <p className='movie-info__subtitle'>{movie.tagline}</p>
      </div>
    </header>
  );
};

export default MovieHeader;
