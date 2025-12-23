import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  title: string;
  showExplore?: boolean;
};

export default function ProductRowSkeleton({
  title,
  showExplore = true,
}: Props) {
  return (
    <section className="space-y-4">
      {/* Header skeleton */}
      <div className="flex items-center justify-between px-1">
        <Skeleton className="h-5 w-40" />
        {showExplore && <Skeleton className="h-4 w-16" />}
      </div>

      {/* Cards row (static, no swiper) */}
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]
                       rounded-xl border bg-background p-3 space-y-3"
          >
            {/* Image */}
            <Skeleton className="aspect-[4/5] w-full rounded-lg" />

            {/* Title */}
            <Skeleton className="h-4 w-3/4" />

            {/* Price */}
            <Skeleton className="h-4 w-1/2" />

            {/* Button */}
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
}
