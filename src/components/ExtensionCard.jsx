import { icons } from "../data/icons";

function ExtensionCard({ extension }) {

  return (
    <div className="min-h-50 p-5 flex flex-col bg-brand-neutral-000 dark:bg-brand-neutral-800 rounded-[20px] shadow-md dark:border dark:border-brand-neutral-600">
      {/* extension info */}
      <div className="flex gap-4">
        {/* icon image 60x60px */}
        <img
          src={icons[extension.logo]}
          alt=""
          className="size-15 object-cover"
        />
        <div>
          <h3 className="mb-1 text-xl font-bold text-brand-neutral-900 dark:text-brand-neutral-000">
            {extension.name}
          </h3>
          <p className="text-brand-neutral-600 dark:text-brand-neutral-300">
            {extension.description}
          </p>
        </div>
      </div>
      {/* extension actions */}
      <div className="mt-auto flex items-center justify-between">
        <button onClick={() => console.log('Remove button clicked')} className="py-2 px-4 inline-flex items-center justify-center text-brand-neutral-900 dark:text-brand-neutral-000 font-medium border border-brand-neutral-300 dark:border-brand-neutral-600 rounded-full cursor-pointer hover:text-brand-neutral-000 dark:hover:text-brand-neutral-900 hover:bg-brand-red-700 dark:hover:bg-brand-red-400 hover:border-brand-red-700 dark:hover:border-brand-red-400 focus-visible:outline-2 outline-offset-2 focus-visible:outline-brand-red-700 dark:focus-visible:outline-brand-red-400 active:bg-brand-red-500 dark:active:bg-brand-red-700 active:border-brand-red-500 dark:active:border-brand-red-700 transition">
          Remove
        </button>
        <label
          htmlFor=""
          className="switch relative inline-block w-9 h-5">
          <input
            type="checkbox"
            name=""
            id=""
            className="opacity-0 w-0 h-0"
          />
          <span className="slider round absolute inset-0 rounded-full bg-brand-neutral-300 dark:bg-brand-neutral-600 before:absolute before:content-[''] before:size-4 before:bg-brand-neutral-000 before:rounded-full before:left-0.5 before:top-0.5 cursor-pointer transition"></span>
        </label>
      </div>
    </div>
  );
}

export default ExtensionCard;