import FilterButton from "./FilterButton";

function ControlBar({ filter, onFilterChange}) {

  const filterOptions = ["all", "active", "inactive"];

  return (
    <div className="mb-10 sm:mb-8 flex flex-col gap-6 sm:flex-row items-center sm:justify-between">
      <h2 className="text-4xl text-brand-neutral-900 dark:text-brand-neutral-000 font-bold tracking-tight">
        Extensions List
      </h2>
      <div role="group" aria-label="Filter extensions" className="flex gap-3">
        {filterOptions.map((option) => (
          <FilterButton
            key={option}
            isSelected={filter === option}
            onClick={() => onFilterChange(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </FilterButton>
        ))}
      </div>
    </div>
  );
}

export default ControlBar;