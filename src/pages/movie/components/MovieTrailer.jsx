import { useFetch } from "../../../hooks";
import { useTrailer } from "../hooks";
import YouTube from "react-youtube";

export const MovieTrailer = ({ id, play = false }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { results } = data;

  return (
    <YouTube
      className="h-full"
      iframeClassName="mx-auto h-full w-full"
      videoId={useTrailer(results)}
    />
  );
};
