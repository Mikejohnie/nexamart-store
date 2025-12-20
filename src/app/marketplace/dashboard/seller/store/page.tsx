import StoreFrontRedirectLoading from "@/app/marketplace/_components/StoreFrontRedirectLoading";
import { CurrentUser } from "@/lib/currentUser";
import { prisma } from "@/lib/prisma";

const Page = async () => {
  const user = await CurrentUser();
  if (!user)
    return (
      <StoreFrontRedirectLoading
        to="/auth/login"
        message="Checking account..."
      />
    );

  const store = await prisma.store.findUnique({
    where: { userId: user.id },
  });

  if (!store)
    return (
      <StoreFrontRedirectLoading
        to="/marketplace/dashboard/seller/store/create-store"
        message="Preparing store setup..."
      />
    );

  return (
    <StoreFrontRedirectLoading
      to={`/store/${store.slug}`}
      message="Loading your storefront..."
      logo={store.logo}
    />
  );
};

export default Page;
