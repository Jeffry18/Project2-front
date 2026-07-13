import StatusBadge from "../common/StatusBadge";

function DashboardRecentTickets({ tickets = [], showCreator = true }) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-xl font-bold">
                    Recent Tickets
                </h2>

                <span className="text-sm text-gray-500">
                    {tickets.length} ticket(s)
                </span>

            </div>

            {tickets.length === 0 ? (

                <div className="py-8 text-center text-gray-500">

                    No recent tickets.

                </div>

            ) : (

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="border-b">

                            <tr>

                                <th className="py-3 text-left">
                                    Subject
                                </th>

                                <th className="py-3 text-left">
                                    Status
                                </th>

                                {showCreator && (

                                    <th className="py-3 text-left">

                                        Created By

                                    </th>

                                )}

                                <th className="py-3 text-left">
                                    Created
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {tickets.map((ticket) => (

                                <tr
                                    key={ticket._id}
                                    className="border-b last:border-none"
                                >

                                    <td className="py-4">

                                        <p className="font-medium">

                                            {ticket.subject}

                                        </p>

                                    </td>

                                    <td className="py-4">

                                        <StatusBadge
                                            status={ticket.status}
                                        />

                                    </td>

                                    {showCreator && (
                                        <td className="py-4">
                                            {ticket.createdBy?.name ?? "-"}
                                        </td>
                                    )}

                                    <td className="py-4 text-gray-500">

                                        {new Date(
                                            ticket.createdAt
                                        ).toLocaleDateString()}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    );
}

export default DashboardRecentTickets;