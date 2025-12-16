"use client";

import { getCurrencyRates } from "@/actions/getCurrencyRates";
import { useCurrencyStore } from "@/stores/useCurrencyStore";
import { useQuery } from "@tanstack/react-query";

export function useCurrency() {
  const { currency, setRates } = useCurrencyStore();

  useQuery({
    queryKey: ["currency-rates"],
    queryFn: async () => {
      const rates = await getCurrencyRates();
      if (rates) setRates(rates);
      return rates;
    },
    refetchInterval: 1000 * 60 * 60,
  });

  return useCurrencyStore();
}
