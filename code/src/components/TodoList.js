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

  const sortCompletedTasks = items.filter((item) => item.isComplete)

  const unCompletedTasks = items.filter((item) => !item.isComplete)

  return (
    <>
      <section className="todo-container">
        {unCompletedTasks.map((item) => (
          <div
            className="list-item-box"
            key={item.id}
            style={{
              display: item.isComplete ? "none" : "",
            }}
          >
            <p>
              <input
                className="check-box"
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />

              {/* <span
                // style={{
                //   textDecoration: item.isComplete ? "line-through" : "",
                // }}
              > */}
              <span className="item-text">{item.text}</span>
            </p>
            <button
              className="delete-btn"
              onClick={() => onRemoveTodo(item.id)}
            >
              <span className="delete-sign" role="img" aria-label="trash bin">
                {" "}
                <i className="fas fa-trash-alt"></i>{" "}
              </span>
            </button>
          </div>
        ))}
      </section>
      <h2>Completed tasks</h2>

      {sortCompletedTasks.map((item) => (
        <div className="completed-items" key={item.id}>
          <input
            className="check-box"
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <p>{item.text}</p>
          <button className="delete-btn" onClick={() => onRemoveTodo(item.id)}>
            <span className="delete-complete">
              <span className="delete-sign" role="img" aria-label="trash bin">
                <i className="fas fa-trash-alt"></i>
              </span>
            </span>
          </button>
        </div>
      ))}
    </>
  )
}

export default TodoList
