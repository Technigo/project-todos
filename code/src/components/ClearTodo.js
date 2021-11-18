import React from 'react'
import { useDispatch } from 'react-redux'
import todos from '../reducers/todos'

const ClearTodo = () => {
  const dispatch = useDispatch()

  //calling clearAllTodo with dispatch
  const clearTodo = (id) => {
    dispatch(todos.actions.clearTodo(id)) 
  }

  return (
    <div key={item.id}>
     <button onClick={() => clearTodo(item.id)}>Clear</button>
    </div>
  )
}
export default ClearTodo