import { createBrowserRouter } from "react-router-dom";
import { HomePage, MoviePage } from "../pages";
import { getMovie, getMovies } from "../services";
import { App } from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: getMovies,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
        loader: getMovie,
      },
    ],
  },
]);
