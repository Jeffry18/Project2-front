import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Cell,
} from "recharts";

import { useDashboardAnalytics } from "../../hooks/useDashboardAnalytics";

function StatusChart() {
    const { data } = useDashboardAnalytics();

    const formatStatus = (status) => {
        switch (status) {
            case "open":
                return "Open";

            case "in-progress":
                return "In Progress";

            case "closed":
                return "Closed";

            default:
                return status;
        }
    };

    const chartData =
        data?.data?.statusStats.map((item) => ({
            status: formatStatus(item._id),
            count: item.count,
        })) || [];

    const STATUS_COLORS = {
        Open: "#3b82f6",         // Blue
        "In Progress": "#f59e0b", // Orange
        Closed: "#22c55e",        // Green
    };

    if (chartData.length === 0) {
        return (
            <div className="rounded-2xl bg-white p-8 shadow-sm">

                <h2 className="mb-4 text-xl font-semibold">

                    Ticket Status

                </h2>

                <div className="flex h-72 items-center justify-center">

                    <p className="text-slate-500">

                        No ticket data available.

                    </p>

                </div>

            </div>
        );
    }

    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">
                Ticket Status
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <CartesianGrid
                        vertical={false}
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="status"
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis
                        tickLine={false}
                        axisLine={false}
                    />

                    <Tooltip
                        cursor={{
                            fill: "#f8fafc"
                        }}
                    />

                    <Bar
                        dataKey="count"
                        radius={[8, 8, 0, 0]}
                    >
                        {chartData.map((entry) => (
                            <Cell
                                key={entry.status}
                                fill={STATUS_COLORS[entry.status] || "#64748b"}
                            />
                        ))}
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default StatusChart;