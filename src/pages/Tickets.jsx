import { useState } from "react";

import CreateTicketModal from "../components/tickets/CreateTicketModal";
import TicketTable from "../components/tickets/TicketTable";

function Tickets() {

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [category, setCategory] = useState("");

  const [page, setPage] = useState(1);

  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">

            Tickets

          </h1>

          <p className="text-gray-500">

            Manage your support tickets

          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          + New Ticket
        </button>

      </div>

      <div className="rounded-2xl bg-white p-8 shadow-sm">

        <div className="flex flex-wrap gap-4">

          <input

            type="text"

            placeholder="Search tickets..."

            value={search}

            onChange={(e) => {

              setSearch(e.target.value);

              setPage(1);

            }}

            className="w-72 rounded-xl border p-3"

          />

          <select

            value={status}

            onChange={(e) => {

              setStatus(e.target.value);

              setPage(1);

            }}

            className="rounded-xl border p-3"

          >

            <option value="">All Status</option>

            <option value="open">

              Open

            </option>

            <option value="in-progress">

              In Progress

            </option>

            <option value="closed">

              Closed

            </option>

          </select>

          <select

            value={category}

            onChange={(e) => {

              setCategory(e.target.value);

              setPage(1);

            }}

            className="rounded-xl border p-3"

          >

            <option value="">All Categories</option>

            <option>Billing</option>

            <option>Login Issue</option>

            <option>Technical Bug</option>

            <option>Refund</option>

            <option>Account Management</option>

            <option>Feature Request</option>

            <option>Other</option>

          </select>

        </div>



        <TicketTable

          search={search}

          status={status}

          category={category}

          page={page}

          setPage={setPage}

        />

      </div>

      <CreateTicketModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </div>

  );

}

export default Tickets;