import { createContext, useContext, useEffect, useState } from "react";
import { cardData } from "../utils/data";

const KanbanContext = createContext();

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

export const useKanban = () => useContext(KanbanContext);
