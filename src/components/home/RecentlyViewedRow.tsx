"use client";

import { useEffect, useState } from "react";
import { getRecentlyViewed } from "@/hooks/useRecentlyViewed";
import PublicProductCard from "../product/PublicProductCard";
import { ProductCardType } from "@/lib/types";

export default function RecentlyViewedRow() {
  const [products, setProducts] = useState<ProductCardType[]>([]);

  useEffect(() => {
    const ids = getRecentlyViewed();
    if (!ids.length) return;

    fetch(`/api/products/recent?ids=${ids.join(",")}`)
      .then((res) => res.json())
      .then((data: ProductCardType[]) => {
        const ordered = ids
          .map((id) => data.find((p) => p.id === id))
          .filter(Boolean) as ProductCardType[];

        setProducts(ordered);
      })
      .catch(() => {});
  }, []);

  if (!products.length) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Recently Viewed</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <PublicProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
