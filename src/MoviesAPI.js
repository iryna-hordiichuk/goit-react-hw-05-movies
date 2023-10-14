import axios from 'axios';
import {castMapper} from './mappers/castMapper';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8770560c7097e815657709cb3d71f99c';
export const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
const TRENDING_PATH = '/trending/movie/day';

export const getTrendingMovies = page => {
  return axios(TRENDING_PATH, { params: { api_key: API_KEY, page } });
};

export const getMovieById = async movieId => {
  const response = await axios(`/movie/${movieId}`, {
    params: { api_key: API_KEY, language: 'en-US' },
  });

  const { data } = response;

  const {
    title,
    poster_path: posterPath,
    release_date: releaseDate,
    genres,
    overview,
    vote_average: voteAverage,
  } = data;

  return { title, posterPath, releaseDate, genres, overview, voteAverage };
};

export const getMovieByQuery = async query => {
  const response = await axios( "/search/movie", {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: query,
      include_adult: false,
    },
  });
  return response.data.results;
};

export const getCastById = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
 
    },
  });
return castMapper(data.cast);
};

export const getMovieReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
 
    },
  });
  return data.results;
};

