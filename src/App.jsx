import './App.css'
import KanbanBoardComponent from './components/KanbanBoardComponent'
import { KanbanProvider } from './contexts/KanbanContext'

function App() {

  return (
   <KanbanProvider>
  <KanbanBoardComponent />
</KanbanProvider>

  )
}

export default App
