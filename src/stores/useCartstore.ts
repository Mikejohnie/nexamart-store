import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";

type CartItem = {
  productId: string;
  quantity: number;
  variantId?: string;
};

type CartState = {
  items: CartItem[];
  add: (productId: string, variantId?: string) => void;
  change: (
    productId: string,
    variantId: string | undefined,
    delta: number
  ) => void;
  remove: (productId: string, variantId?: string) => void;
  sync: (items: CartItem[]) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set) => ({
      items: [],

      add: (productId, variantId) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === productId && i.variantId === variantId
          );

          if (existing) {
            toast.success("Increased quantity");
            return {
              items: state.items.map((i) =>
                i.productId === productId && i.variantId === variantId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }

          toast.success("Added to cart");

          return {
            items: [...state.items, { productId, variantId, quantity: 1 }],
          };
        }),

      change: (productId, variantId, delta) =>
        set((state) => {
          const updated = state.items
            .map((i) =>
              i.productId === productId && i.variantId === variantId
                ? { ...i, quantity: i.quantity + delta }
                : i
            )
            .filter((i) => i.quantity > 0);

          toast.info("Cart updated");

          return { items: updated };
        }),

      remove: (productId, variantId) =>
        set((state) => {
          toast.error("Item removed");
          return {
            items: state.items.filter(
              (i) => !(i.productId === productId && i.variantId === variantId)
            ),
          };
        }),

      sync: (items) => {
        toast.success("Cart synced");
        return set({ items });
      },

      clear: () => {
        toast.error("Cart cleared");
        return set({ items: [] });
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
