import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const NewItem = () => {

const [newTodo, setNewTodo] = useState('')
const [showInput , setShowInput] = useState(false)

const onNewTodo = (event) => {
  setNewTodo(event.target.value)
  console.log(newTodo)
}

const dispatch = useDispatch()

const onShowInput = () => {
  setShowInput(true)
}

const onSubmit = () => {
  dispatch(todos.actions.addNewTodo(newTodo))
  setNewTodo('')
  setShowInput(false)
}

  return (
    <>
    {showInput ? (
      <div className= {showInput ? "" : "hide-inputfield"}>
      <form className="add-container">
        <input
          type="text"
          onChange={onNewTodo}
          minLength="5"
          maxLength="20"
          value={newTodo}
          placeholder="add new task"
        />
        <button 
          type="sumbit"
          className="add-button"
          onClick={onSubmit}
          disabled={newTodo === ''}
        >
          +
        </button>
      </form>
    </div>
    ):(
    <div className="display-button-container">
      <button 
        type="button"
        className="display-button"
        onClick={onShowInput}
      >
        +
      </button>
    </div>
    )}
    
    </>
  )  
}

export default NewItem