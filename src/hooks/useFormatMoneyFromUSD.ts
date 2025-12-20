"use client";

import { formatMoneyFromUSD } from "@/lib/formatMoneyFromUSD";
import { useCurrencyStore } from "@/stores/useCurrencyStore";

export function useFormatMoneyFromUSD() {
  const { currency, convertFromUSD } = useCurrencyStore();

  return (amountUSD: number) => {
    const converted = convertFromUSD(amountUSD);
    return formatMoneyFromUSD(converted, currency);
  };
}
