import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const AddTask = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTask = () => {
    dispatch(todos.actions.addTodo(input))
    // empty the text field
    setInput('')
  }

  return (
    <div className='add-task'>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='Add Task...'
      />
      <button type='button' onClick={onAddTask}>
        Add Task
      </button>
    </div>
  )
}

export default AddTask
