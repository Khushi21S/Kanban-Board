
import { useContext } from "react";
import KanbanContext from "./kanbanContext";

export const useKanban = () => useContext(KanbanContext);
