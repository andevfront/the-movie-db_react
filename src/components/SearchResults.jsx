import { Link } from "react-router-dom";
import { useFetch } from "../hooks";
import imageNotFound from "../images/image_not_showing.jpg";

export const SearchResults = ({ words, handleMovieClick }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${words}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { results } = data;

  return (
    <div className="search-result-popup max-h-64 min-w-[290px] overflow-y-auto p-2 scrollbar scrollbar-track-slate-700 scrollbar-thumb-slate-800 hover:scrollbar-thumb-slate-600">
      {results.length > 0 ? (
        results.map((item) => (
          <Link
            className="flex gap-2 p-2 transition-all duration-300 hover:bg-slate-700/50"
            key={item.id}
            to={`movie/${item.id}`}
            onClick={handleMovieClick}
          >
            <div>
              <img
                className="h-16 w-16 max-w-[unset] object-cover"
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : imageNotFound
                }
                alt={item.title}
              />
            </div>
            <span className="text-slate-400 dark:text-white">{item.title}</span>
          </Link>
        ))
      ) : (
        <p className="p-3 text-sm text-slate-400">
          No se encontraron resultados.
        </p>
      )}
    </div>
  );
};
