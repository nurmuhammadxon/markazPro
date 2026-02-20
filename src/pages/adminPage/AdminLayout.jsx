import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSideBar";

function AdminLayout() {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-screen w-64">
        <AdminSidebar />
      </div>
      <div className="ml-64 flex-1 p-8 bg-bgColor min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
