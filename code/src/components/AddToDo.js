import React, { useState } from 'react'         
import { useDispatch } from 'react-redux';

import todos from 'reducers/todos'

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('')

  const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entry: ' + newTodo)
    dispatch (
      todos.actions.addToDo({
        description: newTodo
      })
    )
    setNewTodo('') //clears input after user submit
	}

  const dispatch = useDispatch()

  return (
    <form onSubmit={onSubmit}>
      <textarea
        type="text"
        maxLength="60"
        placeholder="Add your todo..."
        onChange={(event) => setNewTodo(event.target.value)}
        value={newTodo}        
      >
      </textarea>
      <button 
        type='submit'
      > 
          +
      </button>
    </form>
  )
}

export default AddTodo