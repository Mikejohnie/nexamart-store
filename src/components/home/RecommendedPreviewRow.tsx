import { prisma } from "@/lib/prisma";
import { CurrentUser } from "@/lib/currentUser";
import ProductRowUI from "@/components/home/ProductRowUI";

export default async function RecommendedPreviewRow() {
  const user = await CurrentUser();

  if (!user) return null;

  const viewed = await prisma.review.findMany({
    where: { userId: user.id },
    select: {
      product: {
        select: {
          id: true,
          categoryId: true,
        },
      },
    },
    take: 20,
  });

  const viewedProductIds = viewed.map((v) => v.product.id);
  const viewedCategoryIds = Array.from(
    new Set(viewed.map((v) => v.product.categoryId))
  );

  const products =
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
          take: 12,
        })
      : [];

  if (products.length === 0) return null;

  return (
    <ProductRowUI
      title="Recommended For You"
      products={products}
      autoplay={false}
      seeAllLink="/recommended"
    />
  );
}
