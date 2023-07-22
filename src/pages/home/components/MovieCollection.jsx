import { useLoaderData } from "react-router-dom";
import { MovieCard } from "./MovieCard";

export const MovieCollection = () => {
  const { popularMovies } = useLoaderData();

  const { results } = popularMovies;

  return (
    <div className="grid grid-cols-12 gap-5">
      {results.map((item) => (
        <MovieCard key={item.id} {...item} />
      ))}
    </div>
  );
};
