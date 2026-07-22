function Switch({ checked, label, onClick }) {
  return (
    <button
      type="button"
      data-action="aria-switch"
      role="switch"
      aria-label={label}
      aria-checked={checked}
      onClick={onClick}
      className={`relative inline-flex items-center h-5 rounded-full w-9 overflow-hidden cursor-pointer ${checked ? "bg-brand-red-700 dark:bg-brand-red-400" : "bg-brand-neutral-300 dark:bg-brand-neutral-600"} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-500 dark:focus-visible:outline-brand-red-400 transition-colors duration-200`}>
      <span
        className={`absolute inline-block size-4 bg-white rounded-full pointer-events-none ${checked ? "translate-x-4.5" : "translate-x-0.5"} transition-transform duration-200`}></span>
    </button>
  );
}

export default Switch;
