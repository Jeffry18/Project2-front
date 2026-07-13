import {
  Bot,
  Globe,
  ExternalLink,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t bg-slate-900 py-14 text-slate-300">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">

        {/* Brand */}

        <div>

          <div className="mb-4 flex items-center gap-3">

            <div className="rounded-xl bg-blue-600 p-2">

              <Bot
                size={24}
                className="text-white"
              />

            </div>

            <div>

              <h3 className="font-bold text-white">

                Support Intelligence

              </h3>

              <p className="text-sm text-slate-400">

                AI Helpdesk Platform

              </p>

            </div>

          </div>

          <p className="leading-7 text-slate-400">

            A modern AI-powered multi-tenant helpdesk
            platform built with the MERN stack,
            designed to streamline customer support
            workflows.

          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h4 className="mb-5 font-semibold text-white">

            Quick Links

          </h4>

          <ul className="space-y-3">

            <li>

              <a
                href="#features"
                className="hover:text-white"
              >
                Features
              </a>

            </li>

            <li>

              <a
                href="#workflow"
                className="hover:text-white"
              >
                Workflow
              </a>

            </li>

            <li>

              <a
                href="/login"
                className="hover:text-white"
              >
                Login
              </a>

            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h4 className="mb-5 font-semibold text-white">

            Connect

          </h4>

          <div className="space-y-4">

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white"
            >
              <Globe size={18} />

              GitHub

            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINK"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white"
            >
              <ExternalLink size={18} />

              LinkedIn

            </a>

            <a
              href="mailto:YOUR_EMAIL"
              className="flex items-center gap-3 hover:text-white"
            >
              <Mail size={18} />

              Contact

            </a>

          </div>

        </div>

      </div>

      <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">

        © {new Date().getFullYear()} Support Intelligence.
        All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;