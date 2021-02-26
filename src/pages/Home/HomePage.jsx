import React, { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList';
import Header from './Header';
import MovieCategories from './MovieCategories';

const apiUrl = 'https://api.themoviedb.org/3/movie/';
const apiKey = '6dfb65ad9d90a58aadcd8ccd0824ef82';
const languageConfig = 'es-ES';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=6dfb65ad9d90a58aadcd8ccd0824ef82'
    );
    const data = await response.json();
    const { results } = data;
    console.log(results);
    setMovies(results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

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
