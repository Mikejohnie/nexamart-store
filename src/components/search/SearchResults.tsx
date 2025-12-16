"use client";

import { GlobalSearchResult } from "@/lib/types";
import SearchSkeleton from "../skeletons/SearchSkeleton";
import { SearchResultCard } from "./SearchResultCard";

type Props = {
  results: GlobalSearchResult | null;
  isLoading: boolean;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  onSelect: () => void;
};

export function SearchResultsDropdown({
  results,
  isLoading,
  activeIndex,
  setActiveIndex,
  onSelect,
}: Props) {
  if (isLoading) {
    return <SearchSkeleton />;
  }

  if (!results || results.products.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center py-6">No results found</p>
    );
  }

  return (
    <div className="space-y-1">
      {results.products.map((product, i) => (
        <SearchResultCard
          key={product.id}
          product={product}
          active={i === activeIndex}
          onHover={() => setActiveIndex(i)}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
