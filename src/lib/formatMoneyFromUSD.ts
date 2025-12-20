import { CURRENCY_LOCALE } from "./currencyLocale";
import { CURRENCY_PRECISION } from "./currencyPrecision";

const symbols: Record<string, string> = {
  USD: "$",
  NGN: "₦",
  GBP: "£",
  EUR: "€",
  KES: "KSh",
  ZAR: "R",
  CAD: "$",
};

export function formatMoneyFromUSD(amountUSD: number, currency: string) {
  const locale = CURRENCY_LOCALE[currency] ?? "en-US";
  const decimals = CURRENCY_PRECISION[currency] ?? 2;

  return `${symbols[currency] ?? ""}${amountUSD.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}
