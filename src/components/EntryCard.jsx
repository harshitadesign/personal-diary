function EntryCard({ entry, onClick }) {
  return (
    <div
      className="bg-white rounded shadow cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <img
        src={entry.image}
        alt={entry.title}
        className="w-full h-40 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-bold">{entry.title}</h3>
        <p className="text-sm text-gray-500">{entry.date}</p>
      </div>
    </div>
  );
}

export default EntryCard;
