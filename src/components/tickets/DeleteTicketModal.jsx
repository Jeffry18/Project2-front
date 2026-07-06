import { toast } from "sonner";
import { useDeleteTicket } from "../../hooks/useDeleteTicket";

function DeleteTicketModal({
  ticket,
  isOpen,
  onClose,
}) {
  const deleteMutation = useDeleteTicket();

  if (!isOpen || !ticket) return null;

  const handleDelete = () => {
    deleteMutation.mutate(ticket._id, {
      onSuccess: () => {
        toast.success("Ticket deleted successfully!");
        onClose();
      },

      onError: (error) => {
        toast.error(
          error.response?.data?.message ||
            "Failed to delete ticket."
        );
      },
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b p-6">

          <h2 className="text-xl font-bold text-red-600">
            Delete Ticket
          </h2>

        </div>

        <div className="space-y-4 p-6">

          <p>
            Are you sure you want to delete this ticket?
          </p>

          <div className="rounded-lg bg-slate-100 p-4">

            <p className="font-semibold">
              {ticket.subject}
            </p>

          </div>

          <p className="text-sm text-red-500">
            This action cannot be undone.
          </p>

          <div className="flex justify-end gap-3">

            <button
              onClick={onClose}
              className="rounded-lg border px-4 py-2"
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              disabled={deleteMutation.isPending}
              className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
            >
              {deleteMutation.isPending
                ? "Deleting..."
                : "Delete"}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default DeleteTicketModal;