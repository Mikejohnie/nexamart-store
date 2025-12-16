import Link from "next/link";

export function SearchChip({ label }: { label: string }) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(label)}`}
      className="px-3 py-1 rounded-full text-sm bg-muted hover:bg-muted/70 transition"
    >
      {label}
    </Link>
  );
}
