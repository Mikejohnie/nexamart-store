"use client";

import Link from "next/link";

const BUDGETS = [
  { label: "₦5k – ₦10k", min: 5000, max: 10000 },
  { label: "₦10k – ₦25k", min: 10000, max: 25000 },
  { label: "₦25k – ₦50k", min: 25000, max: 50000 },
  { label: "₦50k – ₦100k", min: 50000, max: 100000 },
  { label: "₦100k+", min: 100000 },
];

export default function ShopByBudget() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Shop by Budget</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {BUDGETS.map((b) => (
          <Link
            key={b.label}
            href={{
              pathname: "/products",
              query: {
                minPrice: b.min,
                ...(b.max ? { maxPrice: b.max } : {}),
              },
            }}
            className="
              flex items-center justify-center
              rounded-xl border bg-card
              py-4 text-sm font-medium
              hover:bg-muted transition-colors
            "
          >
            {b.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
