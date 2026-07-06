function UrgencyBadge({ score }) {

    let style =
        "bg-green-100 text-green-700";

    if (score >= 80) {

        style =
            "bg-red-100 text-red-700";

    }

    else if (score >= 50) {

        style =
            "bg-orange-100 text-orange-700";

    }

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${style}`}
        >

            {score}

        </span>

    );

}

export default UrgencyBadge;