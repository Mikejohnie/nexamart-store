import { Skeleton } from "@/components/ui/skeleton";

export default function SearchSkeleton() {
  return (
    <div className="space-y-2 px-1">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex gap-3 p-3 sm:p-2 rounded-lg items-center bg-muted/20"
        >
          {/* Image */}
          <Skeleton className="w-10 h-10 rounded-md" />

          {/* Text */}
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-full sm:w-3/4 rounded" />
            <Skeleton className="h-2 w-2/3 sm:w-1/2 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
