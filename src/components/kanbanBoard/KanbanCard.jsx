import { Trash2 } from "lucide-react";

const KanbanCard = ({ id, title, description, onDeleteRequest }) => {
  return (
    <div
      draggable="true"
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", id);
        e.dataTransfer.effectAllowed = "move";
      }}
      className="bg-white rounded-md p-3 shadow-sm border border-gray-200 cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-start justify-between gap-2">
        {/* Text content (drag-friendly) */}
        <div className="pointer-events-none">
          <p className="text-sm font-medium text-gray-800 leading-snug text-left">
            {title}
          </p>

          {description && (
            <p className="text-xs text-gray-500 mt-1 text-left">
              {description}
            </p>
          )}
        </div>

        {/* Delete button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDeleteRequest(id);
          }}
          className="pointer-events-auto text-gray-400 hover:text-red-500"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default KanbanCard;
