import { createBrowserRouter } from "react-router-dom";
import { HomePage, MoviePage } from "../pages";
import { App } from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);
