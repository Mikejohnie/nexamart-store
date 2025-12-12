"use server";

import { CurrentUserId } from "@/lib/currentUser";
import { prisma } from "@/lib/prisma";
import { FullProduct } from "@/lib/types";
import { revalidatePath } from "next/cache";

export const toggleWishlistAction = async (productId: string) => {
  const userId = await CurrentUserId();
  if (!userId) return { error: "Login required" };

  try {
    const wishlist = await prisma.wishlist.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });

    const found = await prisma.wishlistItem.findFirst({
      where: { wishlistId: wishlist.id, productId },
    });

    if (found) {
      await prisma.wishlistItem.delete({
        where: { id: found.id },
      });

      revalidatePath("/");
      return { wishlisted: false, success: true };
    }

    await prisma.wishlistItem.create({
      data: { wishlistId: wishlist.id, productId },
    });

    revalidatePath("/");
    return { wishlisted: true, success: true };
  } catch (error) {
    console.error("Wishlist toggle error:", error);
    return { error: "Something went wrong" };
  }
};

export async function getWishlistAction(): Promise<FullProduct[]> {
  const userId = await CurrentUserId();
  if (!userId) return [];

  const wishlist = await prisma.wishlist.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          product: {
            include: {
              images: true,
              variants: true,
              store: {
                select: {
                  id: true,
                  userId: true,
                  name: true,
                  slug: true,
                  logo: true,
                },
              },
              category: { select: { id: true, name: true } },
              reviews: {
                include: {
                  user: { select: { id: true, name: true, image: true } },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!wishlist) return [];

  // Return only the products
  return wishlist.items.map((item) => item.product);
}
