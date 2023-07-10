import { useParams } from "react-router-dom";
import {
  useDuration,
  useFetch,
  useIntegerRounded,
  useScaleRounded,
} from "../../hooks";
import { CircularProgressbar } from "react-circular-progressbar";
import Rater from "react-rater";
import moment from "moment";
import { HiOutlineClock } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";

import "react-rater/lib/react-rater.css";
import "./css/react-rater.css";
import "react-circular-progressbar/dist/styles.css";
import "./css/react-circular-progressbar.css";

export const MoviePage = () => {
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const {
    title,
    original_title,
    backdrop_path,
    poster_path,
    vote_average,
    release_date,
    runtime,
    tagline,
    overview,
    genres,
    vote_count,
  } = data;

  return (
    <div
      className="relative h-screen w-screen after:absolute after:inset-0 after:h-full after:w-full after:bg-[linear-gradient(to_bottom,_rgba(8,_15,_40,_0)_0%,_rgba(15,_23,_42,_1)_100%)]
    after:content-['']"
    >
      <figure className="absolute h-full w-full after:absolute after:inset-0 after:h-full after:w-full after:bg-black/50">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt={title}
        />
      </figure>
      <div className="container relative z-[5] mx-auto px-4 pt-32 xl:px-8">
        <div className="flex gap-10 text-slate-400">
          <figure className="hidden min-w-[235px] md:block lg:w-[300px] lg:min-w-[300px]">
            <img
              className="w-full overflow-hidden rounded-lg object-cover"
              src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
              alt={title}
            />
          </figure>
          <div>
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p>{original_title}</p>
            <p className="my-4 text-xl font-light italic">{tagline}</p>
            <div className="my-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-0">
              <div className="flex items-center gap-2 border-slate-400 sm:mr-5 sm:border-r sm:pr-5">
                <CircularProgressbar
                  value={vote_average * 10}
                  valueStart={0}
                  valueEnd={100}
                  text={`${useIntegerRounded(vote_average)}%`}
                />
                <div className="flex flex-col">
                  <Rater
                    total={5}
                    rating={useScaleRounded(vote_average)}
                    interactive={false}
                  />
                  <small className="text-xs">
                    ({vote_count} votos, promedio:{" "}
                    {useScaleRounded(vote_average)} / 5)
                  </small>
                </div>
              </div>
              <p className="flex gap-5 sm:flex-col lg:flex-row lg:items-center">
                <span className="flex items-center gap-2">
                  <HiOutlineClock className="h-6 w-6 text-white" />
                  {useDuration(runtime)}
                </span>
                <span className="flex items-center gap-2">
                  <HiCalendarDays className="h-6 w-6 text-white" />
                  {moment(release_date).format("YYYY")}
                </span>
              </p>
            </div>
            <h2 className="mb-2 mt-10 text-2xl font-semibold text-white">
              Descripción general
            </h2>
            <p className="my-5">{overview}</p>
            <span>
              <b className="text-white">Género: </b>
              {genres.map((objeto) => objeto.name).join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
