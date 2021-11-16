import React, { useState } from "react"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

const AddTodos = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input))
  }

  return (
    <section className="input-container">
      <input
        type="text"
        className="input-text"
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder="Add a todo"
      />
      <button className="addTodo-btn" onClick={onAddTodo}>
        +
      </button>
    </section>
  )
}

export default AddTodos
