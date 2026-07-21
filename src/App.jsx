import { useState } from "react";
import extenstionsData from "./data/data.json";
import Header from "./components/Header";
import ControlBar from "./components/ControlBar";
import ExtensionCard from "./components/ExtensionCard";


function App() {
  const [extensions, setExtensions] = useState(extenstionsData); // primary data (source of truth)
  const [filter, setFilter] = useState("all"); // current filter state


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
    setFilter(newFilter);
  }

  function handleRemove(id) {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.id !== parseInt(id))
    );
  }

  function handleToggle(id) {
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
        <ControlBar filter={filter} onFilterChange={handleFilterChange} />
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
