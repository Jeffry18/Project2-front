import {
  useActivateUser,
  useDeactivateUser,
} from "../../hooks/useUsers";

function ActiveToggle({ id, isActive }) {
  const activateMutation = useActivateUser();

  const deactivateMutation = useDeactivateUser();

  const loading =
    activateMutation.isPending ||
    deactivateMutation.isPending;

  const handleToggle = () => {
    if (loading) return;

    if (isActive) {
      deactivateMutation.mutate(id);
    } else {
      activateMutation.mutate(id);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 ${
        isActive
          ? "bg-green-500"
          : "bg-gray-300"
      } ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-300 ${
          isActive
            ? "translate-x-8"
            : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default ActiveToggle;