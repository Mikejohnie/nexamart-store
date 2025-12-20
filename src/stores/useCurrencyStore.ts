"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type CurrencyStore = {
  currency: string;
  rates: Record<string, number>;
  ratesLoaded: boolean;

  setCurrency: (currency: string) => void;
  setRates: (rates: Record<string, number>) => void;

  convertToUSD: (amount: number) => number;
  convertFromUSD: (amount: number) => number;
};

export const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set, get) => ({
      currency: "USD",
      rates: { USD: 1 },
      ratesLoaded: false,

      setCurrency: (currency) => set({ currency }),

      setRates: (rates) =>
        set({
          rates: { USD: 1, ...rates },
          ratesLoaded: true,
        }),

      convertFromUSD: (amount) => {
        const { currency, rates, ratesLoaded } = get();

        if (!ratesLoaded || currency === "USD") return amount;

        const rate = rates[currency];
        if (!rate) return amount;

        return Number((amount * rate).toFixed(2));
      },

      convertToUSD: (amount) => {
        const { currency, rates, ratesLoaded } = get();

        if (!ratesLoaded || currency === "USD") return amount;

        const rate = rates[currency];
        if (!rate || rate === 0) return amount;

        return Number((amount / rate).toFixed(2));
      },
    }),
    {
      name: "currency-store",
      version: 3,
      migrate: () => ({
        currency: "USD",
        rates: { USD: 1 },
        ratesLoaded: false,
      }),
    }
  )
);
