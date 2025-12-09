import { useCartStore } from "@/stores/useCartstore";
import { useWishlistStore } from "@/stores/useWishlistStore";
import { useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return async () => {
    localStorage.removeItem("cart-store");
    localStorage.removeItem("wishlist-store");

    useCartStore.getState().clear();
    useWishlistStore.getState().clear();

    queryClient.clear();

    await signOut({ callbackUrl: "/" });
  };
};
