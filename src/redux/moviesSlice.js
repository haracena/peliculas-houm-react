import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getMoviesByGenre,
  getSimilarMovies,
  searchMovie,
} from '../api/movieApi';

export const getMoviesByCategory = createAsyncThunk(
  'movies/getMoviesByCategory',
  async (_, { getState }) => {
    // obtiene la paginación actual de la lista de películas
    const currentListPage = getState().movies.currentPageList;
    const { id: currentCategory } = getState().movies.activeCategory;

    return await getMoviesByGenre(currentCategory, currentListPage);
  }
);

export const getRelatedMovies = createAsyncThunk(
  'movies/getRelatedMovies',
  async (movieId) => {
    return await getSimilarMovies(movieId);
  }
);

export const getSearchedMovie = createAsyncThunk(
  'movies/getSearchedMovieResults',
  async (movieName) => {
    return await searchMovie(movieName);
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesList: [],
    currentPageList: 1,
    relatedMovies: [],
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
      state.currentPageList = 1;
      state.moviesList = [];
    },
    removeActiveCategory: (state, action) => {
      state.activeCategory = { id: null };
      state.currentPageList = 1;
      state.moviesList = [];
    },
    removeRelatedMovies: (state, action) => {
      state.relatedMovies = [];
    },
    resetMoviesList: (state, action) => {
      state.currentPageList = 1;
      state.moviesList = [];
    },
  },
  extraReducers: {
    [getMoviesByCategory.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getMoviesByCategory.fulfilled]: (state, action) => {
      state.moviesList = [...state.moviesList, ...action.payload];
      state.currentPageList += 1;
      state.status = 'finished';
    },
    [getMoviesByCategory.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [getRelatedMovies.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getRelatedMovies.fulfilled]: (state, action) => {
      state.relatedMovies = action.payload;
      state.status = 'fulfilled';
    },
    [getRelatedMovies.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [getSearchedMovie.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getSearchedMovie.fulfilled]: (state, action) => {
      state.moviesList = action.payload;
      state.status = 'fulfilled';
    },
    [getSearchedMovie.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export const {
  changeCategory,
  removeActiveCategory,
  removeRelatedMovies,
  resetMoviesList,
} = moviesSlice.actions;
export default moviesSlice.reducer;
