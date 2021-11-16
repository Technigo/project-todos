import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from "../reducers/todos"

import "./todolist.css"

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onRemoveTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <section className="todo-container">
      {items.map((item) => (
        <div className="list-item-box" key={item.id}>
          <input
            className="check-box"
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <label for="check-box"></label>
          <p>{item.text}</p>
          <button className="delete-btn" onClick={() => onRemoveTodo(item.id)}>
            <span className="delete-sign"> - </span>
          </button>
        </div>
      ))}
    </section>
  )
}

export default TodoList
