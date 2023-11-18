export default function Filters(
  { filterSelected, onFilterChange }: {
    filterSelected: string;
    onFilterChange: (filter: string) => void;
  },
) {
  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={filterSelected === "all" ? "selected" : ""}
          onClick={() => onFilterChange("all")}
        >
          All
        </a>
      </li>
      <li>
        <a
          href="#/active"
          className={filterSelected === "active" ? "selected" : ""}
          onClick={() => onFilterChange("active")}
        >
          Active
        </a>
      </li>
      <li>
        <a
          href="#/completed"
          className={filterSelected === "completed" ? "selected" : ""}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </a>
      </li>
    </ul>
  );
}
