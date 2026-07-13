import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

import StatusBadge from "../common/StatusBadge";
import CategoryBadge from "../common/CategoryBadge";
import UrgencyBadge from "../common/UrgencyBadge";

function ViewTicketModal({
  isOpen,
  onClose,
  ticket,
}) {
  const { isAdmin, isAgent } = useAuth();

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

  const showStaffFields = isAdmin || isAgent;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold">
            Ticket Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="space-y-8 p-6">

          {/* Subject */}

          <section>
            <h3 className="mb-2 font-semibold">
              Subject
            </h3>

            <div className="rounded-xl bg-slate-100 p-4">
              {ticket.subject}
            </div>
          </section>

          {/* Description */}

          <section>
            <h3 className="mb-2 font-semibold">
              Description
            </h3>

            <div className="whitespace-pre-wrap rounded-xl bg-slate-100 p-4">
              {ticket.description}
            </div>
          </section>

          {/* Status */}

          <section>
            <h3 className="mb-2 font-semibold">
              Status
            </h3>

            <StatusBadge status={ticket.status} />
          </section>

          {/* Staff Information */}

          {showStaffFields && (
            <>
              <hr />

              <section>

                <h3 className="mb-4 text-lg font-semibold">
                  AI Analysis
                </h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                  <div>
                    <p className="mb-2 font-medium">
                      Category
                    </p>

                    <CategoryBadge
                      category={ticket.aiMeta?.category}
                    />
                  </div>

                  <div>
                    <p className="mb-2 font-medium">
                      Urgency
                    </p>

                    <UrgencyBadge
                      score={ticket.aiMeta?.urgencyScore}
                    />
                  </div>

                </div>

              </section>

              <hr />

              <section>

                <h3 className="mb-4 text-lg font-semibold">
                  Ticket Information
                </h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                  <div>

                    <p className="font-medium">
                      Created By
                    </p>

                    <p className="text-gray-600">
                      {ticket.createdBy?.name ?? "-"}
                    </p>

                  </div>

                  <div>

                    <p className="font-medium">
                      Created At
                    </p>

                    <p className="text-gray-600">
                      {new Date(
                        ticket.createdAt
                      ).toLocaleString()}
                    </p>

                  </div>

                </div>

              </section>
            </>
          )}

          {/* Resolution */}

          {ticket.resolution && (
            <>
              <hr />

              <section>

                <h3 className="mb-2 text-lg font-semibold">
                  Resolution
                </h3>

                <div className="whitespace-pre-wrap rounded-xl bg-green-50 p-4">
                  {ticket.resolution}
                </div>

              </section>
            </>
          )}

          {/* Resolution Details */}

          {showStaffFields &&
            ticket.resolvedBy && (
              <>
                <hr />

                <section>

                  <h3 className="mb-4 text-lg font-semibold">
                    Resolution Details
                  </h3>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    <div>

                      <p className="font-medium">
                        Resolved By
                      </p>

                      <p className="text-gray-600">
                        {ticket.resolvedBy?.name ?? "-"}
                      </p>

                    </div>

                    <div>

                      <p className="font-medium">
                        Resolved At
                      </p>

                      <p className="text-gray-600">
                        {ticket.resolvedAt
                          ? new Date(
                              ticket.resolvedAt
                            ).toLocaleString()
                          : "-"}
                      </p>

                    </div>

                  </div>

                </section>
              </>
            )}

        </div>
      </div>
    </div>
  );
}

export default ViewTicketModal;