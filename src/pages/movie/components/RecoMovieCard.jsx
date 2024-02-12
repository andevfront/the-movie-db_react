import { Link } from "react-router-dom";
import imageNotFound from "../../../images/image_not_showing.jpg";

export const RecoMovieCard = ({ id, title, poster_path }) => {
  const img = `${
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : imageNotFound
  }`;

  return (
    <Link
      className="flex h-full flex-col transition-all duration-300 hover:scale-105"
      to={`/movie/${id}`}
    >
      <div className="h-full overflow-hidden rounded-lg bg-slate-900">
        <img
          className="h-full w-full object-cover transition-all duration-500 group-hover:opacity-50"
          src={img}
          alt={title}
        />
      </div>
    </Link>
  );
};
