function FilterButton({ onClick, children }) {

  // selected filter button: bg:brand-red-500 dark:bg-brand-red-400 text-white

  return (
    <button
      onClick={onClick}
      className="py-2 px-4 text-xl inline-flex items-center justify-center text-brand-neutral-900 dark:text-brand-neutral-000 font-medium dark:bg-brand-neutral-700 border border-brand-neutral-300 dark:border-brand-neutral-600 rounded-full cursor-pointer hover:opacity-75 focus-visible:border-transparent focus-visible:outline-2 outline-offset-2 dark:focus-visible:bg-brand-neutral-600 focus-visible:outline-brand-red-500 dark:focus-visible:outline-brand-red-400 active:bg-brand-red-500 dark:active:bg-brand-red-700 active:border-brand-red-500 dark:active:border-brand-red-700 transition shadow-md">
      {children}
    </button>
  );
}

export default FilterButton;