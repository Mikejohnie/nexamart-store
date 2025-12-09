"use client";

import { useQuery } from "@tanstack/react-query";
import type { CurrentUser } from "@/types/user";

export function useCurrentUserQuery(initialUser?: CurrentUser | null) {
  return useQuery<CurrentUser | null>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const res = await fetch("/api/current-user", { cache: "no-store" });
      if (!res.ok) return null;
      return res.json() as Promise<CurrentUser>;
    },
    initialData: initialUser,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
