import {
  Brain,
  TriangleAlert,
  Building2,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Ticket Categorization",
    description:
      "Automatically classifies tickets using AI to reduce manual triage and improve support efficiency.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },

  {
    icon: TriangleAlert,
    title: "Smart Prioritization",
    description:
      "AI evaluates urgency so support teams can focus on the most important issues first.",
    color: "text-red-600",
    bg: "bg-red-100",
  },

  {
    icon: Building2,
    title: "Multi-Tenant Platform",
    description:
      "Securely isolates organizations while allowing each company to manage its own workspace.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },

  {
    icon: Users,
    title: "Role-Based Access",
    description:
      "Separate experiences for Admins, Agents and Users with organization-level permissions.",
    color: "text-green-600",
    bg: "bg-green-100",
  },

  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track ticket activity, monitor support performance and visualize organization metrics.",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },

  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT authentication with protected routes ensures secure access across the platform.",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="font-semibold text-blue-600">

            FEATURES

          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">

            Everything You Need for
            Modern Customer Support

          </h2>

          <p className="mt-6 text-lg text-slate-600">

            Support Intelligence combines artificial
            intelligence, secure multi-tenancy,
            workflow automation and analytics into
            one unified helpdesk platform.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`mb-6 inline-flex rounded-2xl p-4 ${feature.bg}`}
                >
                  <Icon
                    size={30}
                    className={feature.color}
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold">

                  {feature.title}

                </h3>

                <p className="leading-7 text-slate-600">

                  {feature.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;