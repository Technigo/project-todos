import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todo from '../reducers/todo'

const AddTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todo.actions.addTodo(input))
  }

  return (
    <div>
      <p>Add a todo here: </p>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo}>Add todo</button>
    </div>
  )
}

export default AddTodo
