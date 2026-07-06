import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas/authSchema";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm({

        resolver: zodResolver(loginSchema),

        defaultValues: {
            email: "",
            password: ""
        }

    });

    const onSubmit = async (data) => {

        try {

            const response = await loginUser(data);

            login(
                response.data.token,
                response.data.user
            );

            toast.success("Login successful");

            navigate("/dashboard");

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Login failed"

            );

        }

    };

    return (

        <form

            onSubmit={handleSubmit(onSubmit)}

            className="space-y-5"

        >

            {/* Email */}

            <div>

                <label className="block mb-2 text-sm font-medium">

                    Email

                </label>

                <input

                    type="email"

                    {...register("email")}

                    className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"

                    placeholder="john@example.com"

                />

                {errors.email && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.email.message}

                    </p>

                )}

            </div>

            {/* Password */}

            <div>

                <label className="block mb-2 text-sm font-medium">

                    Password

                </label>

                <div className="relative">

                    <input

                        type={showPassword ? "text" : "password"}

                        {...register("password")}

                        className="w-full rounded-lg border p-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"

                        placeholder="••••••••"

                    />

                    <button

                        type="button"

                        onClick={() => setShowPassword(!showPassword)}

                        className="absolute right-3 top-3"

                    >

                        {

                            showPassword

                                ?

                                <EyeOff size={20} />

                                :

                                <Eye size={20} />

                        }

                    </button>

                </div>

                {errors.password && (

                    <p className="mt-1 text-sm text-red-500">

                        {errors.password.message}

                    </p>

                )}

            </div>

            <button

                type="submit"

                disabled={isSubmitting}

                className="flex w-full items-center justify-center rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"

            >

                {

                    isSubmitting

                        ?

                        <LoaderCircle className="animate-spin" />

                        :

                        "Login"

                }

            </button>

        </form>

    );

}

export default LoginForm;