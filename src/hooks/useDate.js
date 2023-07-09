export const useDate = (date) => {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();

  return year;
};
