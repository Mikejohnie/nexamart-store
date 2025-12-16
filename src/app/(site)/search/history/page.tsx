import { getUserRecentSearches, getTrendingSearches } from "@/actions/search";
import Link from "next/link";

export default async function SearchHistoryPage() {
  const [recent, trending] = await Promise.all([
    getUserRecentSearches(8),
    getTrendingSearches(10),
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <h1 className="text-2xl font-semibold">Search History</h1>

      {/* RECENT SEARCHES */}
      <section>
        <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
          Recent Searches
        </h2>

        {recent.length === 0 ? (
          <p className="text-sm text-gray-500">No recent searches</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {recent.map((item) => (
              <Link
                key={item.id}
                href={`/search?q=${encodeURIComponent(item.query)}`}
                className="px-3 py-1 rounded-full bg-muted text-sm hover:bg-muted/70 transition"
              >
                {item.query}
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* TRENDING SEARCHES */}
      <section>
        <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
          Trending Searches
        </h2>

        <div className="flex flex-wrap gap-2">
          {trending.map((item) => (
            <Link
              key={item.id}
              href={`/search?q=${encodeURIComponent(item.keyword)}`}
              className="px-3 py-1 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] text-sm hover:opacity-80 transition"
            >
              {item.keyword}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
