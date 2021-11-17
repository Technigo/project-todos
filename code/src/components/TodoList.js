import React from "react"
import moment from "moment"
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

  const sortCompletedTasks = useSelector((store) =>
    store.todos.items.filter((item) => item.isComplete)
  )

  return (
    <>
      <section className="todo-container">
        {items.map((item) => (
          <div
            className="list-item-box"
            key={item.id}
            style={{
              opacity: item.isComplete ? "0.5" : "",
              background: item.isComplete ? "gray" : "",
            }}
          >
            <p>
              <input
                className="check-box"
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <label for="check-box"></label>
              <span
                style={{
                  textDecoration: item.isComplete ? "line-through" : "",
                }}
              >
                <span className="item-text">{item.text}</span>
              </span>
            </p>
            <p className="date">{moment(item.createdAt).calendar()}</p>
            <button
              className="delete-btn"
              onClick={() => onRemoveTodo(item.id)}
            >
              <span className="delete-sign"> Remove </span>
            </button>
          </div>
        ))}
      </section>
      <h2>completed tasks</h2>
      {sortCompletedTasks.map((item) => (
        <>
          <div className="completed-items" key={item.id}>
            <p>{item.text}</p>
            <button
              className="delete-btn"
              onClick={() => onRemoveTodo(item.id)}
            >
              <span className="delete-sign"> Remove </span>
            </button>
          </div>
        </>
      ))}
    </>
  )
}

export default TodoList
