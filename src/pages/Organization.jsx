import { useMemo, useState } from "react";

import { useUsers } from "../hooks/useUsers";

import AgentTable from "../components/organization/AgentTable";
import UserTable from "../components/organization/UserTable";

import AddMemberModal from "../components/organization/AddMemberModal";
import EditMemberModal from "../components/organization/EditMemberModal";

function Organization() {
  const { data, isLoading, error } = useUsers();

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("all");

  const [addOpen, setAddOpen] = useState(false);

  const [memberRole, setMemberRole] = useState("user");

  const [editOpen, setEditOpen] = useState(false);

  const [selectedMember, setSelectedMember] = useState(null);

  const members = data?.data || [];

  const agents = useMemo(() => {
    return members.filter((member) => member.role === "agent");
  }, [members]);

  const users = useMemo(() => {
    let filtered = members.filter(
      (member) => member.role === "user"
    );

    if (search.trim()) {
      const keyword = search.toLowerCase();

      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(keyword) ||
          user.email.toLowerCase().includes(keyword)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (user) =>
          user.isActive === (statusFilter === "active")
      );
    }

    return filtered;
  }, [members, search, statusFilter]);

  if (isLoading) {
    return (
      <div className="rounded-xl bg-white p-8">
        Loading organization...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-red-100 p-8 text-red-600">
        Failed to load organization.
      </div>
    );
  }

  return (
    <>
      <div className="space-y-10">

        <div>
          <h1 className="text-3xl font-bold">
            Organization Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage agents and users.
          </p>
        </div>

        <AgentTable
          agents={agents}
          onAdd={() => {
            setMemberRole("agent");
            setAddOpen(true);
          }}
          onEdit={(member) => {
            setSelectedMember(member);
            setEditOpen(true);
          }}
        />

        <UserTable
          users={users}
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          onAdd={() => {
            setMemberRole("user");
            setAddOpen(true);
          }}
          onEdit={(member) => {
            setSelectedMember(member);
            setEditOpen(true);
          }}
        />

      </div>

      <AddMemberModal
        isOpen={addOpen}
        role={memberRole}
        onClose={() => setAddOpen(false)}
      />

      <EditMemberModal
        isOpen={editOpen}
        member={selectedMember}
        onClose={() => {
          setEditOpen(false);
          setSelectedMember(null);
        }}
      />
    </>
  );
}

export default Organization;