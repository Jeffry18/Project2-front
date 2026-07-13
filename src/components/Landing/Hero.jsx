import {
  ArrowRight,
  Bot,
  Ticket,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">

        {/* Left */}

        <div className="flex-1">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">

            <Bot size={18} />

            AI Powered Helpdesk Platform

          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900">

            Smarter Customer Support

            <span className="block text-blue-600">

              Powered by AI

            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">

            Manage support tickets with AI-powered categorization,
            intelligent urgency detection, role-based workflows,
            and organization-level management.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/register"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Organization

              <ArrowRight size={18} />

            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-slate-300 px-7 py-4 font-semibold hover:bg-slate-100"
            >
              Login
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-slate-300 px-7 py-4 font-semibold transition hover:bg-slate-100"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">

          <div className="space-y-6">

            {/* Card 1 */}

            <div className="w-80 rounded-2xl bg-white p-5 shadow-xl">

              <div className="mb-3 flex items-center gap-3">

                <Ticket className="text-blue-600" />

                <div>

                  <h3 className="font-semibold">

                    Ticket Created

                  </h3>

                  <p className="text-sm text-gray-500">

                    Payment failed

                  </p>

                </div>

              </div>

              <div className="rounded-xl bg-green-100 px-3 py-2 text-sm font-medium text-green-700">

                ✓ AI Analysis Completed

              </div>

            </div>

            {/* Card 2 */}

            <div className="ml-10 w-80 rounded-2xl bg-white p-5 shadow-xl">

              <div className="mb-3 flex items-center gap-3">

                <Clock3 className="text-orange-500" />

                <div>

                  <h3 className="font-semibold">

                    In Progress

                  </h3>

                  <p className="text-sm text-gray-500">

                    Assigned to Support Agent

                  </p>

                </div>

              </div>

            </div>

            {/* Card 3 */}

            <div className="w-80 rounded-2xl bg-white p-5 shadow-xl">

              <div className="mb-3 flex items-center gap-3">

                <CheckCircle2 className="text-green-600" />

                <div>

                  <h3 className="font-semibold">

                    Issue Resolved

                  </h3>

                  <p className="text-sm text-gray-500">

                    Customer notified

                  </p>

                </div>

              </div>

              <div className="rounded-xl bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700">

                Resolution Delivered

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;