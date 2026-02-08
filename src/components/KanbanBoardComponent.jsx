import { useState } from "react";
import KanbanColumn from "./kanbanBoard/KanbanColumn";
import AddCardModal from "./kanbanBoard/AddCardModal";
import { KANBAN_COLUMNS } from "../utils/data";
import { useKanban } from "../contexts/KanbanContext";
import DeleteCardModal from "./kanbanBoard/DeleteCardModal";

const KanbanBoardComponent = () => {
  const { cards, setCards } = useKanban();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const addCard = (columnId, title, description = "") => {
    const newCard = {
      id: crypto.randomUUID(),
      columnId,
      title,
      description,
    };

    setCards((prev) => [...prev, newCard]);
  };

  const requestDeleteCard = (cardId) => {
    setCardToDelete(cardId);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteCard = () => {
    setCards((prev) => prev.filter((card) => card.id !== cardToDelete));
    setIsDeleteModalOpen(false);
    setCardToDelete(null);
    console.log(cards);
  };

  return (
    <>
      <div className="flex gap-6 p-6 h-[90vh]">
        {KANBAN_COLUMNS.map((column) => {
          const filteredCards = cards.filter(
            (card) => card.columnId === column.id,
          );

          return (
            <KanbanColumn
              key={column.id}
              title={column.title}
              headerColor={column.headerColor}
              cardData={filteredCards}
              columnType={column.id}
              onDeleteRequest={requestDeleteCard}
              onAddCard={(colId) => {
                setActiveColumn(colId);
                setIsModalOpen(true);
              }}
            />
          );
        })}
      </div>
      <AddCardModal
        isOpen={isModalOpen}
        columnType={activeColumn}
        onClose={() => setIsModalOpen(false)}
        onAdd={addCard}
      />
      <DeleteCardModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setCardToDelete(null);
        }}
        onConfirm={confirmDeleteCard}
      />
    </>
  );
};

export default KanbanBoardComponent;
