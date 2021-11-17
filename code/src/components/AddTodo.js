import React, { useState } from "react"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

const AddTodo = () => {
  const [input, setInput] = useState("")

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
    setInput("") // to clean the input box
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} className="add-todo-wrap">
        <input
          minLength="4"
          className="input-box"
          type="text"
          placeholder="What will you do today?"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="add-todo-button" onClick={onAddTodo}>
          Add todo
        </button>
      </form>
    </>
  )
}

export default AddTodo
