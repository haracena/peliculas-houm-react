import React from 'react';
import { Link } from 'react-router-dom';

const MovieNotFound = () => {
  return (
    <div className='movie-notfound'>
      No se han encontrado resultados. <Link to='/'>Volver al home</Link>
    </div>
  );
};

export default MovieNotFound;
