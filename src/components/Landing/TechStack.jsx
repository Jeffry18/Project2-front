import {
  Database,
  Server,
  Atom,
  Bot,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    name: "React",
    icon: Atom,
    color: "text-cyan-600",
    bg: "bg-cyan-100",
  },

  {
    name: "Node.js",
    icon: Server,
    color: "text-green-600",
    bg: "bg-green-100",
  },

  {
    name: "MongoDB",
    icon: Database,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },

  {
    name: "Gemini AI",
    icon: Bot,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },

  {
    name: "JWT Auth",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },

  {
    name: "Tailwind CSS",
    icon: Atom,
    color: "text-sky-600",
    bg: "bg-sky-100",
  },

  {
    name: "TanStack Query",
    icon: Database,
    color: "text-red-600",
    bg: "bg-red-100",
  },

  {
    name: "Express",
    icon: Server,
    color: "text-slate-700",
    bg: "bg-slate-200",
  },
];

function TechStack() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold text-blue-600">

            TECHNOLOGY STACK

          </p>

          <h2 className="mt-4 text-4xl font-bold">

            Built with Modern Technologies

          </h2>

          <p className="mt-6 text-lg text-slate-600">

            Support Intelligence combines the MERN stack
            with AI-powered automation to deliver a modern
            customer support platform.

          </p>

        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {technologies.map((tech) => {

            const Icon = tech.icon;

            return (

              <div
                key={tech.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className={`mb-4 inline-flex rounded-xl p-3 ${tech.bg}`}>

                  <Icon
                    size={28}
                    className={tech.color}
                  />

                </div>

                <h3 className="font-semibold">

                  {tech.name}

                </h3>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default TechStack;