import { Trash2 } from "lucide-react";

const KanbanCard = ({ id, title, description, onDeleteRequest }) => {
  return (
    <div className="bg-white rounded-md p-3 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-800 leading-snug text-left">
            {title}
          </p>

          {description && (
            <p className="text-xs text-gray-500">
              {description}
            </p>
          )}
        </div>

        <button
          onClick={() => onDeleteRequest(id)}
          className="text-gray-400 hover:text-red-500 cursor-pointer"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default KanbanCard;
