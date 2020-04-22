import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const AddItem = () => {

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addTodo({
      newItem: {
        text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
        completed: false
      }
    }))
    setInputValue('')
  }


  return (
    <form className="add-item" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        minLength="2"
        placeholder="Add task"
        required
      />
      <button className="add-btn">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  )
}