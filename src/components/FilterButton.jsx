function FilterButton({ children }) {

  // selected filter button: bg:brand-red-500 dark:bg-brand-red-400 text-white

  return (
    <button
      onClick={() => console.log("Filter button clicked")}
      className="py-2 px-4 inline-flex items-center justify-center text-brand-neutral-900 dark:text-brand-neutral-000 font-medium border border-brand-neutral-300 dark:border-brand-neutral-600 rounded-full cursor-pointer hover:text-brand-neutral-000 dark:hover:text-brand-neutral-900 hover:bg-brand-red-500 dark:hover:bg-brand-red-400 hover:border-brand-red-500 dark:hover:border-brand-red-400 focus-visible:outline-2 outline-offset-2 focus-visible:outline-brand-red-700 dark:focus-visible:outline-brand-red-400 active:bg-brand-red-500 dark:active:bg-brand-red-700 active:border-brand-red-500 dark:active:border-brand-red-700 transition">
      {children}
    </button>
  );
}

export default FilterButton;