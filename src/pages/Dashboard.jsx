import {
  Ticket,
  Clock3,
  CheckCircle2,
  Users,
  UserCog,
  TriangleAlert,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { useDashboard } from "../hooks/useDashboard";

import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardRecentTickets from "../components/dashboard/DashboardRecentTickets";

function Dashboard() {
  const { isAdmin, isAgent, isUser } = useAuth();

  const {
    data,
    isLoading,
    error,
  } = useDashboard();

  if (isLoading) {
    return (
      <div className="p-8">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-600">
        Failed to load dashboard.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {isAdmin && (
          <>
            <DashboardCard
              title="Open Tickets"
              value={data.openTickets}
              icon={<Ticket size={24} />}
              color="blue"
            />

            <DashboardCard
              title="In Progress"
              value={data.inProgressTickets}
              icon={<Clock3 size={24} />}
              color="orange"
            />

            <DashboardCard
              title="Closed"
              value={data.closedTickets}
              icon={<CheckCircle2 size={24} />}
              color="green"
            />

            <DashboardCard
              title="Agents"
              value={data.agents}
              icon={<UserCog size={24} />}
              color="purple"
            />

            <DashboardCard
              title="Users"
              value={data.users}
              icon={<Users size={24} />}
              color="blue"
            />

            <DashboardCard
              title="High Urgency"
              value={data.highUrgencyTickets}
              icon={<TriangleAlert size={24} />}
              color="red"
            />
          </>
        )}

        {isAgent && (
          <>
            <DashboardCard
              title="Open Tickets"
              value={data.openTickets}
              icon={<Ticket size={24} />}
              color="blue"
            />

            <DashboardCard
              title="In Progress"
              value={data.inProgressTickets}
              icon={<Clock3 size={24} />}
              color="orange"
            />

            <DashboardCard
              title="Closed Today"
              value={data.closedToday}
              icon={<CheckCircle2 size={24} />}
              color="green"
            />
          </>
        )}

        {isUser && (
          <>
            <DashboardCard
              title="My Open Tickets"
              value={data.myOpenTickets}
              icon={<Ticket size={24} />}
              color="blue"
            />

            <DashboardCard
              title="My Closed Tickets"
              value={data.myClosedTickets}
              icon={<CheckCircle2 size={24} />}
              color="green"
            />
          </>
        )}

      </div>

      {/* Recent Tickets */}

      <DashboardRecentTickets
        tickets={data.recentTickets}
        showCreator={!isUser}
      />

    </div>
  );
}

export default Dashboard;