import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchedMovie, removeActiveCategory } from '../redux/moviesSlice';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      dispatch(getSearchedMovie(searchValue));
      dispatch(removeActiveCategory());
      setSearchValue('');
    }
  };

  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input
        className='search-bar__input'
        type='text'
        placeholder='Buscar película'
        value={searchValue}
        onChange={handleChange}
      />
      <button className='search-bar__button'>Buscar</button>
    </form>
  );
};

export default SearchBar;
