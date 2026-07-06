import StatusBadge from "../common/StatusBadge";
import CategoryBadge from "../common/CategoryBadge";
import UrgencyBadge from "../common/UrgencyBadge";

function ViewTicketModal({
  ticket,
  isOpen,
  onClose,
}) {
  if (!isOpen || !ticket) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Ticket Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>

        </div>

        <div className="space-y-6 p-6">

          <div>

            <h3 className="text-sm text-gray-500">
              Subject
            </h3>

            <p className="mt-1 text-lg font-semibold">
              {ticket.subject}
            </p>

          </div>

          <div>

            <h3 className="text-sm text-gray-500">
              Description
            </h3>

            <p className="mt-1 whitespace-pre-wrap">
              {ticket.description}
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div>

              <h3 className="mb-2 text-sm text-gray-500">
                Status
              </h3>

              <StatusBadge
                status={ticket.status}
              />

            </div>

            <div>

              <h3 className="mb-2 text-sm text-gray-500">
                Category
              </h3>

              <CategoryBadge
                category={ticket.aiMeta?.category}
              />

            </div>

            <div>

              <h3 className="mb-2 text-sm text-gray-500">
                AI Urgency
              </h3>

              <UrgencyBadge
                score={ticket.aiMeta?.urgencyScore}
              />

            </div>

            <div>

              <h3 className="mb-2 text-sm text-gray-500">
                Sentiment
              </h3>

              <p>{ticket.aiMeta?.sentiment}</p>

            </div>

          </div>

          <div>

            <h3 className="text-sm text-gray-500">
              Created
            </h3>

            <p>
              {new Date(ticket.createdAt).toLocaleString()}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ViewTicketModal;