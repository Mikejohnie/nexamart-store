// app/marketplace/dashboard/page.tsx
import { CurrentUser } from "@/lib/currentUser";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await CurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  switch (user.role) {
    case "ADMIN":
      redirect("/marketplace/dashboard/admin");
      return;
    case "SELLER":
      redirect("/marketplace/dashboard/seller");
      return;
    case "RIDER":
      redirect("/marketplace/dashboard/rider");
      return;
    case "MODERATOR":
      redirect("/marketplace/dashboard/moderator");
      return;
    default:
      redirect("/403");
      return;
  }
};

export default page;
