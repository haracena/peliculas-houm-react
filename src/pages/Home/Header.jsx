import React from 'react';
import SearchBar from '../../components/SearchBar';

const Header = () => {
  return (
    <div className='home-header'>
      <h1 className='home-header__title'>
        Películas <span className='home-header__title--colorful'>Houm</span>
      </h1>
      <SearchBar />
    </div>
  );
};

export default Header;
