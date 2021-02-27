import React from 'react';
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesByCategory } from '../redux/moviesSlice';

const MoviesList = ({ movies, hasButton = true }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.movies);

  return (
    <>
      <div className='movies-list'>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <EmptyList />
        )}
      </div>
      {hasButton && (
        <div className='movies-list__search'>
          <button
            className='movies-list__search-button'
            onClick={() => {
              dispatch(getMoviesByCategory());
            }}
          >
            {status === 'pending' ? 'Cargando' : 'Buscar más películas'}
          </button>
        </div>
      )}
    </>
  );
};

const EmptyList = () => {
  return (
    <div className='movies-list--empty'>
      <p>No se han encontrado resultados.</p>
    </div>
  );
};

export default MoviesList;
