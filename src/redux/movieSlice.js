import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieDetails } from '../api/movieApi';

export const getMovie = createAsyncThunk(
  'movies/getMovieDetails',
  async (movieId) => {
    return await getMovieDetails(movieId);
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieId: '',
    movieDetails: {},
    status: null,
  },
  extraReducers: {
    [getMovie.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getMovie.fulfilled]: (state, action) => {
      state.movieDetails = action.payload;
      state.status = 'fullfilled';
    },
    [getMovie.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export default movieSlice.reducer;
