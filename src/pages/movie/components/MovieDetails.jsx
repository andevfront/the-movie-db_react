import { useCast, useDirector, useProductionCompanies } from "../hooks";
import { useCurrencyFormat } from "../../../hooks";
import { useLoaderData } from "react-router-dom";
import ISO6391 from "iso-639-1";

export const MovieDetails = () => {
  const movie = useLoaderData();

  const {
    description: {
      original_title,
      status,
      original_language,
      budget,
      revenue,
      production_companies,
    },
    credits: { crew, cast },
  } = movie;

  return (
    <div className="col-span-3">
      <ul className="text-slate-400">
        <li className="my-2">
          <b className="block text-white">Título original</b>
          {original_title}
        </li>
        {crew.length > 0 && (
          <li className="my-2">
            <b className="block text-white">Director</b>
            {useDirector(crew)}
          </li>
        )}
        {cast.length > 0 && (
          <li className="my-2">
            <b className=" block text-white">Elenco</b>
            <span className="line-clamp-3">{useCast(cast)}</span>
          </li>
        )}
        {production_companies.length > 0 && (
          <li className="my-2">
            <b className=" block text-white">Productoras</b>
            <span className="line-clamp-3">
              {useProductionCompanies(production_companies)}
            </span>
          </li>
        )}
        {budget > 0 && (
          <li className="my-2">
            <b className="block text-white">Presupuesto</b>
            {useCurrencyFormat(budget)}
          </li>
        )}
        {revenue > 0 && (
          <li className="my-2">
            <b className="block text-white">Ganancia</b>
            {useCurrencyFormat(revenue)}
          </li>
        )}
        <li className="my-2">
          <b className="block text-white">Estado</b>
          {status}
        </li>
        {ISO6391.getName(original_language).length > 0 && (
          <li className="my-2">
            <b className="block text-white">Idioma original</b>
            {ISO6391.getName(original_language)}
          </li>
        )}
      </ul>
    </div>
  );
};
