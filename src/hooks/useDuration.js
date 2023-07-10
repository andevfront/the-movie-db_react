export const useDuration = (num) => {
  const duracionHoras = Math.floor(num / 60);
  const duracionMinutos = num % 60;

  const duracionLegible =
    duracionHoras + " horas " + duracionMinutos + " minutos";

  return duracionLegible;
};
