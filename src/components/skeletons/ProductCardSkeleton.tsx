"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div
      className="
        border rounded-xl bg-white shadow-sm overflow-hidden
        flex flex-col
        min-h-[320px]
        sm:min-h-[360px]
        animate-pulse
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <Skeleton
          className="
            w-full
            h-44
            sm:h-52
            md:h-60
          "
        />

        {/* Wishlist button */}
        <Skeleton className="h-6 w-6 rounded-full absolute top-3 right-3" />

        {/* Discount badge placeholder */}
        <Skeleton className="h-5 w-10 rounded-md absolute top-3 left-3" />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3 flex-1">
        {/* Product title */}
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />

        {/* Price row */}
        <div className="flex items-center gap-2 pt-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  );
}
