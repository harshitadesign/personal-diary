import { useState } from "react";

function EntryForm({ onAdd, onClose, existingEntries }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !image || !content) {
      alert("All fields are required!");
      return;
    }

    // One entry per day check
    if (existingEntries.some((entry) => entry.date === date)) {
      alert("You already added an entry for this day. Try again tomorrow!");
      return;
    }

    onAdd({ title, date, image, content });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        className="border p-2 rounded"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <div className="flex justify-end gap-2 mt-2">
        <button type="button" onClick={onClose} className="px-3 py-1 border rounded">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
          Save
        </button>
      </div>
    </form>
  );
}

export default EntryForm;
