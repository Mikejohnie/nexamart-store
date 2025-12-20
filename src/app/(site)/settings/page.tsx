import { RoleBasedSettingsPage } from "@/app/marketplace/_components/RoleBasedPageContent";
import { CurrentUser } from "@/lib/currentUser";

const page = async () => {
  const user = await CurrentUser();
  return (
    <div>
      <RoleBasedSettingsPage initialUser={user} />
    </div>
  );
};

export default page;
