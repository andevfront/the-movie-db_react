import { useDate, useDecimalRound, useFetch } from "../../../hooks";

import { HiStar, HiOutlineClock } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";

export const MovieCardInfo = ({ id }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { title, poster_path, vote_average, release_date, runtime, overview } =
    data;

  return (
    <div className="hidden absolute invisible opacity-0 scale-0 bg-slate-900 top-[6%] left-[60%] rounded-lg overflow-hidden pointer-events-none transition-all duration-500 w-72 z-10 group-hover:visible group-hover:opacity-100 group-hover:scale-100 lg:block">
      <div className="relative">
        <img
          className="absolute inset-0 h-full w-full object-cover blur-md scale-150 opacity-50"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="relative text-slate-400 p-4">
          <h3 className="font-bold text-sm text-white">{title}</h3>
          <div className="flex items-center gap-4 my-4">
            <span className="flex items-center gap-1 text-xs">
              <HiStar className="h-4 w-4 text-yellow-400" />
              {useDecimalRound(vote_average)}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <HiCalendarDays className="h-4 w-4 text-white" />
              {useDate(release_date)}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <HiOutlineClock className="h-4 w-4 text-white" />
              {runtime}min
            </span>
          </div>
          <p className="text-xs line-clamp-[7]">{overview}</p>
        </div>
      </div>
    </div>
  );
};
