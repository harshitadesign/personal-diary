import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("entries")) || [];
  }, []);
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (entry) => {
    const updated = [entry, ...entries].sort((a, b) => new Date(b.date) - new Date(a.date) );
    setEntries(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header onAddClick={() => setIsAddModalOpen(true)} />

      {/* Main content */}
      <main className="p-6">
        <EntryList
          entries={entries}
          onSelect={(entry) => {
            setSelectedEntry(entry);
            setIsViewModalOpen(true);
          }}
        />
      </main>

      {/* Add Entry Modal */}
      {isAddModalOpen && (
        <AddEntryModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddEntry}
          existingEntries={entries}
        />
      )}

      {/* View Entry Modal */}
      {isViewModalOpen && selectedEntry && (
        <ViewEntryModal
          entry={selectedEntry}
          onClose={() => setIsViewModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
