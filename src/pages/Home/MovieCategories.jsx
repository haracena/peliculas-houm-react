import React, { useState } from 'react';

const MovieCategories = () => {
  const [filters, setFilters] = useState([
    {
      displayName: 'más recientes',
      apiFilter: 'latest',
      active: true,
    },
    {
      displayName: 'en cartelera',
      apiFilter: 'now_playing',
      active: false,
    },
    {
      displayName: 'populares',
      apiFilter: 'popular',
      active: false,
    },
    {
      displayName: 'más votadas',
      apiFilter: 'top_rated',
      active: false,
    },
    {
      displayName: 'que se aproximan',
      apiFilter: 'upcoming',
      active: false,
    },
  ]);

  const getActiveFilter = () => {
    let activeFilter = '';
    filters.map((filter) =>
      filter.active ? (activeFilter = filter.displayName) : null
    );

    return activeFilter;
  };

  return (
    <div className='movie-categories'>
      <h2 className='movie-categories__title'>Películas {getActiveFilter()}</h2>
      {filters.map((filter) => (
        <button
          className={`filter-button ${
            filter.active && 'filter-button__active'
          }`}
          key={filter.apiFilter}
        >
          {filter.displayName}
        </button>
      ))}
    </div>
  );
};

export default MovieCategories;
