import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useUpdateTicket } from "../../hooks/useUpdateTicket";

function ManageTicketForm({
  ticket,
  onSuccess,
}) {
  const updateTicket = useUpdateTicket();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: ticket?.status ?? "open",
      resolution: ticket?.resolution ?? "",
    },
  });

  useEffect(() => {
    if (ticket) {
      reset({
        status: ticket.status,
        resolution: ticket.resolution || "",
      });
    }
  }, [ticket, reset]);

  const status = watch("status");

  const onSubmit = (data) => {
    updateTicket.mutate(
      {
        id: ticket._id,
        ticket: data,
      },
      {
        onSuccess: () => {
          toast.success("Ticket updated successfully.");
          onSuccess?.();
        },

        onError: (error) => {
          toast.error(
            error.response?.data?.message ||
              "Failed to update ticket."
          );
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Subject */}

      <div>
        <label className="mb-2 block font-medium">
          Subject
        </label>

        <input
          value={ticket.subject}
          readOnly
          className="w-full rounded-xl border bg-slate-100 p-3"
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          value={ticket.description}
          readOnly
          rows={5}
          className="w-full rounded-xl border bg-slate-100 p-3"
        />
      </div>

      {/* Status */}

      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-xl border p-3"
        >
          <option value="open">
            Open
          </option>

          <option value="in-progress">
            In Progress
          </option>

          <option value="closed">
            Closed
          </option>
        </select>
      </div>

      {/* Resolution */}

      <div>
        <label className="mb-2 block font-medium">
          Resolution
        </label>

        <textarea
          {...register("resolution", {
            validate: (value) => {
              if (
                status === "closed" &&
                !value.trim()
              ) {
                return "Resolution is required before closing the ticket.";
              }

              return true;
            },
          })}
          rows={5}
          placeholder="Describe how the issue was resolved..."
          className="w-full rounded-xl border p-3"
        />

        {errors.resolution && (
          <p className="mt-2 text-sm text-red-500">
            {errors.resolution.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={updateTicket.isPending}
        className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {updateTicket.isPending
          ? "Saving..."
          : "Save Changes"}
      </button>
    </form>
  );
}

export default ManageTicketForm;