import React from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoHeader = () => {
  const dispatch = useDispatch()

  const onChange = () => {
    dispatch(todos.actions.removeAll(todos.id))
  }

  return (
    <div>
      <h1>What's up!</h1>
      <button onClick={()=> onChange()}>Remove all</button>
    </div>
  )
}

export default TodoHeader