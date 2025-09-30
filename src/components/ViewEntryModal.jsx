import EntryDetails from "./EntryDetails";

function ViewEntryModal({ entry, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg p-6 w-96">
        <EntryDetails entry={entry} />
        <div className="text-right mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewEntryModal;
