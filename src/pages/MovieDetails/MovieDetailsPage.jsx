import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { getMovie } from '../../redux/movieSlice';
import MovieHeader from './MovieHeader';
import MovieInfo from './MovieInfo';
import RelatedMovies from './RelatedMovies';
import MovieNotFound from './MovieNotFound';
import { removeRelatedMovies } from '../../redux/moviesSlice';
import FloatingActionButton from '../../components/FloatingActionButton';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, status } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(removeRelatedMovies());
    };
  }, [dispatch]);

  if (status === 'pending') {
    return <Loading />;
  }

  if (movieDetails.success === false) {
    return <MovieNotFound />;
  } else {
    return (
      <div className='fit-content'>
        <MovieHeader movie={movieDetails} />
        <MovieInfo movie={movieDetails} />
        <RelatedMovies movieId={id} />
        <FloatingActionButton />
      </div>
    );
  }
};

export default MovieDetailsPage;
