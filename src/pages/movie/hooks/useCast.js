export const useCast = (credits) => {
  return credits.cast.map(({ original_name }) => original_name).join(", ");
};
