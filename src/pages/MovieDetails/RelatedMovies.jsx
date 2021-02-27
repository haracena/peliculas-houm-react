import React, { useEffect } from 'react';
import MoviesList from '../../components/MoviesList';
import { useSelector, useDispatch } from 'react-redux';
import { getRelatedMovies } from '../../redux/moviesSlice';

const RelatedMovies = ({ movieId }) => {
  const dispatch = useDispatch();
  const { relatedMovies: movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getRelatedMovies(movieId));
  }, [dispatch, movieId]);

  return (
    <div>
      <h3 className='movie-related-title'>Películas Similares</h3>
      <MoviesList movies={movies} hasButton={false} />
    </div>
  );
};

export default RelatedMovies;
