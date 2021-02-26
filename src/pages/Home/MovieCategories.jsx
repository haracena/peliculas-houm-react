import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../redux/moviesSlice';

const MovieCategories = () => {
  const { categories, activeCategory } = useSelector((state) => state.movies);
  const [currentCategory, setCurrentCategory] = useState(activeCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentCategory(activeCategory);
  }, [activeCategory]);

  const changeActiveCategory = (categoryFilter) => {
    console.log(categoryFilter);
    dispatch(changeCategory(categoryFilter));
  };

  return (
    <div className='movie-categories'>
      <h2 className='movie-categories__title'>
        Películas {currentCategory.name}
      </h2>
      {categories.map((category) => (
        <button
          className={`category-button ${
            category.id === currentCategory.id && 'category-button__active'
          }`}
          key={category.id}
          onClick={() => {
            changeActiveCategory(category.id);
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default MovieCategories;
