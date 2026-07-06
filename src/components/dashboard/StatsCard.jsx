import React from "react";

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  yellow: "bg-yellow-100 text-yellow-600",
};

function StatsCard({
  title,
  value,
  icon,
  color = "blue",
  loading = false,
}) {
  if (loading) {
    return (
      <div className="animate-pulse rounded-2xl bg-white p-6 shadow-sm">
        <div className="h-4 w-28 rounded bg-slate-200"></div>
        <div className="mt-5 h-8 w-20 rounded bg-slate-200"></div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800">
            {value}
          </h2>

        </div>

        <div className={`rounded-xl p-3 ${colorClasses[color]}`}>
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatsCard;