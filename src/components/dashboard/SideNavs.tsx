import { useCurrentUser } from "@/hooks/getCurrentUser";

const RoleBasedSideNavs = () => {
  const user = useCurrentUser();

  return (
    <div>
      {user?.role === "USER" && "USER"}
      {user?.role === "SELLER" && "SELLER"}
      {user?.role === "RIDER" && "RIDER"}
      {user?.role === "ADMIN" && "ADMIN"}
    </div>
  );
};

export default RoleBasedSideNavs;
