export const useProductionCompanies = (companies) => {
  return companies.map(({ name }) => name).join(", ");
};
