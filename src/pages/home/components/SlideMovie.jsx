import { getMovieData } from "../../../services";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import moment from "moment";

export const SlideMovie = ({ id }) => {
  const { data, isLoading } = getMovieData(id);

  if (isLoading) return;

  const {
    title,
    original_title,
    backdrop_path,
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
            <span className="my-4 block">
              <b className="text-white">Género:</b> {genres[0].name}
            </span>
            <Link
              className="inline-flex items-center gap-2 rounded-lg border border-sky-500 bg-slate-800/50 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-slate-800/80"
              to={`movie/${id}`}
            >
              Ver Detalles <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
