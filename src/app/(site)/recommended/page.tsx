import { prisma } from "@/lib/prisma";
import { CurrentUser } from "@/lib/currentUser";
import PublicProductCard from "@/components/product/PublicProductCard";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Recommended For You – NexaMart",
};

export default async function RecommendedPage() {
  const user = await CurrentUser();

  // 🔒 Must be logged in
  if (!user) redirect("/auth/login");

  /**
   * 1. Get recently viewed product IDs
   * (from DB if you later persist them;
   * for now, this page assumes frontend history exists)
   */
  const viewedProducts = await prisma.product.findMany({
    where: {
      reviews: {
        some: { userId: user.id },
      },
    },
    select: { id: true, categoryId: true },
    take: 20,
  });

  const viewedProductIds = viewedProducts.map((p) => p.id);
  const viewedCategoryIds = Array.from(
    new Set(viewedProducts.map((p) => p.categoryId))
  );

  /**
   * 2. Recommended products
   */
  const recommendedProducts =
    viewedCategoryIds.length > 0
      ? await prisma.product.findMany({
          where: {
            isPublished: true,
            categoryId: { in: viewedCategoryIds },
            id: { notIn: viewedProductIds },
          },
          include: {
            images: true,
            variants: true,
            store: true,
          },
          orderBy: [{ sold: "desc" }, { createdAt: "desc" }],
          take: 40,
        })
      : [];

  /**
   * 3. Fallback (no history)
   */
  const fallbackProducts =
    recommendedProducts.length === 0
      ? await prisma.product.findMany({
          where: { isPublished: true },
          include: {
            images: true,
            variants: true,
            store: true,
          },
          orderBy: { sold: "desc" },
          take: 40,
        })
      : [];

  const products =
    recommendedProducts.length > 0 ? recommendedProducts : fallbackProducts;

  return (
    <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Recommended For You</h1>

        {recommendedProducts.length === 0 && (
          <p className="text-sm text-muted-foreground">
            We’re still learning your preferences. Showing popular products for
            now.
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <PublicProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
