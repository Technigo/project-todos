import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { todos } from "../reducers/todos.js"

// Receives listId as input
export const TodoInput = () => {
  const dispatch = useDispatch()

  // State for input from text box
const [inputValue, setInputValue] = useState("")

  // Create handle submit function to dispatch addTodo  
const handleOnSubmit = (e) => {
  e.preventDefault()

  dispatch(
    todos.actions.addTodo({
        description: inputValue,
        done: false
    })
  )

  setInputValue("")
}
  
return (
 <form className="todo-input" onSubmit={handleOnSubmit}>
    <input
    type="text"
    onChange={e => setInputValue(e.target.value)}
    value={inputValue}
    className="todo-input-text"
    required
    ></input>
    <input
    type="submit"
    className="todo-input-button"
    value="+"
    ></input>
  </form>
  )
};