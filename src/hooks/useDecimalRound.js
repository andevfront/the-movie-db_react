export const useDecimalRound = (num) => {
  const decimalRound = Math.round(num * 10) / 10;

  return decimalRound;
};
