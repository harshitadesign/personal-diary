function EntryDetails({ entry }) {
  return (
    <div>
      <img
        src={entry.image}
        alt={entry.title}
        className="w-48 h-48 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-2">{entry.title}</h2>
      <p className="text-sm text-gray-500">{entry.date}</p>
      <p className="mt-4 whitespace-pre-line">{entry.content}</p>
    </div>
  );
}

export default EntryDetails;
