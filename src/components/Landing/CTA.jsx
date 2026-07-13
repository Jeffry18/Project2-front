import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-blue-600 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center text-white">

        <h2 className="text-4xl font-extrabold">

          Ready to Transform Your Customer Support?

        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">

          Empower your organization with AI-powered ticket
          classification, intelligent workflows and secure
          multi-tenant collaboration.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105 hover:bg-slate-100"
          >
            Get Started

            <ArrowRight size={18} />

          </Link>

          <a
            href="#features"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-600"
          >
            Learn More
          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;