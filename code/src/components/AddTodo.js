import React, { useState } from "react"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

import "./addtodo.css"

const AddTodo = () => {
  const [input, setInput] = useState("")
  const [category, setCategory] = useState("")

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input, category))
    setInput("")
    setCategory("")
  }

  return (
    <div className="todo-input">
      <div className="select-dropdown">
        <select
          className="categories"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option disabled value="">
            Category
          </option>
          <option value="shopping">Shopping</option>
          <option value="work">Work</option>
          <option value="">Social</option>
        </select>
      </div>
      <input
        className="text-field"
        type="text"
        value={input}
        placeholder="Add new task"
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="add-btn" onClick={onAddTodo}>
        <span className="plus-sign" role="img" aria-label="plus sign">
          ➕
        </span>
      </button>
    </div>
  )
}

export default AddTodo
