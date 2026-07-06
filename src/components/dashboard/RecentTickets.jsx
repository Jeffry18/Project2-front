import { useDashboard } from "../../hooks/useDashboard";
import StatusBadge from "../common/StatusBadge";
import UrgencyBadge from "../common/UrgencyBadge";
import { Link } from "react-router-dom";

function RecentTickets() {
    const { data, isLoading } = useDashboard();

    const tickets = data?.data?.recentTickets || [];

    if (isLoading) {
        return (
            <div className="rounded-2xl bg-white p-6 shadow-sm">
                Loading recent tickets...
            </div>
        );
    }

    return (
        <div className="rounded-2xl bg-white shadow-sm">

            <div className="flex items-center justify-between border-b p-6">

                <h2 className="text-xl font-semibold">

                    Recent Tickets

                </h2>

                <Link

                    to="/tickets"

                    className="text-sm font-medium text-blue-600 hover:underline"

                >

                    View All →

                </Link>

            </div>

            <table className="w-full">

                <thead className="bg-slate-50">

                    <tr>

                        <th className="px-6 py-4 text-left">
                            Subject
                        </th>

                        <th className="px-6 py-4 text-left">
                            Status
                        </th>

                        <th className="px-6 py-4 text-left">
                            Category
                        </th>

                        <th className="px-6 py-4 text-left">
                            Urgency
                        </th>

                        <th className="px-6 py-4 text-left">
                            Created
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {tickets.length === 0 ? (

                        <tr>

                            <td
                                colSpan="5"
                                className="p-8 text-center text-gray-500"
                            >
                                No tickets found.
                            </td>

                        </tr>

                    ) : (

                        tickets.map((ticket) => (

                            <tr
                                key={ticket._id}
                                className="border-t"
                            >

                                <td className="px-6 py-4">

                                    <p className="font-medium">

                                        {ticket.subject}

                                    </p>

                                    <p className="text-xs text-slate-500">

                                        Ticket ID:
                                        {ticket._id.slice(-6)}

                                    </p>

                                </td>

                                <td className="px-6 py-4">

                                    <StatusBadge
                                        status={ticket.status}
                                    />

                                </td>

                                <td className="px-6 py-4 text-sm text-slate-600">

                                    {ticket.aiMeta?.category}

                                </td>

                                <td className="px-6 py-4">

                                    <UrgencyBadge
                                        score={ticket.aiMeta?.urgencyScore}
                                    />

                                </td>

                                <td className="px-6 py-4">

                                    {new Date(
                                        ticket.createdAt
                                    ).toLocaleDateString()}

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default RecentTickets;