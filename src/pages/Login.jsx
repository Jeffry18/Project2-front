import { Link } from "react-router-dom";

import LoginBackground from "../components/auth/LoginBackground";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-100">

      {/* Dashboard */}

      <LoginBackground />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-white/55 backdrop-blur-sm" />

      {/* Login */}

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/90 p-10 shadow-2xl backdrop-blur-xl">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold">

            Support Intelligence

          </h1>

          <p className="mt-2 text-slate-500">

            AI Powered Helpdesk Platform

          </p>

        </div>

        <div className="mb-8 text-center">

          <h2 className="text-2xl font-bold">

            Welcome Back

          </h2>

          <p className="mt-2 text-slate-500">

            Sign in to your workspace

          </p>

        </div>

        <LoginForm />

        <div className="mt-8 text-center">

          <Link
            to="/"
            className="font-medium text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;