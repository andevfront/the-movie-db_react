import { useFetch } from "../../../hooks";
import { HiOutlineClock } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import moment from "moment";
import { Link } from "react-router-dom";

export const SlideMovie = ({ id }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const {
    title,
    original_title,
    backdrop_path,
    poster_path,
    release_date,
    runtime,
    overview,
    genres,
  } = data;

  return (
    <div
      className="relative h-full w-full after:absolute after:inset-0 after:h-full after:w-full after:bg-[linear-gradient(to_bottom,_rgba(8,_15,_40,_0)_0%,_rgba(15,_23,_42,_1)_100%)]
    after:content-['']"
    >
      <figure className="absolute h-full w-full after:absolute after:inset-0 after:h-full after:w-full after:bg-black/50">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt={title}
        />
      </figure>
      <div className="container relative z-[5] mx-auto flex h-full items-center px-4 xl:px-8">
        <div className="grid gap-20 sm:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-full text-slate-400 sm:col-span-6">
            <h1 className="text-5xl font-bold uppercase text-white">{title}</h1>
            <span className="text-xl italic">{original_title}</span>
            <div className="my-4 flex items-center gap-4">
              <span className="flex items-center gap-1 text-xs">
                <HiCalendarDays className="h-6 w-6 text-white" />
                {moment(release_date).format("MMMM D, YYYY")}
              </span>
              <span className="flex items-center gap-1 text-xs">
                <HiOutlineClock className="h-6 w-6 text-white" />
                {runtime}min
              </span>
            </div>
            <p className="my-5 line-clamp-4">{overview}</p>
            <p className="my-4 text-white">
              Género: <span className="text-slate-400">{genres[0].name}</span>
            </p>
            <Link
              className="mr-5 inline-flex rounded-lg bg-sky-500 px-4 py-3 font-medium text-white transition-all duration-500 hover:bg-sky-700"
              to={`movie/${id}`}
            >
              Ver Detalles
            </Link>
            <Link
              className="inline-flex rounded-lg bg-slate-800 px-4 py-3 font-medium text-white transition-all duration-500 hover:bg-slate-950"
              to="#"
            >
              Ver Trailer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
