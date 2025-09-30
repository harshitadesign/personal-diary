import EntryForm from "./EntryForm";

function AddEntryModal({ onClose, onAdd, existingEntries }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      
      {}
      <div >
        <h2 className="text-xl font-bold mb-4">New Diary Entry</h2>
        
        <EntryForm
          onAdd={onAdd}
          onClose={onClose}
          existingEntries={existingEntries}
        />
      </div>
    </div>
  );
}

export default AddEntryModal;

