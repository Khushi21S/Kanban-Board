
import { useEffect, useState } from "react";
import KanbanContext from "./kanbanContext";
import { cardData } from "../utils/data";

export const KanbanProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    const stored = localStorage.getItem("kanban-cards");
    return stored ? JSON.parse(stored) : cardData;
  });

  useEffect(() => {
    localStorage.setItem("kanban-cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <KanbanContext.Provider value={{ cards, setCards }}>
      {children}
    </KanbanContext.Provider>
  );
};

export default KanbanProvider;
