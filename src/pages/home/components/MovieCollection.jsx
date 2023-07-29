import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { useFetch } from "../../../hooks";
import { Pagination } from "../../../components";

export const MovieCollection = () => {
  const [page, setPage] = useState(1);

  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`;

  const { data, isLoading } = useFetch(url);

  if (isLoading) return;

  const { results, total_pages } = data;

  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        {results.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination setPage={setPage} totalPages={total_pages} />
    </>
  );
};
