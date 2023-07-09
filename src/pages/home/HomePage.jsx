import { AsideMovies, MovieCollection } from "./components";

export const HomePage = () => {
  return (
    <div className="container mx-auto my-5 px-4 xl:px-8">
      <h1 className="font-bold text-2xl mb-5">Películas Populares</h1>
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="col-span-2 lg:col-span-9">
          <MovieCollection />
        </div>
        <div className="col-span-2 lg:col-span-3">
          <AsideMovies />
        </div>
      </div>
    </div>
  );
};
