import {
  LayoutDashboard,
  Ticket,
  BarChart3,
  LogOut,
  Building2,
  Users,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const {
    logout,
    user,
    isAdmin,
    isAgent,
    isUser,
  } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
      show: true,
    },
    {
      label: isUser ? "My Tickets" : "Tickets",
      path: "/tickets",
      icon: Ticket,
      show: true,
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: BarChart3,
      show: isAdmin,
    },
    {
      label: "Organization",
      path: "/organization",
      icon: Users,
      show: isAdmin,
    },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">

      {/* Logo */}

      <div className="flex items-center gap-3 border-b p-6">

        <div className="rounded-xl bg-blue-600 p-2">
          <Building2
            className="text-white"
            size={24}
          />
        </div>

        <div>
          <h2 className="font-bold text-slate-800">
            Support Intelligence
          </h2>

          <p className="text-xs text-gray-500">
            AI Helpdesk
          </p>
        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">

        {menuItems
          .filter((item) => item.show)
          .map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={20} />
                {item.label}
              </NavLink>
            );
          })}

      </nav>

      {/* User Info */}

      <div className="border-t px-4 py-3">

        <p className="font-medium text-slate-700">
          {user?.name}
        </p>

        <p className="text-sm capitalize text-gray-500">
          {user?.role}
        </p>

      </div>

      {/* Logout */}

      <div className="border-t p-4">

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;