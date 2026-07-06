function StatusBadge({ status }) {

    const styles = {
        open:
            "bg-yellow-100 text-yellow-700",

        "in-progress":
            "bg-blue-100 text-blue-700",

        closed:
            "bg-green-100 text-green-700"
    };

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
        >

            {status}

        </span>

    );

}

export default StatusBadge;