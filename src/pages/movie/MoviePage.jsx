import {
  MovieDetails,
  MovieOverview,
  MovieGallery,
  RecommendedMovies,
} from "./components";
import { useFetch } from "../../hooks";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { title, backdrop_path } = data;

  return (
    <div
      className="relative after:absolute after:inset-0 after:h-full after:w-full after:bg-[linear-gradient(to_bottom,_rgba(8,_15,_40,_0)_0%,_rgba(15,_23,_42,_1)_100%)]
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
        <MovieOverview id={id} />
        <div className="my-10 grid grid-cols-3 gap-10 lg:grid-cols-12">
          <MovieDetails id={id} />
          <MovieGallery id={id} />
        </div>
        <RecommendedMovies id={id} title={title} />
      </div>
    </div>
  );
};
