import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";

function App() {
  // All diary entries
  const [entries, setEntries] = useState([]);
  // For viewing a single entry
  const [selectedEntry, setSelectedEntry] = useState(null);
  // Modal flags
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Load entries from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("entries")) || [];
    // Sort newest-first
    saved.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(saved);
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  // Add new entry
  const handleAddEntry = (entry) => {
    const updated = [entry, ...entries].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
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
