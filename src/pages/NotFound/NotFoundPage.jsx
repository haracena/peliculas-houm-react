import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='page-notfound'>
      Página no encontrada.
      <Link className='page-notfound__link' to='/'>
        Volver al Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
