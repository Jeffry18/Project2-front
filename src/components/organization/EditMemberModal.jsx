import MemberForm from "./MemberForm";

function EditMemberModal({
  isOpen,
  onClose,
 member,
}) {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-semibold">
            Edit Member
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-700"
          >
            ×
          </button>

        </div>

        <MemberForm
          mode="edit"
          member={member}
          onSuccess={onClose}
        />

      </div>

    </div>
  );
}

export default EditMemberModal;