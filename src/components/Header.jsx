import AddEntryButton from "./AddEntryButton";

function Header({ onAddClick }) {
  return (
    <header className="text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">My Diary</h1>
      <button
        onClick={onAddClick}
        className="px-3 py-1 rounded shadow"
      >
        Add Entry
      </button>
    </header>
  );
}


export default Header;
