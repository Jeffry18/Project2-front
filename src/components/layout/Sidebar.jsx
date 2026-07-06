import {
    LayoutDashboard,
    Ticket,
    BarChart3,
    LogOut,
    Building2
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

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

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-slate-100"
                        }`
                    }
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/tickets"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-slate-100"
                        }`
                    }
                >
                    <Ticket size={20} />
                    Tickets
                </NavLink>

                <NavLink
                    to="/analytics"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-slate-100"
                        }`
                    }
                >
                    <BarChart3 size={20} />
                    Analytics
                </NavLink>

            </nav>

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