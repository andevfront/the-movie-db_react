import { useTrailer } from "../hooks";
import { useFetch } from "../../../hooks";
import YouTube from "react-youtube";
import moment from "moment";
import ISO6391 from "iso-639-1";

export const MovieTrailer = ({ id }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const {
    original_title,
    title,
    status,
    release_date,
    runtime,
    genres,
    videos,
    original_language,
    production_countries,
    production_companies,
  } = data;

  console.log(data);

  return (
    <div className="my-10 grid grid-cols-3 gap-10 lg:grid-cols-12">
      <div className="col-span-3 hidden lg:block">
        <ul className="text-slate-400">
          <li className="my-2">
            <b className="text-white">Título: </b>
            {title}
          </li>
          <li className="my-2">
            <b className="text-white">Título original: </b>
            {original_title}
          </li>
          <li className="my-2">
            <b className="text-white">Estado: </b>
            {status}
          </li>
          <li className="my-2">
            <b className="text-white">Fecha de estreno: </b>
            {moment(release_date).format("MMMM D, YYYY")}
          </li>
          <li className="my-2">
            <b className="text-white">Duración: </b>
            {runtime}min
          </li>
          <li className="my-2">
            <b className="text-white">Géneros: </b>
            {genres.map((objeto) => objeto.name).join(", ")}
          </li>
          <li className="my-2">
            <b className="text-white">Lenguaje original: </b>
            {ISO6391.getName(original_language)}
          </li>
          <li className="my-2">
            <b className="text-white">Compañías de producción: </b>
            {production_companies.map((objeto) => objeto.name).join(", ")}
          </li>
          <li className="my-2">
            <b className="text-white">País de producción: </b>
            {production_countries.map((objeto) => objeto.name).join(", ")}
          </li>
          <li className="my-2">
            <b className="text-white">Elenco: </b>
          </li>
          <li className="my-2">
            <b className="text-white">Director: </b>
          </li>
        </ul>
      </div>
      <div className="col-span-3 lg:col-span-9">
        <YouTube videoId={useTrailer(videos.results)} />
      </div>
    </div>
  );
};
