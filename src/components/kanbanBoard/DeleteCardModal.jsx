// DeleteCardModal.jsx
const DeleteCardModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-96 rounded-lg p-5">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Delete Card
        </h2>

        <p className="text-sm text-gray-600 mb-5">
          Are you sure you want to delete this card? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 text-sm rounded border border-gray-300 text-gray-700 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-3 py-1 text-sm rounded bg-red-600 text-white cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCardModal;
