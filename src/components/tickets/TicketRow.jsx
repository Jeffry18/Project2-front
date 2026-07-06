import {
  Eye,
  Pencil,
  Trash2
} from "lucide-react";

import StatusBadge from "../common/StatusBadge";
import UrgencyBadge from "../common/UrgencyBadge";
import CategoryBadge from "../common/CategoryBadge";

function TicketRow({
  ticket,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-t hover:bg-slate-50">

      <td className="px-6 py-4">

        <p className="font-semibold">

          {ticket.subject}

        </p>

        <p className="text-xs text-slate-500">

          ID: {ticket._id.slice(-6)}

        </p>

      </td>

      <td className="px-6 py-4">

        <StatusBadge
          status={ticket.status}
        />

      </td>

      <td className="px-6 py-4">

        <CategoryBadge
          category={ticket.aiMeta?.category}
        />

      </td>

      <td className="px-6 py-4">

        <UrgencyBadge
          score={ticket.aiMeta?.urgencyScore}
        />

      </td>

      <td className="px-6 py-4">

        {new Date(
          ticket.createdAt
        ).toLocaleString()}

      </td>

      <td className="px-6 py-4">

        <div className="flex gap-3">

          <button
            onClick={() => onView(ticket)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Eye size={18} />
          </button>

          <button
            onClick={() => onEdit(ticket)}
            className="text-green-600 hover:text-green-800"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(ticket)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}

export default TicketRow;