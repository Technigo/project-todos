import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/Todos'

export const AddTodo = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  const onItemAdd = () => {
    dispatch(todos.actions.addItem(value))
  }

  return ( 
    <div>
      <input 
      type="text" 
      value={value} 
      onChange={e => setValue(e.target.value)}  
      />
      <button onClick={onItemAdd}>Add new todo</button>
    </div>
  )
}