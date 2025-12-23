import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPageSkeleton() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
      {/* Page title */}
      <Skeleton className="h-6 w-48" />

      {/* Products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border bg-background overflow-hidden p-3 space-y-3"
          >
            {/* Image */}
            <Skeleton className="aspect-[4/5] w-full rounded-lg" />

            {/* Name */}
            <Skeleton className="h-4 w-3/4" />

            {/* Price */}
            <Skeleton className="h-4 w-1/2" />

            {/* CTA */}
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        ))}
      </div>
    </main>
  );
}
