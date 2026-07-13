import { useEffect } from "react";
import ManageTicketForm from "./ManageTicketForm";

function ManageTicketModal({
  isOpen,
  onClose,
  ticket,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen || !ticket) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>
            <h2 className="text-2xl font-bold">
              Manage Ticket
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update ticket status and resolution.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

        </div>

        {/* Form */}

        <div className="p-6">

          <ManageTicketForm
            ticket={ticket}
            onSuccess={onClose}
          />

        </div>

      </div>
    </div>
  );
}

export default ManageTicketModal;