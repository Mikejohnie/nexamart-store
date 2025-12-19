import { useCurrencyStore } from "@/stores/useCurrencyStore";

const symbols: Record<string, string> = {
  USD: "$",
  NGN: "₦",
  GBP: "£",
  EUR: "€",
  KES: "KSh",
  ZAR: "R",
  CAD: "$",
};

export function formatMoneyFromUSD(amountUSD: number) {
  const { currency, convertFromUSD } = useCurrencyStore.getState();

  const converted = convertFromUSD(amountUSD);

  return `${symbols[currency] ?? ""}${converted.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })}`;
}
