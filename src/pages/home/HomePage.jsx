import { AsideMovies, CarouselMovies, MovieCollection } from "./components";

export const HomePage = () => {
  return (
    <>
      <CarouselMovies />
      <div className="container mx-auto my-5 px-4 xl:px-8">
        <h1 className="mb-10 text-2xl font-bold">Películas Populares</h1>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-8">
            <MovieCollection />
          </div>
          <div className="col-span-2 lg:col-span-4">
            <AsideMovies />
          </div>
        </div>
      </div>
    </>
  );
};
