import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPageSkeleton() {
  return (
    <div
      className="
        bg-background
        min-h-[180vh]
        sm:min-h-[160vh]
        lg:min-h-[130vh]
      "
    >
      {/* ───────────── TOP NAVBAR ───────────── */}
      <header className="sticky top-0 z-50 border-b bg-background backdrop-blur">
        <div className="flex items-center justify-between h-16 px-4 md:px-8">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-md" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>

          {/* CENTER (search) */}
          <div className="hidden md:block flex-1 max-w-2xl mx-6">
            <Skeleton className="h-10 w-full rounded-full" />
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-9 w-9 rounded-full" />
          </div>

          {/* MOBILE */}
          <div className="flex md:hidden">
            <Skeleton className="h-9 w-9 rounded-full" />
          </div>
        </div>

        {/* BREADCRUMB */}
        <div className="border-t px-4 md:px-8 py-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-3" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </header>

      {/* ───────────── BODY ───────────── */}
      <div className="flex">
        {/* SIDEBAR (desktop) */}
        <aside className="hidden md:flex w-64 border-r p-4">
          <div className="flex flex-col gap-3 w-full">
            <Skeleton className="h-6 w-32 mb-4" />

            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-5 w-5 rounded-md" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          {/* Page title */}
          <Skeleton className="h-6 w-48" />

          {/* Stat cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-xl" />
            ))}
          </div>

          {/* Table / content */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </main>
      </div>
    </div>
  );
}
