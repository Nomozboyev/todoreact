import { useState } from 'react'
import { Header } from './header'
import { ToDoList} from './to_do_list'


export function App() {
  const [allToDo, setallToDo] = useState([])

  return (
    <>
    <Header setallToDo={setallToDo} />
    <ToDoList allToDo={allToDo}/>

   </>
  )
}

