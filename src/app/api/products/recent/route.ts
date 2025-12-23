import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get("ids")?.split(",") ?? [];

  if (!ids.length) return NextResponse.json([]);

  const products = await prisma.product.findMany({
    where: { id: { in: ids } },
    include: {
      images: true,
      variants: true,
      store: true,
    },
    take: 10,
  });

  return NextResponse.json(products);
}
