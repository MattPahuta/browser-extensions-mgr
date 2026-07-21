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
  const [filter, setFilter] = useState("all"); // current filter state

  console.log(extensions);

  const visibleExtensions = extensions.filter(ext => {
    switch (filter) {
      case "active":
        return ext.isActive;
      case "inactive":
        return !ext.isActive;
      default:
        return true;
    }
  });

  function handleFilterChange(newFilter) {
    console.log("Filter changed to: ", newFilter)
    setFilter(newFilter);
  }

  function handleRemove(id) {
    console.log("Removing extension ID: ", id)
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.id !== parseInt(id))
    );
  }

  function handleToggle(id) {
    console.log("Toggling extension ID: ", id)
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.id === parseInt(id)
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  }

  return (
    <div className="py-5 px-4">
      <Header />
      <main className="max-w-6xl mx-auto">
        <ControlBar onFilterChange={handleFilterChange} />
        {/* extensions grid - will be ul with li's (cards) */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))]">
          {visibleExtensions.map((extension, index) => (
            <ExtensionCard
              key={index}
              extension={extension}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
