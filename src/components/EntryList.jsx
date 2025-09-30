import EntryCard from "./EntryCard";

function EntryList({ entries, onSelect }) {
  if (entries.length === 0) {
    return <p className="text-gray-600">No entries yet. Add one!</p>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {entries.map((entry) => (
        <EntryCard
          key={entry.date}
          entry={entry}
          onClick={() => onSelect(entry)}
        />
      ))}
    </div>
  );
}



export default EntryList;
