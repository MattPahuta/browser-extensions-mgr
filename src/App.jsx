import { useState } from "react";
import extenstionsData from "./data/data.json";

import Header from "./components/Header";
import ExtensionCard from "./components/ExtensionCard";

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
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <h2 className="mb-10 text-4xl text-brand-neutral-900 dark:text-brand-neutral-000 font-semibold">
            Extensions List
          </h2>
          <div>
            
          </div>
        </div>
        {/* extensions grid - will be ul with li's (cards) */}
        {/* <div className="grid gap-1 grid-cols-[repeat(auto-fit, minmax(min(340px,_100%),1fr))]"> */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))]">
          {extensions.map((extension, index) => (
            <ExtensionCard key={index} extension={extension} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
