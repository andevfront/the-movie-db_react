export const useTrailer = (videos) => {
  const officialTrailer = videos.find((video) =>
    video.name.toLowerCase().includes("official trailer")
  );
  const officialTrailerKey = officialTrailer?.key;

  return officialTrailerKey;
};
