import { useFetch } from "../../../hooks";
import { BiSolidMoviePlay } from "react-icons/bi";
import { AsideMovieCard } from "./AsideMovieCard";

export const AsideMovies = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { results } = data;

  return (
    <>
      <h1 className="bg-slate-800 flex items-center justify-center gap-2 rounded-md p-4 mb-5">
        <BiSolidMoviePlay className="h-5 w-5" />
        Top Estrenos
      </h1>

      {results.slice(0, 5).map((item) => (
        <AsideMovieCard key={item.id} id={item.id} />
      ))}
    </>
  );
};
