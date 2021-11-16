import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const AddTask = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const onAddToDo = (toDo) => {
    dispatch(todos.actions.addToDo(toDo))
    setInput('')
  }

  return (
    <div>
      <input 
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button 
        type='submit'
        disabled = {!input}
        onClick={() => onAddToDo(input)}>Add new task
      </button>
    </div>
  )
}

export default AddTask
