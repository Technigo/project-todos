import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import '../styling/todo-input.css'

// receive listId for input 
export const TodoInput = () => {
  const dispatch = useDispatch()

  // state for input from that comes from text box
  const [inputValue, setInputValue] = useState("")

  // handle submit function to dispatch addTodo
  const handleOnSubmit = (e) => {
    e.preventDefault()

    // Dispatch the action to save the new todo item to list
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false,
        //category: selectCategory,
        //date: selectDate
      })
    )

    // clear the text field after submit
    setInputValue("")
  }

  return (
    <form className="todo-input" onSubmit={handleOnSubmit}>
      <input
        type="submit"
        className="todo-input-button"
        value="+"
      ></input>
      <input
        type="text"
        placeholder="new todo..."
        className="todo-input-text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      ></input>
    </form >
  )
}