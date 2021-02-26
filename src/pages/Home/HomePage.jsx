import React, { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList';
import Header from './Header';
import MovieCategories from './MovieCategories';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesByCategory } from '../../redux/moviesSlice';

const HomePage = () => {
  const { moviesList: movies, activeCategory } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesByCategory(activeCategory.id));
  }, [dispatch, activeCategory]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <>
      <Header />
      <section className='home-content'>
        <MovieCategories />
        {movies && <MoviesList movies={movies} />}
      </section>
    </>
  );
};

export default HomePage;
