"use client";

import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";
import AddToCartControl from "./AddtoCartButton";
import { ProductCardType } from "@/lib/types";
import { usePrice } from "@/lib/formatPrice";

export default function PublicProductCard({
  product,
  userId,
  isWishlisted,
}: {
  product: ProductCardType;
  userId?: string | null;
  isWishlisted?: boolean;
}) {
  const price = product.basePriceUSD;
  const oldPrice = product.oldPriceUSD ?? null;

  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null;

  return (
    <div className="relative border rounded-xl light:bg-white shadow-sm hover:shadow-lg transition duration-300 group overflow-hidden">
      {discount && (
        <span
          className="
                absolute top-4 left-2 bg-[var(--brand-blue)] text-white text-xs
                font-semibold px-2 py-1 rounded-md shadow-sm z-10
              "
        >
          -{discount}%
        </span>
      )}

      <div className="absolute top-2 right-2 z-20">
        <WishlistButton
          productId={product.id}
          userId={userId}
          isWishlisted={Boolean(isWishlisted)}
        />
      </div>

      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-gray-100 rounded-t-xl overflow-hidden">
          <Image
            src={product.images?.[0]?.imageUrl ?? "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="px-3 py-3 space-y-2">
        <Link href={`/product/${product.id}`}>
          <p className="text-sm font-medium text-gray-800 line-clamp-1 leading-tight hover:text-blue-600 transition">
            {product.name}
          </p>
        </Link>

        <div className="mt-2 flex items-baseline gap-2">
          <p className="font-semibold text-gray-900 text-sm">
            {usePrice(price)}
          </p>

          {discount && oldPrice && (
            <p className="line-through text-gray-400 text-xs">
              {usePrice(oldPrice)}
            </p>
          )}
        </div>

        <AddToCartControl productId={product.id} variantId={null} />
      </div>
    </div>
  );
}
