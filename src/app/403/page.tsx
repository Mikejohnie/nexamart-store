"use client";

import { useCurrentUser } from "@/hooks/getCurrentUser";
import { useRouter } from "next/navigation";

export default function ForbiddenPage() {
  const router = useRouter();
  const user = useCurrentUser();

  const goHome = () => {
    if (user?.role === "ADMIN") router.push("/market-place/dashboard/admin");
    else if (user?.role === "SELLER")
      router.push("/market-place/dashboard/seller");
    else if (user?.role === "RIDER")
      router.push("/market-place/dashboard/rider");
    else router.push("/customer");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">403 – Forbidden</h1>
      <p className="text-muted-foreground">
        You don't have the permission to access this page.
      </p>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}
