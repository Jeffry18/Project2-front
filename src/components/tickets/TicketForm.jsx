import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useEffect } from "react";

import { useUpdateTicket } from "../../hooks/useUpdateTicket";
import { ticketSchema } from "../../schemas/ticketSchema";
import { useCreateTicket } from "../../hooks/useCreateTicket";

function TicketForm({ mode = "create", ticket = null, onSuccess, }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ticketSchema),

    defaultValues: {
      subject: ticket?.subject || "",
      description: ticket?.description || "",
      status: ticket?.status || "open",
    },
  });

  const createMutation = useCreateTicket();
  const updateMutation = useUpdateTicket();

  useEffect(() => {
    if (ticket) {
      reset({
        subject: ticket.subject,
        description: ticket.description,
        status: ticket.status,
      });
    }
  }, [ticket, reset]);

  const onSubmit = (data) => {
    console.log(data);
    if (mode === "create") {
      createMutation.mutate(data, {
        onSuccess: () => {
          toast.success("Ticket created successfully!");

          reset();

          onSuccess?.();
        },

        onError: (error) => {
          toast.error(
            error.response?.data?.message ||
            "Failed to create ticket."
          );
        },
      });

      return;
    }

    updateMutation.mutate(
      {
        id: ticket._id,
        ticket: data,
      },
      {
        onSuccess: () => {
          toast.success("Ticket updated successfully!");

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
          {...register("subject")}
          className="w-full rounded-xl border p-3 focus:border-blue-500 focus:outline-none"
          placeholder="Enter ticket subject"
        />

        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          {...register("description")}
          rows={6}
          className="w-full rounded-xl border p-3 focus:border-blue-500 focus:outline-none"
          placeholder="Describe the issue..."
        />

        {mode === "edit" && (
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
        )}

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={
          mode === "create"
            ? createMutation.isPending
            : updateMutation.isPending
        }
        className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {mode === "create"
          ? createMutation.isPending
            ? "Creating..."
            : "Create Ticket"
          : updateMutation.isPending
            ? "Saving..."
            : "Save Changes"}
      </button>
    </form>
  );
}

export default TicketForm;