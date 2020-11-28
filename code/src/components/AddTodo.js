import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/Todos'
import './AddTodo.css'

export const AddTodo = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  const onItemAdd = () => {
    dispatch(todos.actions.addItem(value))
  }

  return ( 
    <div className="add-todo-container">
      <input 
      type="text" 
      value={value} 
      onChange={e => setValue(e.target.value)}  
      />
      <button className="add-button" onClick={onItemAdd}>Add new task</button>
    </div>
  )
}