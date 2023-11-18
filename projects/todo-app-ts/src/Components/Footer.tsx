import Filters from "./Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: string;
  clearCompleted: () => void;
  handleFilterChange: (filter: string) => void;
}

export default function Footer(
  {
    activeCount,
    completedCount,
    filterSelected,
    clearCompleted,
    handleFilterChange,
  }: Props,
) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> items left
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
