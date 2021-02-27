import React from 'react';
import {
  originalBackdropImageUrl,
  smallBackdropImageUrl,
} from '../../api/movieApi';
import CompanyLogo from './CompanyLogo';
const MovieInfo = ({ movie }) => {
  return (
    <main className='movie-content'>
      <img
        src={`${smallBackdropImageUrl}${movie.poster_path}`}
        alt={movie.original_title}
        className='movie-poster'
      />
      <article>
        <h2>
          {movie.title}
          <span className='movie-rank'>{movie.vote_average}</span>
        </h2>
        <p>
          Fecha de lanzamiento{' '}
          <span className='movie-rank'>{movie.release_date}</span>
        </p>
        {movie.genres &&
          movie.genres.map((genre) => (
            <div key={genre.id} className='movie-badge'>
              {genre.name}
            </div>
          ))}
        <p className='movie-overview'>{movie.overview}</p>

        {movie.production_companies && movie.production_companies.length > 0 && (
          <div>
            <h3>Película creada por</h3>
            <div>
              {movie.production_companies.map((company) =>
                company.logo_path ? (
                  <CompanyLogo
                    logoUrl={company.logo_path}
                    companyName={company.name}
                    key={company.id}
                  />
                ) : null
              )}
            </div>
          </div>
        )}
      </article>
    </main>
  );
};

export default MovieInfo;
