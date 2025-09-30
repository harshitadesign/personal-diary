import EntryForm from "./EntryForm";

function AddEntryModal({ onClose, onAdd, existingEntries }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">New Diary Entry</h2>
        <EntryForm onAdd={onAdd} onClose={onClose} existingEntries={existingEntries} />
      </div>
    </div>
  );
}

export default AddEntryModal;
