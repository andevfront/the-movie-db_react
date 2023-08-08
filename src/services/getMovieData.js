import { useFetch } from "../hooks";

export const getMovieData = (id) => {
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

  return useFetch(url);
};
