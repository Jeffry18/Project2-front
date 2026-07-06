import StatsGrid from "../components/dashboard/StatsGrid";
import RecentTickets from "../components/dashboard/RecentTickets";
import StatusChart from "../components/dashboard/StatusChart";
import CategoryChart from "../components/dashboard/CategoryChart";

function Dashboard() {
  return (
    <div className="space-y-8">

      <StatsGrid />

      <div className="grid gap-6 lg:grid-cols-2">

        <StatusChart />

        <CategoryChart />

      </div>

      <RecentTickets />

    </div>
  );
}

export default Dashboard;