import { useFetch } from "../hooks";

export const getPageMovies = (page = 1) => {
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`;

  return useFetch(url);
};
