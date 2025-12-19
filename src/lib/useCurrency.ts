//my lib/useCurrency.ts
"use client";

import { useCurrencyStore } from "@/stores/useCurrencyStore";

export function useCurrency() {
  const currency = useCurrencyStore((s) => s.currency);
  const rates = useCurrencyStore((s) => s.rates);

  return { currency, rates };
}
