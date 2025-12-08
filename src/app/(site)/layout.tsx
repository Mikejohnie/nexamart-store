import Footer from "@/components/layout/Footer";
import SiteNavbar from "@/components/layout/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <SiteNavbar />
      <main className="flex-1 p-6">{children}</main>

      <Footer />
    </div>
  );
}
