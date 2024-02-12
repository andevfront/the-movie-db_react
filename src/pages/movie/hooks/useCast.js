export const useCast = (cast) => {
  return cast.map(({ original_name }) => original_name).join(", ");
};
