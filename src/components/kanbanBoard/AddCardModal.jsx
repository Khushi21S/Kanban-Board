import { useState } from "react";

const AddCardModal = ({ isOpen, onClose, onAdd, columnType }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onAdd(columnType, title, description);
    setTitle("");
    setDescription("");
    setError("");
    onClose();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (error) setError("");
  };

  const handleClose = () => {
        setTitle("");
    setDescription("");
    setError("");
    onClose();
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-96 rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Add Card
        </h2>

        {/* Title input */}
        <input
          className={`w-full px-3 py-2 text-sm rounded 
            bg-white text-gray-900 
            border ${error ? "border-red-500" : "border-gray-300"}
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-gray-800
            mb-1`}
          placeholder="Title *"
          value={title}
          onChange={handleTitleChange}
        />

        {error && (
          <p className="text-xs text-red-500 mb-3">{error}</p>
        )}

        {/* Description textarea */}
        <textarea
          className="w-full px-3 py-2 text-sm rounded 
            bg-white text-gray-900 
            border border-gray-300
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-gray-800
            mb-4"
          placeholder="Description (optional)"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            onClick={handleClose}
            className="text-sm px-3 py-1 rounded border border-gray-300 text-gray-700 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="text-sm px-4 py-1 rounded bg-gray-800 text-white cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
