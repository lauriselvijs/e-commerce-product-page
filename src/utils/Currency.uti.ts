export const currencyFormat = (
  currency: string,
  amount: number,
  format = "en-US"
): string => {
  return new Intl.NumberFormat(format, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  }).format(amount);
};
