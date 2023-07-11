export const useCurrencyFormat = (currency) => {
  const formattedCurrency = currency.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const currencyRounded = formattedCurrency.replace(/\.00$/, "");

  return currencyRounded;
};
