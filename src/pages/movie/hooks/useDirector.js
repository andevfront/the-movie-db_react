export const useDirector = (credits) => {
  const directors = credits.crew
    .filter(({ job }) => job === "Director")
    .map(({ name }) => name);

  return directors;
};
