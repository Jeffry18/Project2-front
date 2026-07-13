import { Pencil } from "lucide-react";
import ActiveToggle from "./ActiveToggle";

function MemberRow({
    member,
    onEdit,
}) {
    return (
        <tr className="border-t hover:bg-slate-50">

            {/* Name */}

            <td className="px-5 py-4">
                {member.name}
            </td>

            {/* Email */}

            <td className="px-5 py-4">
                {member.email}
            </td>

            {/* Status */}

            <td className="px-5 py-4">

                {member.isActive ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        Active
                    </span>
                ) : (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                        Inactive
                    </span>
                )}

            </td>

            {/* Toggle */}

            <td className="px-5 py-4 text-center">

                <ActiveToggle
                    id={member._id}
                    isActive={member.isActive}
                />

            </td>

            {/* Edit */}

            <td className="px-5 py-4 text-center">

                <button
                    onClick={() => onEdit(member)}
                    className="rounded-lg p-2 transition hover:bg-slate-100"
                >
                    <Pencil size={18} />
                </button>

            </td>

        </tr>
    );
}

export default MemberRow;