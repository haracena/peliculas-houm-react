const apiKey = '6dfb65ad9d90a58aadcd8ccd0824ef82';
const languageConfig = 'es-ES';
const configQueryParams = `&api_key=${apiKey}&language=${languageConfig}`;
const baseUrl = 'https://api.themoviedb.org/3/';
const discoverBaseUrl = `${baseUrl}discover/movie?${configQueryParams}`;
const movieBaseUrl = `${baseUrl}movie/`;
const searchUrl = `${baseUrl}search/movie`;

// path específico de la api para obtener las imagenes
export const smallBackdropImageUrl = 'https://image.tmdb.org/t/p/w500';
export const originalBackdropImageUrl = 'https://image.tmdb.org/t/p/original';

export const getMoviesByGenre = async (genreId, currentPage) => {
  const response = await fetch(
    `${discoverBaseUrl}&with_genres=${genreId}&sort_by=popularity.desc&page=${currentPage}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `${movieBaseUrl}${movieId}?${configQueryParams}`
  );
  const data = await response.json();
  return data;
};

export const getSimilarMovies = async (movieId) => {
  const response = await fetch(
    `${movieBaseUrl}${movieId}/similar?${configQueryParams}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovie = async (movieName) => {
  const response = await fetch(
    `${searchUrl}?query=${movieName}${configQueryParams}`
  );
  const data = await response.json();
  return data.results;
};
