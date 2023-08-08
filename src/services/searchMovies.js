import { useFetch } from "../hooks";

export const searchMovies = (q) => {
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${q}`;

  return useFetch(url);
};
