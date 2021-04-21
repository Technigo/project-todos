import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import todos from '../reducers/todos'

const Header = () => {
  const completedTodos = useSelector((store) => store.todos.items.filter((todo) => todo.isComplete === true))
  const items = useSelector((store) => store.todos.items) 
  const dispatch = useDispatch()

  return (
    <>
      <h1>What's up!</h1>
      {completedTodos.length > 0 &&
      <p>{completedTodos.length}/{items.length} tasks</p>
      } 
      <button onClick={()=> dispatch(todos.actions.removeAll())}>Remove all</button> 
      <button onClick={()=> dispatch(todos.actions.removeComplete())}>Remove comp</button> 
   </>
  )
}

export default Header