import { useState } from "react";
import extenstionsData from "./data/data.json";

import Header from "./components/Header";

// App-level state responsibilities (kept here so it can be passed down to cards & filters):
// - extensions: array of extension objects loaded from local JSON (id, name, enabled, ...)
// - filter: which filter is active: 'all' | 'active' | 'inactive'
// Each ExtensionCard should be a presentational component that receives its extension data
// and two callbacks: onToggleEnabled(id) and onRemove(id).

function App() {
  const [extensions, setExtensions] = useState(extenstionsData); // primary data (source of truth)

  console.log(extensions);

  return (
    <div className="py-5 px-4">
      <Header />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-brand-neutral-900 dark:text-brand-neutral-000 font-semibold">
          Extensions List
        </h2>
        {/* extensions grid - will be ul with li's (cards) */}
        {/* <div className="grid gap-1 grid-cols-[repeat(auto-fit, minmax(min(340px,_100%),1fr))]"> */}
        <div className="grid gap-1 grid-cols-3">
          {extensions.map((extension, index) => (
            <div
              key={index}
              className="p-4 flex flex-col gap-1 bg-brand-neutral-000 rounded-xl">
              {/* card content */}
              <div className="grid">
                <img src={extension.logo} alt="" />
                <div>
                  <h3>{extension.name}</h3>
                  <p className="">{extension.description}</p>
                </div>
              </div>
              {/* controls */}
              <div className="flex items-center justify-between">
                <button>Remove</button>
                <label htmlFor=""></label>
                <input type="checkbox" name="" id="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
