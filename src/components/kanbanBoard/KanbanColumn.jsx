import KanbanCard from "./KanbanCard";
const KanbanColumn = ({ title, headerColor, cardData, columnType, onAddCard, onDeleteRequest }) => {
    const count = cardData.length;
  return (
    <div className="flex flex-col flex-1 bg-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div
        className={`px-4 py-3 text-white font-semibold flex items-center gap-2 ${headerColor}`}
      >
        <span>{title}</span>
        <span className="text-sm font-normal opacity-80">
          ({count})
        </span>
      </div>

      <div className="flex items-start justify-start gap-2 p-3">
        <button onClick={() => onAddCard(columnType)} className="text-sm px-4 py-1 rounded bg-gray-800 text-white cursor-pointer">+ Add card</button>
      </div>

      <div className="flex-1 p-4 space-y-3">
        {cardData.map((card) => (
          <KanbanCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            onDeleteRequest={onDeleteRequest}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
