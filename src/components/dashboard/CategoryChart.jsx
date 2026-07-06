import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Cell,
} from "recharts";

import { useDashboard } from "../../hooks/useDashboard";

function CategoryChart() {
    const { data } = useDashboard();

    const chartData =
        data?.data?.categoryStats.map((item) => ({
            name: item._id,
            value: item.count,
        })) || [];

    if (chartData.length === 0) {
        return (
            <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">
                    Ticket Categories
                </h2>

                <div className="flex h-72 items-center justify-center">
                    <p className="text-slate-500">
                        No category data available.
                    </p>
                </div>
            </div>
        );
    }

    const CATEGORY_COLORS = {
        Billing: "#16a34a",             // Green
        "Login Issue": "#2563eb",       // Blue
        "Technical Bug": "#dc2626",     // Red
        Refund: "#f59e0b",              // Orange
        "Account Management": "#0891b2",// Cyan
        "Feature Request": "#7c3aed",   // Purple
        Other: "#64748b",               // Gray
    };

    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">
                Ticket Categories
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        innerRadius={60}
                        paddingAngle={3}
                        label
                    >
                        {chartData.map((entry) => (
                            <Cell
                                key={entry.name}
                                fill={
                                    CATEGORY_COLORS[entry.name] || "#94a3b8"
                                }
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        formatter={(value, name) => [
                            `${value} Tickets`,
                            name,
                        ]}
                    />

                    <Legend
                        verticalAlign="bottom"
                        iconType="circle"
                        wrapperStyle={{
                            paddingTop: 20,
                            fontSize: "14px",
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CategoryChart;