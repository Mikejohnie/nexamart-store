"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductRowSkeleton({ title }: { title: string }) {
  return (
    <section className="mb-12 space-y-4">
      {/* Section title */}
      <Skeleton className="h-5 w-48 rounded-md" />

      {/* Product cards */}
      <div
        className="
          flex gap-4
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton
            key={i}
            className="
              shrink-0
              w-[160px]
              sm:w-[180px]
              md:w-[200px]
              lg:w-[220px]

              h-[220px]
              sm:h-[240px]
              md:h-[260px]
              lg:h-[280px]

              rounded-xl
              ring-1 ring-[var(--brand-blue)]/5
            "
          />
        ))}
      </div>
    </section>
  );
}
