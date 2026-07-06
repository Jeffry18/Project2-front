import { Bell, UserCircle2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome back, {user?.name || "User"} 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening with your support team today.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        <button className="relative rounded-full p-2 hover:bg-slate-100 transition">

          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle2
            size={40}
            className="text-blue-600"
          />

          <div>

            <p className="font-semibold">

              {user?.name || "User"}

            </p>

            <p className="text-sm text-gray-500">

              {user?.role || "Admin"}

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;