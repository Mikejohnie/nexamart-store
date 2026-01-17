"use server";

import { prisma } from "@/lib/prisma";
import { CurrentUser } from "@/lib/currentUser";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";
import { signOut } from "@/auth/auth";

const utapi = new UTApi();

export async function deleteUserAccount(userId: string) {
  const user = await CurrentUser();
  if (!user) return { error: "Unauthorized" };

  try {
    const keysToDelete: string[] = [];

    // Profile avatar
    if (user.profileAvatar?.key) {
      keysToDelete.push(user.profileAvatar.key);
    }

    // store/product images
    const about = await prisma.store.findUnique({
      where: { id: user.id },
    });

    if (keysToDelete.length > 0) {
      await utapi.deleteFiles(keysToDelete);
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    await signOut({ redirect: false });

    revalidatePath("/");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.error("Delete account error:", error);
    return { error: "Failed to delete account" };
  }
}
