import Footer from "@/components/layout/Footer";
import MarketPlaceNavbar from "@/components/layout/MarketPlaceNavbar";
import SiteNavbar from "@/components/layout/Navbar";
import { CurrentUser } from "@/lib/currentUser";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await CurrentUser();

  return (
    <>
      <main>
        {(!user || user.role === "USER") && <SiteNavbar initialUser={user} />}
        {(!user || user.role === "SELLER" || "ADMIN" || "MODERATOR") && (
          <MarketPlaceNavbar initialUser={user} />
        )}

        {children}

        <Footer />
      </main>
    </>
  );
}
