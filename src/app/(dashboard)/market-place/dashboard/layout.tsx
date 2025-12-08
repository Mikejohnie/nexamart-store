import DashboardNavbar from "@/app/(dashboard)/market-place/dashboard/_components/SharedNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1 ml-64">
        {/* Topbar */}
        <DashboardNavbar />

        {/* Scrollable main content */}
        <main className="mt-16 p-6 h-[calc(100vh-4rem)] overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
