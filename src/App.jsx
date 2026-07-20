import { useState } from "react";
import extenstionsData from "./data/data.json";

import Header from "./components/Header";
import ControlBar from "./components/ControlBar";
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
      <main className="max-w-6xl mx-auto">
        <ControlBar />
        {/* extensions grid - will be ul with li's (cards) */}
        {/* <div className="grid gap-1 grid-cols-[repeat(auto-fit, minmax(min(340px,_100%),1fr))]"> */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))]">
          {extensions.map((extension, index) => (
            <ExtensionCard key={index} extension={extension} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
