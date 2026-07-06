function CategoryBadge({ category }) {

    return (

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">

            {category || "Other"}

        </span>

    );

}

export default CategoryBadge;