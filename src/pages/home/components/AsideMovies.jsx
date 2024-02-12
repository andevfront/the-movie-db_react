import { useLoaderData } from "react-router-dom";
import { AsideMovieCard } from "./AsideMovieCard";
import { BiSolidMoviePlay } from "react-icons/bi";

export const AsideMovies = () => {
  const { upcomingMovies } = useLoaderData();

  const { results } = upcomingMovies;
  return (
    <>
      <h1 className="mb-5 flex items-center justify-center gap-2 rounded-md bg-slate-800 p-4">
        <BiSolidMoviePlay className="h-5 w-5" />
        Top Estrenos
      </h1>

      {results.slice(0, 5).map((item) => (
        <AsideMovieCard key={item.id} id={item.id} />
      ))}
    </>
  );
};
