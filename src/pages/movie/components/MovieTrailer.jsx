import { useLoaderData } from "react-router-dom";
import { useTrailer } from "../hooks";
import YouTube from "react-youtube";

export const MovieTrailer = () => {
  const movie = useLoaderData();

  const { videos } = movie;

  return (
    <YouTube
      className="h-full"
      iframeClassName="mx-auto h-full w-full"
      videoId={useTrailer(videos.results)}
    />
  );
};
