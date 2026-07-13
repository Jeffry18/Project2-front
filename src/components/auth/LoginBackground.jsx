import {
  LayoutDashboard,
  Ticket,
  Clock3,
  CheckCircle2,
  TriangleAlert,
  Users,
} from "lucide-react";

function Card({ title, value, icon, color }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">

            {title}

          </p>

          <h2 className="mt-2 text-3xl font-bold">

            {value}

          </h2>

        </div>

        <div className={`rounded-xl p-3 ${color}`}>

          {icon}

        </div>

      </div>

    </div>
  );
}

function LoginBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Dashboard */}

      <div className="scale-110 p-12">

        {/* Header */}

        <div className="mb-10 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-blue-600 p-3">

              <LayoutDashboard className="text-white" />

            </div>

            <div>

              <h2 className="font-bold text-slate-800">

                Dashboard

              </h2>

              <p className="text-slate-500">

                Support Intelligence

              </p>

            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-4 gap-6">

          <Card
            title="Open"
            value="18"
            color="bg-blue-100 text-blue-600"
            icon={<Ticket size={22} />}
          />

          <Card
            title="In Progress"
            value="7"
            color="bg-orange-100 text-orange-600"
            icon={<Clock3 size={22} />}
          />

          <Card
            title="Closed"
            value="52"
            color="bg-green-100 text-green-600"
            icon={<CheckCircle2 size={22} />}
          />

          <Card
            title="Critical"
            value="3"
            color="bg-red-100 text-red-600"
            icon={<TriangleAlert size={22} />}
          />

        </div>

        {/* Fake Table */}

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg">

          <h3 className="mb-6 text-xl font-bold">

            Recent Tickets

          </h3>

          {[1,2,3,4,5].map((row)=>(
            <div
              key={row}
              className="mb-4 flex items-center justify-between border-b pb-4 last:border-none"
            >
              <div>

                <div className="mb-2 h-4 w-48 rounded bg-slate-200" />

                <div className="h-3 w-28 rounded bg-slate-100" />

              </div>

              <Users className="text-slate-300"/>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default LoginBackground;