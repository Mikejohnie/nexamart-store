"use client";

import Image from "next/image";
import Link from "next/link";
import { SearchProductCard } from "@/lib/types";

type Props = {
  product: SearchProductCard;
};

export default function SearchResultCard({ product }: Props) {
  const image = product.images[0]?.imageUrl ?? "/placeholder.png";

  return (
    <Link
      href={`/product/${product.id}`}
      className="group border rounded-xl p-3 bg-white hover:shadow-md transition"
    >
      {/* IMAGE */}
      <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-contain group-hover:scale-105 transition"
        />
      </div>

      {/* INFO */}
      <div className="mt-3 space-y-1">
        <p className="text-sm font-medium line-clamp-2">{product.name}</p>

        <p className="text-xs text-gray-500">{product.store.name}</p>

        <p className="text-sm font-semibold text-[var(--brand-blue)]">
          ₦{product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
