"use client";

import { SearchProduct } from "@/lib/types";
import SearchResultCard from "./SearchResultCard";

type Props = {
  products: SearchProduct[];
};

export default function SearchResultsGrid({ products }: Props) {
  if (products.length === 0) {
    return <p className="text-gray-500 text-center py-10">No products found</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <SearchResultCard key={product.id} product={product} />
      ))}
    </div>
  );
}
