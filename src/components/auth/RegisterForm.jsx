import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";

import { registerOrganization } from "../../services/organizationService";
import { useAuth } from "../../context/AuthContext";

import { registerSchema } from "../../schemas/registerSchema";

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            organizationName: "",
            adminName: "",
            adminEmail: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            const payload = {
                organizationName: data.organizationName,
                adminName: data.adminName,
                adminEmail: data.adminEmail,
                password: data.password,
            };

            const response = await registerOrganization(payload);

            login(response.data.token, response.data.user);

            toast.success("Organization created successfully!");

            navigate("/dashboard");
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Organization Name */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Organization Name
                </label>

                <input
                    type="text"
                    placeholder="Acme Inc."
                    {...register("organizationName")}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-blue-100"
                />

                {errors.organizationName && (
                    <p className="mt-1 text-sm font-medium text-red-500">
                        {errors.organizationName.message}
                    </p>
                )}
            </div>

            {/* Admin Name */}
            <div>
                <label className="mb-2 block text-sm font-medium">Admin Name</label>

                <input
                    type="text"
                    placeholder="John Doe"
                    {...register("adminName")}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-blue-100"
                />

                {errors.adminName && (
                    <p className="mt-1 text-sm font-medium text-red-500">
                        {errors.adminName.message}
                    </p>
                )}
            </div>

            {/* Admin Email */}
            <div>
                <label className="mb-2 block text-sm font-medium">Admin Email</label>

                <input
                    type="email"
                    placeholder="admin@example.com"
                    {...register("adminEmail")}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-blue-100"
                />

                {errors.adminEmail && (
                    <p className="mt-1 text-sm font-medium text-red-500">
                        {errors.adminEmail.message}
                    </p>
                )}
            </div>

            {/* Password */}
            <div>
                <label className="mb-2 block text-sm font-medium">Password</label>

                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...register("password")}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {errors.password && (
                    <p className="mt-1 text-sm font-medium text-red-500">
                        {errors.password.message}
                    </p>
                )}
            </div>

            {/* Confirm Password */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Confirm Password
                </label>

                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...register("confirmPassword")}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                    >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {errors.confirmPassword && (
                    <p className="mt-1 text-sm font-medium text-red-500">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isSubmitting ? (
                    <LoaderCircle size={20} className="animate-spin" />
                ) : (
                    "Create Organization"
                )}
            </button>

            <div className="relative my-6">

                <div className="absolute inset-0 flex items-center">

                    <div className="w-full border-t border-gray-200"></div>

                </div>

                <div className="relative flex justify-center">

                    <span className="bg-white px-3 text-sm text-gray-400">
                        OR
                    </span>

                </div>

            </div>

            <div className="text-center text-sm text-gray-600">
                Already have an account?
                <Link
                    to="/login"
                    className="ml-1 font-semibold text-blue-600 hover:underline"
                >
                    Login
                </Link>
            </div>
        </form>
    );
}

export default RegisterForm;
