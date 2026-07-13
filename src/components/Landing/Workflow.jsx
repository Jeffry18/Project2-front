import {
  TicketPlus,
  Brain,
  Headset,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const workflow = [
  {
    icon: TicketPlus,
    title: "Create Ticket",
    description:
      "Users submit support requests with a subject and detailed description.",
    color: "bg-blue-100 text-blue-600",
  },

  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "AI automatically categorizes the ticket and predicts its urgency level.",
    color: "bg-purple-100 text-purple-600",
  },

  {
    icon: Headset,
    title: "Agent Resolution",
    description:
      "Support agents review the issue, update the status and provide a resolution.",
    color: "bg-orange-100 text-orange-600",
  },

  {
    icon: CheckCircle2,
    title: "Resolved",
    description:
      "Users receive the resolution while organizations track performance through analytics.",
    color: "bg-green-100 text-green-600",
  },
];

function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="font-semibold text-blue-600">
            WORKFLOW
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            From Support Request to Resolution
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Support Intelligence combines AI-powered analysis with
            structured workflows, helping organizations resolve
            customer issues faster and more efficiently.
          </p>

        </div>

        {/* Timeline */}

        <div className="grid gap-8 lg:grid-cols-4">

          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl bg-white p-8 text-center shadow-sm"
              >
                <div
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${step.color}`}
                >
                  <Icon size={36} />
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {step.description}
                </p>

                {/* Desktop Arrow */}

                {index < workflow.length - 1 && (
                  <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight
                      size={28}
                      className="text-blue-500"
                    />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Workflow;