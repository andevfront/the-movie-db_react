import { useState } from "react";
import { Modal } from "../../../components";
import { useTrailer } from "../hooks";
import {
  useDuration,
  useIntegerRounded,
  useScaleRounded,
} from "../../../hooks";

import { useLoaderData } from "react-router-dom";
import Rater from "react-rater";
import moment from "moment";
import YouTube from "react-youtube";
import { CircularProgressbar } from "react-circular-progressbar";
import { BsYoutube } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";

import imageNotFound from "../../../images/image_not_showing.jpg";

import "../../../components/Modal/Modal.css";
import "react-rater/lib/react-rater.css";
import "../css/react-rater.css";
import "react-circular-progressbar/dist/styles.css";
import "../css/react-circular-progressbar.css";

export const MovieOverview = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const movie = useLoaderData();

  const {
    description: {
      title,
      original_title,
      poster_path,
      vote_average,
      release_date,
      runtime,
      tagline,
      overview,
      genres,
      vote_count,
    },
    videos: { results },
  } = movie;

  const img = `${
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : imageNotFound
  }`;

  return (
    <>
      <div className="grid grid-cols-3 gap-10 text-slate-400 lg:grid-cols-12">
        <figure className="col-span-3 hidden lg:block">
          <img
            className="w-full overflow-hidden rounded-lg object-cover"
            src={img}
            alt={title}
          />
        </figure>
        <div className="col-span-3 lg:col-span-9">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p>{original_title}</p>
          {tagline && (
            <p className="my-4 text-xl font-light italic">{tagline}</p>
          )}
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
                  ({vote_count} votos, promedio: {useScaleRounded(vote_average)}{" "}
                  / 5)
                </small>
              </div>
            </div>
            <p className="flex gap-5 sm:flex-col lg:flex-row lg:items-center">
              {runtime > 0 && (
                <span className="flex items-center gap-2">
                  <HiOutlineClock className="h-6 w-6 text-white" />
                  {useDuration(runtime)}
                </span>
              )}
              <span className="flex items-center gap-2">
                <HiCalendarDays className="h-6 w-6 text-white" />
                {moment(release_date).format("MMMM D, YYYY")}
              </span>
            </p>
          </div>
          {results.length > 0 && (
            <button
              className="flex items-center gap-2 rounded-lg border border-sky-500 bg-slate-800/50 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-slate-800/80"
              onClick={handleModalToggle}
            >
              <BsYoutube className="text-xl text-red-500" />
              Ver Trailer
            </button>
          )}
          {overview && (
            <>
              <h2 className="mb-2 mt-5 text-2xl font-semibold text-white">
                Descripción general
              </h2>
              <p className="mb-5">{overview}</p>
            </>
          )}
          {genres.length > 0 && (
            <span>
              <b className="text-white">Género: </b>
              {genres.map((objeto) => objeto.name).join(", ")}
            </span>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
        <YouTube
          className="relative h-0 overflow-hidden pb-[56.25%]"
          iframeClassName="absolute top-0 left-0 h-full w-full"
          videoId={useTrailer(results)}
        />
      </Modal>
    </>
  );
};
