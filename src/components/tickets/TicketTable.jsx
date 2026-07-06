import { useState } from "react";

import { useTickets } from "../../hooks/useTickets";
import TicketRow from "./TicketRow";
import ViewTicketModal from "./ViewTicketModal";
import EditTicketModal from "./EditTicketModal";
import DeleteTicketModal from "./DeleteTicketModal";

function TicketTable({
  search,
  status,
  category,
  page,
  setPage,
}) {
  const { data, isLoading, error } = useTickets({
    search,
    status,
    category,
    page,
    limit: 10,
  });

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const tickets = data?.data || [];

  const handleView = (ticket) => {
    setSelectedTicket(ticket);
    setViewOpen(true);
  };

  const handleEdit = (ticket) => {
    setSelectedTicket(ticket);
    setEditOpen(true);
  };

  const handleDelete = (ticket) => {
    setSelectedTicket(ticket);
    setDeleteOpen(true);
  };

  if (isLoading) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-center text-slate-500">
          Loading tickets...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl bg-red-100 p-8 shadow-sm">
        <p className="text-center text-red-600">
          Failed to load tickets.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Ticket Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left">Subject</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Urgency</th>
              <th className="px-6 py-4 text-left">Created</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-12 text-center"
                >
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-700">
                      No tickets found
                    </h3>

                    <p className="text-sm text-slate-500">
                      Create your first support ticket.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <TicketRow
                  key={ticket._id}
                  ticket={ticket}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {tickets.length > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="rounded-lg border px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-sm font-medium text-slate-600">
            Page {data?.page || 1} of {data?.totalPages || 1}
          </span>

          <button
            disabled={page >= (data?.totalPages || 1)}
            onClick={() => setPage(page + 1)}
            className="rounded-lg border px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* View Ticket Modal */}
      <ViewTicketModal
        ticket={selectedTicket}
        isOpen={viewOpen}
        onClose={() => {
          setViewOpen(false);
          setSelectedTicket(null);
        }}
      />

      {/* Edit Ticket Modal */}
      <EditTicketModal
        ticket={selectedTicket}
        isOpen={editOpen}
        onClose={() => {
          setEditOpen(false);
          setSelectedTicket(null);
        }}
      />

      <DeleteTicketModal
        ticket={selectedTicket}
        isOpen={deleteOpen}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedTicket(null);
        }}
      />

    </>
  );
}

export default TicketTable;