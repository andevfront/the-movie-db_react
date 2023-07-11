import { useTrailer } from "../hooks";
import { useFetch } from "../../../hooks";
import YouTube from "react-youtube";

export const MovieTrailer = ({ id }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const { data, isLoading } = useFetch(API_URL);

  if (isLoading) return;

  const { results } = data;

  return (
    <div className="col-span-3 lg:col-span-9">
      <YouTube
        iframeClassName="mx-auto h-[550px] w-full"
        videoId={useTrailer(results)}
      />
    </div>
  );
};
