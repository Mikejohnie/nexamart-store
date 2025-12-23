"use client";

import { useEffect, useState } from "react";
import { getRecentlyViewed } from "@/hooks/useRecentlyViewed";
import PublicProductCard from "../product/PublicProductCard";
import { ProductCardType } from "@/lib/types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function RecentlyViewedRow() {
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    setIsMobile(media.matches);

    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const load = () => {
      const ids = getRecentlyViewed();
      if (!ids.length) {
        setProducts([]);
        return;
      }

      fetch(`/api/products/recent?ids=${ids.join(",")}`)
        .then((res) => res.json())
        .then((data: ProductCardType[]) => {
          const viewedProducts = ids
            .map((id) => data.find((p) => p.id === id))
            .filter(Boolean) as ProductCardType[];

          setProducts(isMobile ? viewedProducts.slice(0, 4) : viewedProducts);
        })
        .catch(() => {});
    };

    load();

    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, [isMobile]);

  if (!products.length) return null;

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recently Viewed</h2>

        <Link
          href="/history"
          className="text-sm font-medium text-[var(--brand-blue)] hover:underline"
        >
          <ChevronRight />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <PublicProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
