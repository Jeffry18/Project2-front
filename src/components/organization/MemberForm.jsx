import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  useCreateUser,
  useUpdateUser,
} from "../../hooks/useUsers";

import { memberSchema } from "../../schemas/memberSchema";

function MemberForm({
  mode = "create",
  role = "user",
  member = null,
  onSuccess,
}) {
  const createMutation = useCreateUser();

  const updateMutation = useUpdateUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(memberSchema),

    defaultValues: {
      name: member?.name || "",
      email: member?.email || "",
      password: "",
    },
  });

  useEffect(() => {
    if (member) {
      reset({
        name: member.name,
        email: member.email,
        password: "",
      });
    }
  }, [member, reset]);

  const onSubmit = (data) => {
    if (mode === "create") {
      createMutation.mutate(
        {
          ...data,
          role,
        },
        {
          onSuccess: () => {
            reset();

            onSuccess?.();
          },
        }
      );

      return;
    }

    updateMutation.mutate(
      {
        id: member._id,

        user: {
          name: data.name,
          email: data.email,
        },
      },
      {
        onSuccess: () => {
          onSuccess?.();
        },
      }
    );
  };

  const loading =
    createMutation.isPending ||
    updateMutation.isPending;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name */}

      <div>

        <label className="mb-2 block font-medium">
          Name
        </label>

        <input
          {...register("name")}
          placeholder="Enter full name"
          className="w-full rounded-xl border p-3 focus:border-blue-500 focus:outline-none"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}

      </div>

      {/* Email */}

      <div>

        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          {...register("email")}
          placeholder="Enter email"
          className="w-full rounded-xl border p-3 focus:border-blue-500 focus:outline-none"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

      </div>

      {/* Password */}

      {mode === "create" && (
        <div>

          <label className="mb-2 block font-medium">
            Password
          </label>

          <input
            type="password"
            {...register("password")}
            placeholder="Enter password"
            className="w-full rounded-xl border p-3 focus:border-blue-500 focus:outline-none"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}

        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {mode === "create"
          ? loading
            ? "Creating..."
            : role === "agent"
              ? "Create Agent"
              : "Create User"
          : loading
            ? "Saving..."
            : "Save Changes"}
      </button>

    </form>
  );
}

export default MemberForm;