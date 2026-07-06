import { Building2 } from "lucide-react";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl p-8">

        <div className="flex justify-center mb-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">

            <Building2 className="text-white" size={30} />

          </div>

        </div>

        <h1 className="text-center text-3xl font-bold text-slate-800">
          Support Intelligence
        </h1>

        <p className="mt-2 mb-8 text-center text-gray-500">
          Create your organization and start managing AI-powered support.
        </p>

        <RegisterForm />

      </div>

    </div>
  );
}

export default Register;