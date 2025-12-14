import Footer from "@/components/layout/Footer";
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

        {children}

        <Footer />
      </main>
    </>
  );
}
