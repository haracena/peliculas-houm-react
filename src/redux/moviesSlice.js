import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviesByGenre } from '../api/movieApi';

export const getMoviesByCategory = createAsyncThunk(
  'movies/getMoviesByCategory',
  async (categoryFilter) => {
    return await getMoviesByGenre(categoryFilter);
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesList: [],
    status: null,
    activeCategory: {
      id: 28,
      name: 'Acción',
    },
    categories: [
      {
        id: 28,
        name: 'Acción',
      },
      {
        id: 16,
        name: 'Animación',
      },
      {
        id: 35,
        name: 'Comedia',
      },
      {
        id: 80,
        name: 'Crimen',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10402,
        name: 'Música',
      },
      {
        id: 9648,
        name: 'Misterio',
      },
    ],
  },
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = state.categories.find(
        (category) => category.id === action.payload
      );
    },
  },
  extraReducers: {
    [getMoviesByCategory.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getMoviesByCategory.fulfilled]: (state, action) => {
      state.moviesList = action.payload;
      state.status = 'finished';
    },
    [getMoviesByCategory.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export const { changeCategory } = moviesSlice.actions;
export default moviesSlice.reducer;
