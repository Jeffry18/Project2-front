import MemberRow from "./MemberRow";

function AgentTable({
  agents,
  onAdd,
  onEdit,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Agents ({agents.length})
          </h2>

          <p className="text-sm text-gray-500">
            Manage support agents.
          </p>

        </div>

        <button
          onClick={onAdd}
          className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          + Add Agent
        </button>

      </div>

      <div className="overflow-hidden rounded-xl border">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-5 py-3 text-left">
                Name
              </th>

              <th className="px-5 py-3 text-left">
                Email
              </th>

              <th className="px-5 py-3 text-left">
                Status
              </th>

              <th className="px-5 py-3 text-center">
                Active
              </th>

              <th className="px-5 py-3 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {agents.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-8 text-center text-gray-500"
                >
                  No agents found.
                </td>

              </tr>

            ) : (

              agents.map((agent) => (

                <MemberRow
                  key={agent._id}
                  member={agent}
                  onEdit={onEdit}
                />

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AgentTable;