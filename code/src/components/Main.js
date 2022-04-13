import React, {useState} from 'react'
import { useSelector } from 'react-redux'

import AddTodo from './AddTodo'
import TodosActions from './TodosActions'
import TodosList from './TodosList'
import NoTask from './NoTask'

const Main = () => {

  const allTodos = useSelector((store) => store.todos.items)

  const allDeletedItems = useSelector((store) => store.todos.deletedItems)

  const [isUndoDisabled, setIsUndoDisabled] = useState(true)

  return (
      <main>
        <AddTodo />
        {allTodos.length || allDeletedItems.length ?
        <>
        <TodosList setIsUndoDisabled={setIsUndoDisabled} />
        <TodosActions isUndoDisabled={isUndoDisabled} setIsUndoDisabled={setIsUndoDisabled} />
        </>
        :
        <NoTask /> }
      </main>
  )
}

export default Main
