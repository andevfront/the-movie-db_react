export const useScaleRounded = (num) => {
  const result = num / 2;
  const resultRounded = Math.round(result * 10) / 10;

  return resultRounded;
};
