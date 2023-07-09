import { Link } from "react-router-dom";
import { HiStar, HiOutlineClock } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import { useDate, useDecimalRound, useFetch } from "../../../hooks";

export const AsideMovieCard = ({ id }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { title, poster_path, vote_average, release_date, runtime, overview } =
    data;

  return (
    <div className="flex gap-2 mb-4">
      <Link
        className="h-36 w-24 min-w-max rounded overflow-hidden"
        to={`movie/${id}`}
      >
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </Link>
      <div>
        <Link to={`movie/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p className="line-clamp-4 text-xs text-slate-400 my-2">{overview}</p>
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
      </div>
    </div>
  );
};
