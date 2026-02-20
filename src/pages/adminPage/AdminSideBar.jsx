import { NavLink } from "react-router-dom";
import { adminNav } from "../../constants/adminNav";
import { FaUserCircle } from "react-icons/fa";

function AdminSidebar() {
  return (
    <div className="w-64 bg-sidebar text-white p-5 h-full relative">
      <div>
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      </div>

      <nav className="flex flex-col gap-4">
        {adminNav.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.end} 
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded transition-all duration-200 ${
                  isActive ? "bg-primary" : "hover:bg-primary hover:opacity-90"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="absolute bottom-5">
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            `flex items-center gap-4 text-xl p-2 rounded duration-200 px-6 ${isActive ? "bg-primary" : "hover:bg-primary hover:opacity-90"}`
          }
        >
          <FaUserCircle /> Profile
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
