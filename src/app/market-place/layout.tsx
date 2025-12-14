import MarketPlaceNavbar from "@/components/layout/MarketPlaceNavbar";
import { redirect } from "next/navigation";
import { DashboardSidebar } from "./_components/SideNavbar";
import { CurrentUser } from "@/lib/currentUser";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await CurrentUser();

  if (!user) redirect("/auth/login");
  if (user.role === "USER") redirect("/");

  return (
    <div>
      {/* TOP NAVBAR */}
      <MarketPlaceNavbar initialUser={user} />

      <div className="flex">
        {/* LEFT SIDEBAR */}
        <DashboardSidebar initialUser={user} />

        {/* MAIN CONTENT */}
        <main className="flex-1 ml-0 md:ml-64 px-6 py-4">{children}</main>
      </div>
    </div>
  );
}
