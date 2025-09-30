function AddEntryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add Entry
    </button>
  );
}

export default AddEntryButton;
