import { Link } from "react-router-dom";
import { Bot } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-blue-600 p-2">

            <Bot
              size={22}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-lg font-bold">

              Support Intelligence

            </h1>

            <p className="text-xs text-gray-500">

              AI Helpdesk Platform

            </p>

          </div>

        </Link>

        <nav className="hidden gap-8 text-sm md:flex">

          <a href="#features">

            Features

          </a>

          <a href="#workflow">

            Workflow

          </a>

        </nav>

        <Link
          to="/login"
          className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Login
        </Link>

      </div>
    </header>
  );
}

export default Navbar;