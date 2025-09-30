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

    if (existingEntries.some((entry) => entry.date === date)) {
      alert("You already added an entry today. Try again tomorrow!");
      return;
    }

    onAdd({ title, date, image, content });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
    
      <div>
        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      </div>
      
      <div>
         <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      </div>
     
      <textarea
        placeholder="Write Something"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <div className="flex justify-end gap-2 mt-2">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default EntryForm;
