const apiUrl = 'https://api.themoviedb.org/3/discover/movie/';
const apiKey = '6dfb65ad9d90a58aadcd8ccd0824ef82';
const languageConfig = 'es-ES';
const baseUrl = `${apiUrl}?api_key=${apiKey}&language=${languageConfig}&sort_by=popularity.desc`;

export const getMoviesByGenre = async (genre) => {
  const response = await fetch(`${baseUrl}&with_genres=${genre}`);
  const data = await response.json();
  return data.results;
};
