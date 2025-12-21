import { getAdminStats } from "@/actions/dashboardState";
import AdminPage from "../../_components/AdminPage";

const page = async () => {
  const stats = await getAdminStats();

  return <AdminPage stats={stats} />;
};

export default page;
