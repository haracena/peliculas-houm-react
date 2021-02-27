import React from 'react';
import { originalBackdropImageUrl } from '../../api/movieApi';
import ImageNotFound from '../../assets/images/image-not-found.jpg';

const MovieHeader = ({ movie }) => {
  return (
    <header
      className='movie-header'
      style={{
        backgroundImage: `${
          movie.backdrop_path
            ? `url('${originalBackdropImageUrl}${movie.backdrop_path}')`
            : `url(${ImageNotFound})`
        }`,
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
