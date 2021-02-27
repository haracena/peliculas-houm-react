import React from 'react';
import { Link } from 'react-router-dom';

const FloatingActionButton = () => {
  return (
    <Link to='/' className='floatingActionButton'>
      Home
    </Link>
  );
};

export default FloatingActionButton;
