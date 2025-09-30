const EntryCard = ({ entry, onClick }) => {
  return (
    <div
      onClick={onClick}
    >
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-3">
        <h2 className="text-sm font-semibold">{entry.title}</h2>
        <p className="text-gray-500 text-xs">{entry.date}</p>
      </div>
    </div>
  );
};

export default EntryCard;
