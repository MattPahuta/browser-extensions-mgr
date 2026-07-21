function FilterButton({ isSelected, onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`py-2 px-5 text-xl inline-flex items-center justify-center ${isSelected ? "bg-brand-red-700 dark:bg-brand-red-400 border-brand-red-700 dark:border-brand-red-400 text-brand-neutral-000 dark:text-brand-neutral-900" : "text-brand-neutral-900 dark:text-brand-neutral-000 bg-brand-neutral-000 dark:bg-brand-neutral-700"} drop-shadow-sm border border-brand-neutral-200 dark:border-brand-neutral-600 rounded-full cursor-pointer hover:opacity-75 focus-visible:border-transparent focus-visible:outline-2 outline-offset-2 dark:focus-visible:bg-brand-neutral-600 focus-visible:outline-brand-red-500 dark:focus-visible:outline-brand-red-400 active:bg-brand-red-500 dark:active:bg-brand-red-700 active:border-brand-red-500 dark:active:border-brand-red-700 transition`}>
      {children}
    </button>
  );
}

export default FilterButton;