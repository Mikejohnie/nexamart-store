"use server";

import { CurrentUser } from "@/lib/currentUser";
import { prisma } from "@/lib/prisma";
import { productSchema, productSchemaType } from "@/lib/zodValidation";
import { revalidatePath } from "next/cache";

export const createProduct = async (values: productSchemaType) => {
  const user = await CurrentUser();
  if (!user) return { error: "Unauthorized access" };

  try {
    if (user.role !== "SELLER") return { error: "You cannot create products" };

    const validatedFields = productSchema.safeParse(values);

    if (!validatedFields.success) return { error: "Invalid product data" };

    const { name, description, price, quantity } = validatedFields.data;

    await prisma.product.create({
      data: {
        userId: user.id || "",
        name,
        description,
        price,
        quantity,
      },
    });

    revalidatePath("/market-place/dashboard/seller/products");
    // redirect("/market-place/dashboard/seller/products");

    return { success: "Product created successfully!" };
  } catch (error) {
    console.error("error creating product", error);
  }
};
