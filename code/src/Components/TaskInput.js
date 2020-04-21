import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { todos } from '../Reducers/todos.js'




export const TaskInput = ({ listId }) => {
const dispatch = useDispatch()
const [inputValue, setInputValue] = useState("")

const handleOnSubmit = e => {
  e.preventDefault()
  // Här lägger vi till "task". 
  dispatch(
    todos.actions.addTodos({
      listId: listId,
      itemInfo: { description: inputValue, done: false }
  })
  )

  setInputValue("")
 }


  return(
    <form className="task-input" 
    onSubmit={handleOnSubmit}>
      <input
      type="text"
      onChange={e => setInputValue(e.target.value)}
      value= {inputValue}
      className="task-input-text"
      ></input>
      <input
      type="submit"
      className="task-input-button"
      value="Add task"
      ></input>
     </form>
   
  )
}