import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { Pagination } from "../../../components";
import { getPageMovies } from "../../../services";

export const MovieCollection = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = getPageMovies(page);

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
