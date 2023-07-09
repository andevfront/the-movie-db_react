import { Link } from "react-router-dom";
import { MovieCardInfo } from "./MovieCardInfo";

export const MovieCard = ({ id, poster_path, title }) => {
  return (
    <div className="col-span-12 xs:col-span-4 lg:col-span-2 relative group">
      <Link className="flex flex-col h-full" to={`movie/${id}`}>
        <div className="bg-slate-900 h-full rounded-lg overflow-hidden">
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
