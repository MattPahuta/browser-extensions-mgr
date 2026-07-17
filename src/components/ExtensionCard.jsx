import { icons } from "../data/icons";

function ExtensionCard({ extension }) {

  return (
    <div
      className="min-h-50 p-5 flex flex-col bg-brand-neutral-000 rounded-xl shadow-md">
      {/* extension info */}
      <div className="flex gap-4">
        {/* icon image 60x60px */}
        <img src={icons[extension.logo]} alt="" className="size-15 object-cover" />
        <div>
          <h3 className="mb-1 text-xl font-bold text-brand-neutral-900">{extension.name}</h3>
          <p className="text-brand-neutral-600">{extension.description}</p>
        </div>
      </div>
      {/* extension actions */}
      <div className="mt-auto flex items-center justify-between">
        <button className="py-2 px-4 inline-flex items-center justify-center text-brand-neutral-900 font-medium border border-brand-neutral-300 rounded-full">Remove</button>
        <label htmlFor=""></label>
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}

export default ExtensionCard;