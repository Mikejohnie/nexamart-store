const symbols: Record<string, string> = {
  USD: "$",
  NGN: "₦",
  GBP: "£",
  EUR: "€",
  KES: "KSh",
  ZAR: "R",
  CAD: "$",
};

export function formatPrice(
  amountUSD: number,
  currency: string,
  rates?: Record<string, number>
) {
  const rate = rates?.[currency] ?? 1;
  const converted = amountUSD * rate;

  return `${symbols[currency] ?? ""}${converted.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })}`;
}
