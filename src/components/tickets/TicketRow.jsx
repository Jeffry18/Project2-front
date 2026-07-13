import {
  Eye,
  Pencil,
  Settings,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

import StatusBadge from "../common/StatusBadge";
import UrgencyBadge from "../common/UrgencyBadge";
import CategoryBadge from "../common/CategoryBadge";

function TicketRow({
  ticket,
  onView,
  onEdit,
  onManage,
}) {
  const {
    isAdmin,
    isAgent,
    isUser,
  } = useAuth();

  const canEdit =
    isUser &&
    ticket.status === "open";

  return (
    <tr className="border-t hover:bg-slate-50">

      {/* Subject */}

      <td className="px-6 py-4">

        <p className="font-semibold">
          {ticket.subject}
        </p>

        <p className="text-xs text-slate-500">
          ID: {ticket._id.slice(-6)}
        </p>

      </td>

      {/* Status */}

      <td className="px-6 py-4">
        <StatusBadge
          status={ticket.status}
        />
      </td>

      {/* Category */}

      <td className="px-6 py-4">
        <CategoryBadge
          category={ticket.aiMeta?.category}
        />
      </td>

      {/* Urgency */}

      <td className="px-6 py-4">
        <UrgencyBadge
          score={ticket.aiMeta?.urgencyScore}
        />
      </td>

      {/* Created */}

      <td className="px-6 py-4">
        {new Date(
          ticket.createdAt
        ).toLocaleString()}
      </td>

      {/* Actions */}

      <td className="px-6 py-4">

        <div className="flex items-center gap-3">

          {/* View */}

          <button
            onClick={() => onView(ticket)}
            className="text-blue-600 transition hover:text-blue-800"
            title="View Ticket"
          >
            <Eye size={18} />
          </button>

          {/* User Edit */}

          {canEdit && (
            <button
              onClick={() => onEdit(ticket)}
              className="text-green-600 transition hover:text-green-800"
              title="Edit Ticket"
            >
              <Pencil size={18} />
            </button>
          )}

          {/* Admin / Agent Manage */}

          {(isAdmin || isAgent) && (
            <button
              onClick={() => onManage(ticket)}
              className="text-orange-600 transition hover:text-orange-800"
              title="Manage Ticket"
            >
              <Settings size={18} />
            </button>
          )}

        </div>

      </td>

    </tr>
  );
}

export default TicketRow;