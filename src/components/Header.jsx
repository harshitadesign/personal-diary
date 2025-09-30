import AddEntryButton from "./AddEntryButton";

function Header({ onAddClick }) {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Personal Diary</h1>
      <AddEntryButton onClick={onAddClick} />
    </header>
  );
}

export default Header;
