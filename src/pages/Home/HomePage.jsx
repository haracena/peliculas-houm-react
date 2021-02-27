import React, { useEffect } from 'react';
import MoviesList from '../../components/MoviesList';
import Header from './Header';
import MovieCategories from './MovieCategories';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesByCategory, resetMoviesList } from '../../redux/moviesSlice';
import Loading from '../../components/Loading';

const HomePage = () => {
  const { moviesList: movies, activeCategory, status } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetMoviesList());
  }, [dispatch]);

  useEffect(() => {
    if (activeCategory.id) {
      dispatch(getMoviesByCategory());
    }
  }, [dispatch, activeCategory]);

  return (
    <>
      <Header />
      <section className='fit-content'>
        <MovieCategories />
        {status === 'pending' && <Loading />}
        {movies.length > 0 && <MoviesList movies={movies} />}
      </section>
    </>
  );
};

export default HomePage;
