import {
  Ticket,
  CircleDashed,
  CircleCheckBig,
  TriangleAlert,
} from "lucide-react";

import StatsCard from "./StatsCard";
import { useDashboard } from "../../hooks/useDashboard";

function StatsGrid() {
  const { data, isLoading, error } = useDashboard();

  if (error) {
    return (
      <div className="rounded-xl bg-red-100 p-4 text-red-600">
        Failed to load dashboard analytics.
      </div>
    );
  }

  const analytics = data?.data;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Total Tickets"
        value={analytics?.totalTickets ?? 0}
        icon={<Ticket size={24} />}
        color="blue"
        loading={isLoading}
      />

      <StatsCard
        title="Open Tickets"
        value={analytics?.openTickets ?? 0}
        icon={<CircleDashed size={24} />}
        color="yellow"
        loading={isLoading}
      />

      <StatsCard
        title="Closed Tickets"
        value={analytics?.closedTickets ?? 0}
        icon={<CircleCheckBig size={24} />}
        color="green"
        loading={isLoading}
      />

      <StatsCard
        title="Average Urgency"
        value={analytics?.averageUrgency ?? 0}
        icon={<TriangleAlert size={24} />}
        color="red"
        loading={isLoading}
      />

    </div>
  );
}

export default StatsGrid;