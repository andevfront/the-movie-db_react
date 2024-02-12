import { Link } from "react-router-dom";
import { MovieCardInfo } from "./MovieCardInfo";

export const MovieCard = ({ id, poster_path, title }) => {
  return (
    <div className="group relative col-span-12 xs:col-span-4 lg:col-span-3">
      <Link className="flex h-full flex-col" to={`/movie/${id}`}>
        <div className="h-full overflow-hidden rounded-lg bg-slate-900">
          <img
            className="h-full w-full object-cover transition-all duration-500 group-hover:opacity-50"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <h2 className="line-clamp-1 text-center transition-all duration-500 group-hover:text-sky-500">
          {title}
        </h2>
      </Link>
      <MovieCardInfo id={id} />
    </div>
  );
};
