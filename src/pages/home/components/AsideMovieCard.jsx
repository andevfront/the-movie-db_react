import { Link } from "react-router-dom";
import { useDecimalRounded } from "../../../hooks";
import { getMovieData } from "../../../services";
import { HiStar, HiOutlineClock } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import moment from "moment";

export const AsideMovieCard = ({ id }) => {
  const { data, isLoading } = getMovieData(id);

  if (isLoading) return;

  const { title, poster_path, vote_average, release_date, runtime, overview } =
    data;

  return (
    <div className="mb-4 flex gap-2">
      <Link
        className="h-36 w-24 min-w-max overflow-hidden rounded"
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
        <p className="my-2 line-clamp-4 text-xs text-slate-400">{overview}</p>
        <div className="my-4 flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs">
            <HiStar className="h-4 w-4 text-yellow-400" />
            {useDecimalRounded(vote_average)}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <HiCalendarDays className="h-4 w-4 text-white" />
            {moment(release_date).format("YYYY")}
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
