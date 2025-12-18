export function formatUSD(amount: number) {
  return `$${amount.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })}`;
}
