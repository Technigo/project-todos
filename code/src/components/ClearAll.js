import React from 'react'
import { useDispatch } from 'react-redux'
import todos from '../reducers/todos'

const ClearAll = () => {
  const dispatch = useDispatch()

  //calling clearAllTodo with dispatch
  const clearAllTodo = () => {
    dispatch(todos.actions.clearAllTodo()) 
    localStorage.clear()
  }

  return (
    <div>
      <button onClick={clearAllTodo}>
        Clear All
      </button>
    </div>
  )
}
export default ClearAll

