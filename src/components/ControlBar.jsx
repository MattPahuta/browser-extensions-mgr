import FilterButton from "./FilterButton";

function ControlBar({ onFilterChange}) {
  return (
    <div className="mb-10 sm:mb-8 flex flex-col gap-6 sm:flex-row items-center sm:justify-between">
      <h2 className="text-4xl text-brand-neutral-900 dark:text-brand-neutral-000 font-semibold">
        Extensions List
      </h2>
      <div className="flex gap-3">
        <FilterButton onClick={() => onFilterChange("all")}>All</FilterButton>
        <FilterButton onClick={() => onFilterChange("active")}>Active</FilterButton>
        <FilterButton onClick={() => onFilterChange("inactive")}>Inactive</FilterButton>
      </div>
    </div>
  );
}

export default ControlBar;