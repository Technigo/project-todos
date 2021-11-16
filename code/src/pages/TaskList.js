import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ToDos from '../components/ToDos'
import AddTask from '../components/AddTask'
import todos from 'reducers/todos'


const TaskList = () => {
  const dispatch = useDispatch()

  const AllToDos = useSelector(
    (state) => state.todos.items.length
  )
  const completedToDos = useSelector(
    (state) => state.todos.items.filter((item) => item.isComplete)
  )

  return (
    <div>
      <ToDos />
      <span>Completed ToDos: {completedToDos.length}/{AllToDos} </span> 
      <button
        type='button'
        onClick={() => dispatch(todos.actions.completeAll())}
        >Complete all</button> 
      <AddTask />
    </div>

  )
}

export default TaskList
