import React, { useState } from 'react'
import uniqid from 'uniqid'
import {useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoInput = () => {
  const [newTask, setNewTask] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

      const newTodo = {
        id: uniqid(),
        description: newTask, //local state value here, (useState)
        isComplete: false 
      }
      dispatch(todos.actions.addTodo(newTodo))
      setNewTask('')
  }

  return (
    <form className="input-field" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button 
        type="submit">
        Add 
      </button>
    </form>
  )

}

export default TodoInput