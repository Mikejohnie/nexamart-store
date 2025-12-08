"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/generated/prisma/client";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all bg-white dark:bg-zinc-900">
      <div className="relative w-full h-60 group">images here</div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-base font-bold text-gray-900 dark:text-gray-100">
              discounts here
            </span>
            the amount
          </div>

          <Button size="sm" className="flex items-center gap-1">
            <ShoppingCart size={16} /> Add
          </Button>
        </div>

        <Link
          href={`/market-place/dashboard/seller/products/${product.id}`}
          className="block text-blue-600 dark:text-blue-400 text-sm mt-2 hover:underline"
        >
          View details →
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
