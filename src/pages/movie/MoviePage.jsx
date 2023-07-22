import {
  MovieDetails,
  MovieOverview,
  MovieGallery,
  RecommendedMovies,
} from "./components";
import { useLoaderData, useParams } from "react-router-dom";

export const MoviePage = () => {
  const movie = useLoaderData();

  const { title, backdrop_path } = movie;

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
        <MovieOverview />
        <div className="my-10 grid grid-cols-3 gap-10 lg:grid-cols-12">
          <MovieDetails />
          <MovieGallery />
        </div>
        {/* <RecommendedMovies /> */}
      </div>
    </div>
  );
};
