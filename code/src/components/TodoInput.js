import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const Todoinput = () => {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()  
    setNewTodo(event.target.value)
  }

  const handleClick = () => {
    dispatch(todos.actions.saveTodo({
      items: newTodo,
      isComplete: false, 
      id: Date.now()
    }))
  }

  return (
    <>
      <input 
       type="text" 
       value={newTodo} 
       onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default Todoinput