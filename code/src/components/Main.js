import React, {useState} from 'react'

import AddTodo from './AddTodo'
import TodosActions from './TodosActions'
import TodosList from './TodosList'


const Main = () => {
  const [isUndoDisabled, setIsUndoDisabled] = useState(true)

  return (
      <main>
        <AddTodo />
        <TodosList setIsUndoDisabled={setIsUndoDisabled} />
        <TodosActions isUndoDisabled={isUndoDisabled} setIsUndoDisabled={setIsUndoDisabled} />
      </main>
  )
}

export default Main
