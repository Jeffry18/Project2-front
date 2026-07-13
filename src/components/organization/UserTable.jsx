import MemberRow from "./MemberRow";

function UserTable({
  users,
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  onAdd,
  onEdit,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold">
            Users ({users.length})
          </h2>

          <p className="text-sm text-gray-500">
            Manage organization users.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          + Add User
        </button>

      </div>

      {/* Filters */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row">

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-xl border p-3 focus:border-blue-500 focus:outline-none"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl border p-3 focus:border-blue-500 focus:outline-none"
        >
          <option value="all">
            All Status
          </option>

          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>

        </select>

      </div>

      {/* Table */}

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

            {users.length === 0 ? (
              <tr>

                <td
                  colSpan={5}
                  className="py-8 text-center text-gray-500"
                >
                  No users found.
                </td>

              </tr>
            ) : (
              users.map((user) => (
                <MemberRow
                  key={user._id}
                  member={user}
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

export default UserTable;