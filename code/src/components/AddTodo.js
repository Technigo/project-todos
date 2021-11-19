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
          // required
          // content="value"
          // type="text"
          maxLength="24"
          minLength="4"
          className="input-box"
          placeholder="What will you do today?"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="add-todo-button" onClick={onAddTodo}>
          +
        </button>
      </form>
    </>
  )
}

export default AddTodo
