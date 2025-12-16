import { SearchProduct } from "@/lib/types";

export function SearchResults({ products }: { products: SearchProduct[] }) {
  if (!products.length) {
    return (
      <div className="py-20 text-center text-muted-foreground">
        No results found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <div
          key={p.id}
          className="border rounded-lg p-3 hover:shadow transition"
        >
          <img
            src={p.images[0]?.imageUrl}
            alt={p.name}
            className="w-full h-40 object-cover rounded"
          />

          <h3 className="mt-2 font-medium truncate">{p.name}</h3>

          <p className="text-sm text-muted-foreground">{p.store.name}</p>

          <p className="font-semibold mt-1">₦{p.price}</p>
        </div>
      ))}
    </div>
  );
}
