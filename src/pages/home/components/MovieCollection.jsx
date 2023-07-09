import { useFetch } from "../../../hooks";
import { MovieCard } from "./MovieCard";

export const MovieCollection = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { results } = data;

  return (
    <div className="grid grid-cols-12 gap-5">
      {results.map((item) => (
        <MovieCard key={item.id} {...item} />
      ))}
    </div>
  );
};
